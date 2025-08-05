import { Link, useParams } from "react-router-dom"
import './Result.css';
import { useEffect, useState } from "react";
import axios from "axios";
import base_url from "../../components/node_base_url";

function Result() {
    const { id } = useParams()

    const [itemname, setitemname] = useState("")
    const [itemurl, setitemurl] = useState("null")
    const [steps, setsteps] = useState("")
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        axios
            .get(`${base_url}/verify`, {
                withCredentials: true
            })
            .then((res) => {
                if (res.data.Status === "Sucess") {
                    setAuth(true);
                } else {
                    setAuth(false);
                    // setMessage(res.data.Error);
                }
            })
            .catch(() => {
                setAuth(false);
            });
    }, []);

    useEffect(() => {
        axios.get(`${base_url}/item/${id}`)
            .then(res => {
                if (res.data.Status === "Sucess") {
                    setitemname(res.data.item.itemname)
                    setitemurl(res.data.item.itemurl)
                    setsteps(res.data.item.steps)
                    // console.log(res.data.item);

                }
            })
    }, [id])

    const renderSteps = (steps: string) => {
        return steps
            .split("*")
            .filter(line => line.trim() !== "")
            .map((line, i) => <li key={i}>{line.trim()}</li>);
    };




    return (
        <div className="result-container">
            {
                auth?
                
            <div className="result-card">
                <h1 className="result-title">Scan Result</h1>

                <div className="result-image">
                    {/* Placeholder for the scanned image */}
                    <img

                        src={itemurl}
                        alt="Scanned item"
                    />
                </div>

                <div className="item-info">
                    <h2 className="item-name">{itemname}</h2>
                    <p className="item-category">Category: <span className="category-tag">Recyclable</span></p>
                </div>

                <div className="llm-explanation">
                    <h3>Recycling Steps</h3>
                    <ul className="steps-list">
                        {renderSteps(steps)}
                    </ul>
                </div>

                <Link to="/home/centers">
                    <button className="center-button">Find Nearby Centers</button>
                </Link>
            </div>
                :
                <Link to="/">
                    <button className="center-button">Login</button>
                </Link>
            }
        </div>
    )
}

export default Result