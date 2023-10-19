import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/user-info">User Info</Link>
                </li>
                <li>
                    <Link to="/life-calendar">Life Calendar</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}