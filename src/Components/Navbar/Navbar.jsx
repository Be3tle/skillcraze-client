import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navItems = (
    <div className="md:flex text-base">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>

      <li>
        <a href="">About Us</a>
      </li>
    </div>
  );

  return (
    <div className="navbar md:fixed z-10 bg-opacity-70 md:bg-opacity-30  bg-black text-white max-w-screen-2xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-neutral rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div>
            <img className="w-12" src="/assets/logo.jpeg" alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a
            onClick={handleLogOut}
            className="btn bg-blue-500 text-white hover:bg-blue-700 border-0"
          >
            Log Out
          </a>
        ) : (
          <a
            href="login"
            className="btn bg-blue-500 text-white hover:bg-blue-700 border-0"
          >
            Log In
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
