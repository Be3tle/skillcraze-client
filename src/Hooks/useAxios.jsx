import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://skillcraze-server.vercel.app',
});

const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
