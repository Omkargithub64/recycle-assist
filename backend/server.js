import express, { json, response } from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import cookieParser from 'cookie-parser';
import axios from 'axios';



const app = express()

const corsOptions = {
    origin: ['http://localhost:5173'],
    credentials: true,
    methods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE',],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

const PORT = 8081
const salt = 10;


const db = mysql.createConnection({
    host: '',
    user: "root",
    password: "",
    database: ""
})



app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`username`,`email`,`password`) VALUES (?)";

    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error in hashing password" })
        const values = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, errres) => {
            if (err) return res.json({ Error: err });
            return res.json({ Status: "Sucess" })
        })


    })


})


app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM users WHERE username = ?';
    db.query(sql, [req.body.username], (err, data) => {
        if (err) return res.json({ Error: err })
        if (data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if (err) return res.json({ Error: "Password compare error" });
                if (response) {

                    const name = data[0].username;
                    const token = jwt.sign({ name }, "", { expiresIn: '1d' });
                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: true, 
                        sameSite: 'None', 
                        maxAge: 24 * 60 * 60 * 1000,
                    })

                    return res.json({ Status: "Sucess" })
                } else {
                    return res.json({ Error: "Wrong Password" })
                }
            })

        } else {
            return res.json({ Error: "No username" })
        }
    })
})


const verifyuser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "You are Not Authenticated" })
    } else {
        jwt.verify(token, "", (err, decoded) => {
            if (err) {
                return res.json({ Error: "token error" })
            } else {
                req.username = decoded.name
                next()
            }
        })
    }

}

app.get('/verify', verifyuser, (req, res) => {
    return res.json({ Status: "Sucess" })

})

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: "Sucess" })
})

app.post('/analyse', verifyuser, async (req, ress) => {
    const insertquery = "INSERT INTO items (`username`,`itemname`,`itemurl`,`steps`,`itemfilename` ) values (?,?,?,?,?)"
    if (!req.body.imageurl || !req.body.imageurl.startsWith('http')) {
        return ress.status(400).json({ Error: "Invalid image URL" });
    }
    axios.post('https://pythonmlbackend-741170581664.us-central1.run.app/identify', { imgurl: req.body.imageurl })
        .then(res => {
            if (res.data) {
                const values = [
                    req.username,
                    res.data.name,
                    req.body.imageurl,
                    res.data.steps,
                    res.data.filename,
                ]
                db.query(insertquery, values, (err, result) => {
                    if (err) return ress.json({ Error: err })
                    return ress.json({ Status: "Sucess", id: result.insertId })
                })
            }
        })
})



app.get('/item/:id', (req, res) => {
    const sql_retrive_query = "SELECT * FROM items WHERE id = ?";
    const itemid = req.params.id;

    db.query(sql_retrive_query, [itemid], (err, result) => {
        if (err) return res.json({ Error: err })
        if (result.length == 0) return res.json({ Error: "Item not found" })
        return res.json({ Status: "Sucess", item: result[0] })
    })

})


app.listen(PORT, () => {
    console.log("running");
})
