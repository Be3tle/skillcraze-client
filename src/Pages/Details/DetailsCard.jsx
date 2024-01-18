import { useContext, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const DetailsCard = ({ course }) => {
  const { instructor, title, img, description } = course || {};

  return (
    <section className="bg-base-800 text-gray-700">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">{title}</h1>
          <p className="my-4 text-lg sm:mb-12">{description}</p>
          <p className="text-lg"> Instructor: {instructor}</p>
          
        </div>
      </div>
    </section>
  );
};
export default DetailsCard;
