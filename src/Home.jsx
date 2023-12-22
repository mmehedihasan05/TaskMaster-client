import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Dashboard_home from "./Dashboard/Dashboard_home";
import About from "./Sections/About";
import Banner from "./Sections/Banner";

const Home = () => {
    const { logout, currentUser } = useContext(AuthContext);

    return (
        <div className="space-y-8">
            {currentUser?.email ? (
                <Dashboard_home></Dashboard_home>
            ) : (
                <div>
                    <Banner></Banner>
                    <About></About>
                </div>
            )}
        </div>
    );
};

export default Home;
