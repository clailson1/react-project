import { NavLink } from "react-router-dom";

const About = () => {
    return (  
        <>
            <h3>About Page</h3>
            <nav>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default About;