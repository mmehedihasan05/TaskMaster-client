import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { GrLogout } from "react-icons/gr";

const Dashboard_nav = () => {
    const { logout, currentUser } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then((response) => {})
            .catch((error) => {});

        toast.promise(logout(), {
            loading: "Logging out...",
            success: <b>Logged out successfully!</b>,
            error: <b>Unable to log out</b>,
        });
    };
    return (
        <div className="drawer md:drawer-open grid-cols-1 w-fit">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary btn-outline drawer-button md:hidden bg-none text-2xl"
                >
                    <IoMenuOutline />
                </label>
            </div>

            <div className="drawer-side shadow-lg">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="py-8 space-y-6 bg-[white] h-full ">
                    {/* Website logo */}
                    <div className="">
                        <NavLink to="/">
                            <img className="w-[145px] mx-auto" src="/logo.png" alt="" />
                        </NavLink>
                    </div>

                    {/* Items */}
                    <div>
                        <ul
                            className=" p-4 w-60 min-h-full text-base-content 
                        
                        flex flex-col gap-2  "
                        >
                            {/* Sidebar content here */}
                            <li className="">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? ` text-[--text-highlight] hover:text-[--text-highlight] border-b-2 border-[--text-highlight] hover:bg-transparent font-semibold`
                                            : ` hover:text-[--text-highlight] hover:bg-transparent font-semibold`
                                    }
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <hr />
                            <li className="">
                                <NavLink
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? ` text-[--text-highlight] hover:text-[--text-highlight] border-b-2 border-[--text-highlight] hover:bg-transparent font-semibold`
                                            : ` hover:text-[--text-highlight] hover:bg-transparent font-semibold`
                                    }
                                    to="/create-task"
                                >
                                    Create Task
                                </NavLink>
                            </li>
                            <hr />
                        </ul>
                    </div>

                    {/* profile */}
                    <div>
                        <ul
                            className=" p-4 w-60 min-h-full text-base-content 
                        
                        flex flex-col gap-2  "
                        >
                            {/* Sidebar content here */}
                            <li className="">
                                <div className="flex items-center gap-2 justify-between">
                                    <img
                                        src={currentUser?.photoURL || "/no_user.png"}
                                        className="h-[24px] w-[24px] rounded-full 
                                outline outline-1  outline-offset-1
                                cursor-pointer"
                                        title={currentUser?.displayName}
                                    />

                                    <button
                                        className="_btn font-medium hover:text-[--text-highlight] text-lg "
                                        onClick={handleLogout}
                                        title="Logout"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </li>
                            {/* <li>
                                <button
                                    className="_btn hover:text-[--text-highlight] text-lg "
                                    onClick={handleLogout}
                                    title="Logout"
                                >
                                    Logout
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard_nav;
