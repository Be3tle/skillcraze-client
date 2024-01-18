import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';
import EnrollmentRow from './EnrollmentRow';

const Enrollments = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState();

  useEffect(() => {
    if (user) {
      axios
        .get(`/enrollments/${user?.email}`)
        .then((res) => {
          console.log(res.data);
          setEnrollments(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [axios, user]);

  return (
    <div>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Title</th>
              <th>Instructor</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {enrollments &&
              enrollments.map((enrollment) => (
                <EnrollmentRow
                  key={enrollment._id}
                  enrollment={enrollment}
                ></EnrollmentRow>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Enrollments;
