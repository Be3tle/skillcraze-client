import React from 'react';

const EnrollmentRow = ({ enrollment }) => {
  const { instructor, title, img } = enrollment;
  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-40 h-24">
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{instructor}</td>
      <th>
        <button className="btn bg-blue-400 text-white">Complete</button>
      </th>
    </tr>
  );
};

export default EnrollmentRow;
