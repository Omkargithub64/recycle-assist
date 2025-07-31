
import { Link } from "react-router-dom"
import "./Auth.css"


function Login() {
    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">Login</h1>

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Enter your username" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter your password" />
                </div>

                <Link to="/home">
                    <button className="login-button">Login</button>
                </Link>

                <hr className="divider" />

                <p className="signup-text">
                    Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}


export default Login