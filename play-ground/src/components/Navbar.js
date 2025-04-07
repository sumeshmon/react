import reactLogo from '../images/logo.png'
export default function Navbar () {
    return (
        <nav className="nav">
            <img src={reactLogo} alt="test" className="logo"/>
            <ul>
                <li><a href="#">Nav 1</a></li>
                <li><a href="#">Nav 2</a></li>
                <li><a href="#">Nav 3</a></li>
                <li><a href="#">Nav 4</a></li>
                <li><a href="#">Nav 5</a></li>
            </ul>
        </nav>
    )
}