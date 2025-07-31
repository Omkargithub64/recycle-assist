
import { Link, useNavigate } from "react-router-dom"
import "./Auth.css"
import { useState } from "react"
import axios from "axios";


function Login() {


    const [lvalues, setlvalues] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handellogin = (event : React.FormEvent) => {
        event.preventDefault();

        axios.post('http://localhost:8081/login', lvalues)
            .then(res => {
                if (res.data.Status === "Sucess") {
                    navigate('/home')
                } else {
                    alert(res.data.Error)
                }
            })

    }




    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>
                <form onSubmit={handellogin}>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" onChange={e=>{setlvalues({...lvalues, username:e.target.value})}} placeholder="Enter your username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={e=>{setlvalues({...lvalues, password:e.target.value})}} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>

                <hr className="divider" />

                <p className="signup-text">
                    Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}


export default Login