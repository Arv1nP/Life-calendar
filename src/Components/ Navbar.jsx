export default function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/user-info">User Info</a>
                </li>
                <li>
                    <a href="/life-calendar">Life Calendar</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        </nav>
    )
}