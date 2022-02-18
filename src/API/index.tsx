import axios from 'axios';

const BASE_URL = '/data';

export const fetchData = async () => {
  const response = await axios.get(BASE_URL);
  return response;
};
