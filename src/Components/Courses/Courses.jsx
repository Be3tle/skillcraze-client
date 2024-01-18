import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const Courses = () => {
  const [allCourse, setAllCourse] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get('/courses')
      .then((res) => {
        setAllCourse(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="pb-12">
      <h1 className="text-center py-12 lg:py-20 text-2xl lg:text-5xl font-bold">
        Featured Courses
      </h1>

      <div className="container mx-auto">
        <div className="home-container gap-5">
          <div className="card-container place-items-center grid grid-cols-1 lg:grid-cols-3 gap-4">
            {allCourse.map((course) => (
              <div
                key={course.id}
                className="card w-96 border-2 bg-gray-50 rounded-lg p-2 mb-4 "
              >
                <img
                  className="rounded-md p-3 w-full"
                  src={course.img}
                  alt=""
                />
                <div className="px-3">
                  <h2 className="py-2 font-semibold">{course.title}</h2>
                  <p>Instructor: {course.instructor}</p>
                </div>
                <Link to={`/details/${course._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-36 py-2 mx-3 my-2 rounded">
                    Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
