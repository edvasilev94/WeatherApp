import { Link } from "react-router-dom";

import '../Navbar/navbar.css'

import Clock from '../Clock/Clock.jsx'

export default function Navbar () {

return(
    <nav className="navbar">
        <ul className="navbar-ul">
            <Link to="/" className="navbar-li logo"><img src="../../../logo.png" alt="logo" className="logo" /></Link>
            <li className="navbar-li"><Clock /></li>
        </ul>
    </nav>
)
};