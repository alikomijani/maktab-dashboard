import api from "./axios";

export const getCustomers = async (config) => {
  const response = await api.get("/users", config);
  return response.data;
};
export const getCustomer = async (id, config) => {
  const response = await api.get(`/users/${id}`, config);
  return response.data;
};
export const createCustomer = async (data, config) => {
  const response = await api.post("/users", data, config);
  return response.data;
};
export const updateCustomer = async (id, data, config) => {
  const response = await api.put(`/users/${id}`, data, config);
  return response.data;
};
export const deleteCustomer = async (id, config) => {
  const response = await api.put(`/users/${id}`, config);
  return response.data;
};
