import { NavLink, useNavigate } from "react-router-dom"
import './Navbar.css'
import axios from "axios"

function Navbar() {

    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    const handellogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(
                res => {
                    if (res.data.Status === "Sucess") {
                        navigate('/')
                    } else {
                        alert(res.data.Error)
                    }
                }
            )
    }





    return (
        <nav className="navbar">
            <div className="navbar-logo">
                RecycleAI
            </div>
            <div className="navbar-links">
                <NavLink to="/home" className="nav-link">Scan</NavLink>
                <NavLink to="centers" className="nav-link">Centers</NavLink>
                <button onClick={handellogout} className="nav-link">Log out</button>
                <NavLink to="profile" className="nav-link">Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar