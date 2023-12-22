import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Dashboard_nav from "./Dashboard/Dashboard_nav";
import Footer from "./Sections/Footer";
import NavBar from "./Sections/NavBar";

const Root = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <div id="appRoot" className="">
            <div className="min-h-screen flex flex-col gap-y-8">
                {currentUser?.email ? (
                    <div className="px-2 py-2 grid grid-cols-3">
                        <div className="col-span-1">
                            <Dashboard_nav></Dashboard_nav>
                        </div>
                        <div className="col-span-2">
                            <Outlet></Outlet>
                        </div>
                    </div>
                ) : (
                    <>
                        <div>
                            <NavBar></NavBar>
                        </div>
                        <div>
                            <Outlet></Outlet>
                        </div>
                        <div className="mt-auto">
                            <Footer></Footer>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Root;
