import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import DetailsCard from './DetailsCard';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [course, setCourse] = useState([]);

  // console.log(book);
  useEffect(() => {
    axios.get(`/courses/${id}`).then((res) => {
      setCourse(res.data);
    });
  }, [id]);
  return (
    <div>
      <DetailsCard course={course}></DetailsCard>
    </div>
  );
};

export default Details;
