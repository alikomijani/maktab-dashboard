import { useQuery, useMutation } from "react-query";
import { getCustomers } from "./customers.api";

export const useCustomers = (config, queryOption) => {
  return useQuery(
    ["customers", config.params?.username],
    () => getCustomers(config),
    queryOption
  );
};
