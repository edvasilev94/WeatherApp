import '../Navbar/navbar.css'

import Clock from '../Clock/Clock.jsx'

export default function Navbar () {

return(
    <nav className="navbar">
        <ul className="navbar-ul">
            <li className="navbar-li">Logo</li>
            <li className="navbar-li"><Clock /></li>
        </ul>
    </nav>
)
};