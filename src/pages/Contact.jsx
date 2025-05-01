import { NavLink } from "react-router-dom";

const Contact = () => {
    return (  
        <>
            <h3>Contact Page</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reprehenderit error labore, asperiores ab, ducimus modi fuga obcaecati, tempore sequi eum est commodi maiores ipsa officia aperiam cupiditate repellat hic.</p>
            <nav>
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
 
export default Contact;