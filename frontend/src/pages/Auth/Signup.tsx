import { Link, useNavigate } from "react-router-dom";
import './Signup.css';
import { useState } from "react";
import axios  from "axios";



export default function Signup() {

    const [values, setvalues] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const navigate = useNavigate()

    const handleSubmit = (event : React.FormEvent)=>{
        event.preventDefault();
        console.log(values)
        axios.post('http://localhost:8081/signup', values)
        .then(res => {
            if(res.data.Status){
                navigate('/')
            } else {
                alert('error') 
            }
        })
        .then(err => console.log(err))

    }





    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1 className="signup-title">Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={e => setvalues({ ...values, email: e.target.value })} placeholder="Enter your email" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" onChange={e => { setvalues({ ...values, username: e.target.value }) }} placeholder="Choose a username" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={e => { setvalues({ ...values, password: e.target.value }) }} placeholder="Enter a password" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            id="confirm-password"
                            type="password"
                            onChange={
                                e => {
                                    setvalues({
                                        ...values,
                                        confirm_password: e.target.value
                                    })
                                }
                            }
                            placeholder="Re-enter your password"
                        />
                    </div>

                    <button type="submit" className="signup-button">Sign Up</button>
                </form>

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
