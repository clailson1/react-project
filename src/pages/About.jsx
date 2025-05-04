// import { useEffect, useState } from "react";
import { Fieldset } from 'primereact/fieldset';
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
        <div className="card m-5">
            <Fieldset legend="About">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                        to={"/contact"}
                        className="p-button p-component no-underline"
                        style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <span
                            className="p-button-icon pi pi-phone mr-2"
                            style={{ color: "black" }}
                        />
                        <span
                            className="p-button-label"
                            style={{ color: "black" }}
                        >
                            Contact Page
                        </span>
                    </NavLink>
                </div>
            </Fieldset>
        </div>
    );
}

export default About;
