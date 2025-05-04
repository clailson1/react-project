import { NavLink } from "react-router-dom";
import { Panel } from 'primereact/panel';
import 'primeicons/primeicons.css';

const Contact = () => {
    return (
        <Panel
            header={
                <span>
                    <i className="pi pi-user" style={{ marginRight: '8px' }}></i>
                    Contact
                </span>
            }
            className="m-5"
        >
            <p className="m-0">
                Email: email@email.com
            </p>
            <p className="mt-2">
                Phone: (11) 98888-7777
            </p>
            <div className="card flex justify-content-around mt-3">
                <NavLink
                    to={"/home"}
                    className="p-button p-component no-underline"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span
                        className="p-button-icon pi pi-home mr-2"
                        style={{ color: "black" }}
                    />
                    <span
                        className="p-button-label"
                        style={{ color: "black" }}
                    >
                        Back to Home
                    </span>
                </NavLink>
                <NavLink
                    to={"/about"}
                    className="p-button p-component no-underline"
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <span
                        className="p-button-icon pi pi-user mr-2"
                        style={{ color: "black" }}
                    />
                    <span
                        className="p-button-label"
                        style={{ color: "black" }}
                    >
                        About Page
                    </span>
                </NavLink>
            </div>
        </Panel>
    );
}

export default Contact;
