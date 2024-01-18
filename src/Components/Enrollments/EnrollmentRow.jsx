import ProgressBar from 'react-animated-progress-bar';
const EnrollmentRow = ({ handleComplete, enrollment }) => {
  const { _id, instructor, title, img, due_date } = enrollment;
  return (
    <tr>
      <th></th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 lg:w-40 h-10 lg:h-24">
            {img && <img src={img} alt="" />}
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>{instructor}</td>
      <td>{due_date}</td>
      <td>
        <ProgressBar width="100 lg:230" trackWidth="13" percentage="60" />
      </td>
      <th>
        <button
          onClick={() => handleComplete(_id)}
          className="btn bg-blue-400 text-white"
        >
          Complete
        </button>
      </th>
    </tr>
  );
};

export default EnrollmentRow;
