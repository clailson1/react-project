import { NavLink } from "react-router-dom";

const Header = () => {
    return (  
        <>
            <header>
                Website Header
            </header>
            <nav>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Header;