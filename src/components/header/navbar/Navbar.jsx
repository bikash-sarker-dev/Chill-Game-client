import { useContext, useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { AuthContext, ThemeContext } from "../../../contextAip/ContextCreate";
import NavItems from "./NavItems";

const Navbar = () => {
  const { user, accountLogOut } = useContext(AuthContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [scroll, setScroll] = useState(false);

  const navigate = useNavigate();

  const logOut = () => {
    accountLogOut()
      .then(() => {
        toast.success("Your LogOut Successfully !");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  });

  return (
    <div className={`${scroll ? "sticky w-full bg-gray-900" : ""}`}>
      <div className="container">
        <div className="navbar  py-6">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow "
              >
                <NavItems />
              </ul>
            </div>
            <div className="">
              <img className="w-14 hidden sm:block" src="./gLogo.png" alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <NavItems />
            </ul>
          </div>
          <div className="navbar-end space-x-6 ">
            <button onClick={() => setDarkMode((darkMode) => !darkMode)}>
              {darkMode ? (
                <MdOutlineLightMode className="text-4xl dark:text-base-400" />
              ) : (
                <MdOutlineDarkMode className="text-4xl text-gary-600  " />
              )}
            </button>

            {user && user?.email ? (
              <div className="space-x-3 flex items-center">
                <Tooltip anchorSelect=".my-anchor-element" place="left">
                  {user?.displayName}
                </Tooltip>
                <div className="avatar placeholder my-anchor-element cursor-pointer ">
                  <div className="bg-neutral text-neutral-content w-12 rounded-full border-2 border-teal-500">
                    <img
                      src={user?.photoURL}
                      alt="profile photo is not support"
                    />
                  </div>
                </div>

                <button
                  onClick={logOut}
                  className="btn btn-sm sm:btn-md btn-outline btn-info uppercase"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="space-x-3 flex md:flex-row">
                <Link
                  className="btn btn-outline btn-sm sm:btn-md btn-info uppercase"
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-sm sm:btn-md btn-outline btn-info uppercase "
                  to="/register"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
