import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import PageLayout from "../layouts/PageLayout";
// import { lazy } from "react";

// Lazy loading com atraso para testar o fallback
// const Home = lazy(async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return import("../pages/Home");
// });

// const About = lazy(async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return import("../pages/About");
// });

// const Contact = lazy(async () => {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     return import("../pages/Contact");
// });

const Paths = () => {
    return (  
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout />}>
                        <Route index element={<Home />}/>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/contact" element={<Contact />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;