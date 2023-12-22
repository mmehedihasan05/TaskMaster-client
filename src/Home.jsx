import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import About from "./Sections/About";
import Banner from "./Sections/Banner";

const Home = () => {
    const { logout, currentUser } = useContext(AuthContext);

    return (
        <div className="space-y-8">
            {currentUser?.email ? (
                ""
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
