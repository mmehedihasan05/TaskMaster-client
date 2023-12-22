/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { GrLogout } from "react-icons/gr";

const NavBar = () => {
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
        <div id="navbar" className="bg-white shadow-md ">
            <div
                className="title rounded-sm
        flex items-center justify-between
        py-5 lg:py-4 px-2
        custom-width relative"
            >
                {/* Main Logo + Menu open close */}
                <div className="flex items-center gap-2 md:gap-4 menuFirst">
                    {/* Brand Logo */}
                    <div>
                        <NavLink to="/">
                            <img className="w-[140px] md:w-[220px] " src="/logo.png" alt="" />
                        </NavLink>
                    </div>
                </div>

                {/* Last Items : Login/register */}
                <div>
                    {currentUser?.email ? (
                        <div className="flex gap-4 justify-center items-center">
                            <div className="">
                                <img
                                    src={currentUser?.photoURL || "/no_user.png"}
                                    className="h-[24px] w-[24px] md:h-[36px] md:w-[36px] rounded-full 
                                outline outline-1  outline-offset-1
                                cursor-pointer"
                                    title={currentUser?.displayName}
                                />
                            </div>

                            <button
                                className="_btn font-semibold hover:text-[--text-highlight] text-xl"
                                onClick={handleLogout}
                                title="Logout"
                            >
                                <GrLogout></GrLogout>
                            </button>
                        </div>
                    ) : (
                        <div className="flex px-1 gap-2 text-sm md:text-base md:gap-6 justify-center font-semibold">
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? ` text-[--text-highlight] border-b-2 border-[--text-highlight]`
                                        : ` hover:text-[--text-highlight]`
                                }
                                to="/register"
                            >
                                Register
                            </NavLink>
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? ` text-[--text-highlight] border-b-2 border-[--text-highlight]`
                                        : ` hover:text-[--text-highlight]`
                                }
                                to="/login"
                            >
                                Login
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
