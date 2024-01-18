import Swal from 'sweetalert2';
import EnrollmentRow from './EnrollmentRow';
import useAxios from '../../Hooks/useAxios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const Enrollments = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      axios
        .get(`/enrollments/${user?.email}`)
        .then((res) => {
          setEnrollments(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [axios, user, setEnrollments]);

  const handleComplete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/enrollments/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: 'Completed!',
                text: 'Successfully completed',
                icon: 'success',
              });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Course Title</th>
                <th>Instructor</th>
                <th>Progress</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {enrollments &&
                enrollments.map((enrollment) => (
                  <EnrollmentRow
                    key={enrollment._id}
                    enrollment={enrollment}
                    handleComplete={handleComplete}
                  ></EnrollmentRow>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Enrollments;
