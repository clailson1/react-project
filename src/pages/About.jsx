import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";

const About = () => {

    // ___Test Lazy Loading___
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => setLoading(false), 2000);
    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) {
    //     return <h2>🌀 Loading dentro do About...</h2>;
    // }
    // ___Test Lazy Loading___

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