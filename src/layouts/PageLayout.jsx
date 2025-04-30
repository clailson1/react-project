import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Suspense } from "react";
import Loading from "../fallback/Loading";

const PageLayout = () => {
    return (  
        <>
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
}
 
export default PageLayout;