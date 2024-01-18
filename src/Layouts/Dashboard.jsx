import { FaHome, FaList, FaStore } from 'react-icons/fa';
import { IoCreate } from 'react-icons/io5';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Dashboard = () => {
  const { user, loading } = useAuth();

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-58 min-h-screen text-white bg-gray-600">
        <ul className="menu p-4">
          <li className="py-1">
            <div>
              <img src={user?.photoURL} className="w-10 rounded-full" alt="" />
              <h1 className="font-bold text-base">{user?.displayName}</h1>
            </div>
          </li>

          <li className="py-1">
            <NavLink to="/dashboard">
              <FaStore />
              Dashboard
            </NavLink>
          </li>

          <li className="py-1">
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="flex-1">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center uppercase py-10 tracking-widest font-bold text-5xl text-black">
            Welcome to dashboard
          </h1>
        </div>

        <Outlet />  
      </div>
    </div>
  );
};

export default Dashboard;
