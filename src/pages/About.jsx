// import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, dolores totam ea odio voluptatem nulla quisquam minus itaque reiciendis molestias nemo ipsum, veniam, esse modi excepturi error iusto id deleniti! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus a dolorum, animi modi consectetur, minus corrupti porro voluptates error officia quos enim ut consequuntur cum autem aspernatur qui dolorem ea.</p>
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