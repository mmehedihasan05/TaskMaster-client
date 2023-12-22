import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co/s25bqf2/taskmaster-banner.jpg)",
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold text-[--bg-white]">TaskMaster</h1>
                    <p className="mb-5 text-[--bg-lite]">
                        Streamline your productivity with our intuitive task management platform.
                        Effortlessly organize, prioritize, and track your tasks, ensuring efficient
                        workflow and successful project completion. Empower your team to achieve
                        more with TaskMaster's user-friendly features and collaborative tools.
                    </p>
                    <button className="btn btn-primary">
                        <NavLink to="/login">Get Started</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
