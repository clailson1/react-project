import { NavLink, useParams } from "react-router-dom";

const Product = () => {

    const { id, name } = useParams();
    return (   
        <>
            <NavLink to={"/products"}>Back to list of products</NavLink>
            <h2>{name}</h2>
            <h3>Product id: {id}</h3>
        </>
    );
}
 
export default Product; 
