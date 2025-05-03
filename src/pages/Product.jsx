import { NavLink, useParams } from "react-router-dom";
import { Panel } from 'primereact/panel';

const Product = () => {
    const { id, name } = useParams();

    return (
        <div className="m-5">
            <div className="card">
                <NavLink
                    to="/products"
                    className="p-button p-component no-underline"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span className="p-button-icon pi pi-arrow-left mr-2" />
                    <span className="p-button-label">Back to list of products</span>
                </NavLink>
            </div>
            <div className="mt-5">
                <Panel header={name}>
                    <p className="m-0">
                        Product id: {id}
                    </p>
                </Panel>
            </div>
            
        </div>
    );
}

export default Product;
