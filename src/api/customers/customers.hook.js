import { useQuery, useMutation } from "react-query";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "./customers.api";
import { queryClient } from "../../providers";

export const useCustomers = (config, queryOption) => {
  return useQuery("customers", () => getCustomers(config), queryOption);
};

export const useCreateCustomer = (option) => {
  return useMutation({
    mutationFn: (customerData, config) => createCustomer(customerData, config),
    mutationKey: "customers",
    ...option,
    onSuccess: (data, variables, context) => {
      // queryClient.invalidateQueries("customers");
      queryClient.setQueryData("customers", (old) => [...old, data]);
      option.onSuccess(data, variables, context);
    },
  });
};

export const useUpdateCustomer = (option) => {
  return useMutation({
    mutationFn: (id, customerData, config) =>
      updateCustomer(id, customerData, config),
    mutationKey: "customers",
    onSuccess: (data) => {
      // queryClient.invalidateQueries("customers");
      // or
      queryClient.setQueryData("customers", (old) =>
        old.map((customer) => (customer.id === data.id ? data : customer))
      );
    },
    ...option,
  });
};

export const useDeleteCustomer = (option) => {
  return useMutation({
    mutationFn: (id, config) => deleteCustomer(id, config),
    mutationKey: "customers",
    onSuccess: (data) => {
      // queryClient.invalidateQueries("customers");
      // or
      queryClient.setQueryData("customers", (old) =>
        old.filter((customer) => customer.id !== data.id)
      );
    },
    ...option,
  });
};
