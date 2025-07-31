import { Link } from "react-router-dom";
import './Signup.css';
export default function Signup() {
    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Create an Account</h1>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" placeholder="Choose a username" />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Enter a password" />
                </div>

                <div className="input-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        id="confirm-password"
                        type="password"
                        placeholder="Re-enter your password"
                    />
                </div>

                <button className="signup-button">Sign Up</button>

                <hr className="divider" />

                <p className="login-redirect">
                    Already have an account?{" "}
                    <Link to="/" className="login-link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
