import { FaHome, FaStore } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Enrollments from '../Components/Enrollments/Enrollments';

const Dashboard = () => {
  const { user, loading } = useAuth();

  return (
    <div className="flex">
      {/* Sidebar (Desktop) */}
      <div className="hidden lg:block w-58 min-h-screen text-white bg-blue-400">
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

      {/* Drawer (Mobile) */}
      <div className="lg:hidden w-58 min-h-screen text-white bg-blue-400">
        {/* Content for mobile sidebar goes here */}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center uppercase py-10 tracking-widest font-bold text-xl lg:text-3xl text-black">
            My Enrolled Courses
          </h1>
        </div>
        <Enrollments></Enrollments>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
