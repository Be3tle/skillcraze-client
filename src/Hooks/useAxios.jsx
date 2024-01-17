import axios from 'axios';

const axios = axios.create({
  baseURL: 'http://localhost:3000',
});

const useAxios = () => {
  return axios;
};

export default useAxios;
