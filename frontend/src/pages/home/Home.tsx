import { Link } from "react-router-dom";
import './Home.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const [auth, setauth] = useState(false);
    const [message, setmessage] = useState('');
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081/verify')
            .then(
                res => {
                    if (res.data.Status == "Sucess") {
                        setauth(true)
                    } else {
                        setauth(false)
                        setmessage(res.data.Error)

                    }
                }
            )
    }, [])






    return (
        <div className="scan-container">
            {
                auth ?
                    <div className="scan-card">
                        <h1 className="scan-title">Scan Waste Item</h1>

                        <div className="upload-section">
                            <label htmlFor="image-upload" className="upload-label">
                                Upload Image
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="upload-input"
                            />
                        </div>

                        <div className="image-preview-box">
                            {/* In logic: Show preview here if image is uploaded */}
                            <p className="preview-placeholder">Image preview will appear here.</p>
                        </div>
                        <Link to="result">
                            <button className="scan-button">Scan Item</button>
                        </Link>
                    </div>
                    :
                    <div className="scan-card"><Link to="/">
                        <h1 className="scan-title">{message}</h1>
                        <button className="scan-button">Login</button>
                    </Link></div>
            }
        </div>
    )
}

export default Home