/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useApiStatus } from "./useApiStatus";
import { apiStatus } from "../../constants/api.status";

type IProps = {
  fn: (...args: any) => Promise<any>;
  config?: any;
};

const useApi = ({ fn }: IProps) => {
  // const { initialData } = config || {};

  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<any>(null);

  const { status, setStatus, ...normalisedStatuses } = useApiStatus();

  const exec = async () => {
    setStatus(apiStatus.PENDING);
    try {
      const data = await fn();

      setData(data);

      setStatus(error ? apiStatus.ERROR : apiStatus.SUCCESS);

      return {
        data,
        error: null,
      };
    } catch (error) {
      setError(error);

      return {
        data: null,
        error,
      };
    }
  };

  return {
    data,
    setData,
    error,
    exec,
    status,
    setStatus,
    ...normalisedStatuses,
  };
};

export default useApi;
