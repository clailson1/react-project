import { NavLink } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <h2>Website Home</h2>
            <nav>
                <ul>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/products"}>List of Products</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Home;