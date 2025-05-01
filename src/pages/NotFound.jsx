import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (  
        <>
            <h3>Página não encontrada (404 Not Found)</h3>
            <NavLink to={"/"}>Voltar para página inicial</NavLink>
        </>
    );
}
 
export default NotFound;