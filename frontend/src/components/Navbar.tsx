import { NavLink } from "react-router-dom"
import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                ♻️ RecycleAI
            </div>
            <div className="navbar-links">
                <NavLink to="/home" className="nav-link">Scan</NavLink>
                <NavLink to="centers" className="nav-link">Centers</NavLink>
                <NavLink to="/" className="nav-link">Log out</NavLink>
                <NavLink to="profile" className="nav-link">Profile</NavLink>
            </div>
        </nav>
    )
}

export default Navbar