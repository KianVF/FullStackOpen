import axios from "axios";
const url = "http://localhost:3001/persons";
const getAll = async () => {
  const request = axios.get(url);
  const response = await request;
  return response.data;
};
const create = async (obj) => {
  const request = axios.post(url, obj);
  const response = await request;
  return response.data;
};
const updateNumber = async (id, obj) => {
  const request = axios.put(`${url}/${id}`, obj);
  const response = await request;
  return response.data;
};
const deletePerson = async (personId) => {
  const request = axios.delete(`${url}/${personId}`);
  const response = await request;
  return response.data;
};
export default { getAll, create, deletePerson, updateNumber };
