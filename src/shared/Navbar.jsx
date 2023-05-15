import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    signOutUser();
    localStorage.removeItem("car-access-token");
  };
  return (
    <div>
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Services</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="" className="max-sm:w-10" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/booking">
                <button>My Booking</button>
              </Link>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              {user ? (
                <button onClick={handleLogout} className="btn btn-outline">
                  SignOut
                </button>
              ) : (
                <Link to="/login">
                  <button>Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline btn-error">Apointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
