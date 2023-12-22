import About from "./Sections/About";
import Banner from "./Sections/Banner";

const Home = () => {
    return (
        <div className="space-y-8">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;
