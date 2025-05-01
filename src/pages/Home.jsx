import { NavLink } from "react-router-dom";

const Home = () => {
    return (  
        <>
            <h2>Website Home</h2>
            <nav>
                <ul>
                    <li><NavLink to={"/products"}>List of Products</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt corrupti temporibus culpa commodi nihil quam atque. Consectetur itaque natus esse tenetur, quae nulla molestiae debitis corporis id, ipsa quos.</p>
        </>
    );
}
 
export default Home;