import { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const DetailsCard = ({ course }) => {
  const { instructor, title, img, description, enrollment_status, duration, schedule, location } =
    course || {};

  return (
    <section className="bg-base-800 text-gray-700">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:pt-12 lg:pt-28 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col pt-0 justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg text-left">
          <h1 className="text-5xl font-bold pb-12 sm:text-6xl">{title}</h1>

          <p className="text-xl py-2 font-semibold">Instructor: {instructor}</p>
          <p className="text-xl py-2 font-semibold">
            Enrollment: {enrollment_status}
          </p>
        </div>
      </div>

      <div className="container pb-20 ml-12 lg:ml-32 w-9/12 lg:w-11/12">
        <p className="text-lg lg:text-xl sm:text-center md:text-start text-justify py-2">
          {description}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Duration: {duration}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
          Schedule: {schedule}
        </p>
        <p className="text-lg font-semibold sm:text-center md:text-start text-justify py-2">
         Location: {location}
        </p>
      </div>
    </section>
  );
};
export default DetailsCard;
