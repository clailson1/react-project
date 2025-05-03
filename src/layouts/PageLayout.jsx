import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Suspense } from "react";
import Loading from "../fallback/Loading";

const PageLayout = () => {
    return (  
        <div className="flex flex-column min-h-screen">
            <Header />
            <Suspense fallback={<Loading />}>
                <main className="flex-grow-1">
                    <Outlet />
                </main>
            </Suspense>
            <Footer />
        </div>
    );
}
 
export default PageLayout;
