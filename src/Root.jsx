import { Outlet } from "react-router-dom";
import About from "./Sections/About";
import Banner from "./Sections/Banner";
import Footer from "./Sections/Footer";
import NavBar from "./Sections/NavBar";

const Root = () => {
    return (
        <div id="appRoot" className="">
            <div className="min-h-screen flex flex-col gap-y-8">
                <div>
                    <NavBar></NavBar>
                    <div className="space-y-8">
                        <Banner></Banner>
                        <About></About>
                    </div>
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
                <div className="mt-auto">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;
