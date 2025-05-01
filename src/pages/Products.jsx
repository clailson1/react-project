import { NavLink } from "react-router-dom";

const Products = () => {
    return (  
        <>      
            <NavLink to={"/home"}>Back to Home</NavLink>
            <h2>List of Products</h2>
            <ul>
                <li><NavLink to={"/product/1/Strawberry"}>Strawberry</NavLink></li>
                <li><NavLink to={"/product/2/Banana"}>Banana</NavLink></li>
                <li><NavLink to={"/product/3/Apple"}>Apple</NavLink></li>
                <li><NavLink to={"/product/4/Grape"}>Grape</NavLink></li>
                <li><NavLink to={"/product/5/Orange"}>Orange</NavLink></li>
            </ul>
        </>
    );
}
 
export default Products;
