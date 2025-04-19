import { useMemo, useState } from "react";
import { apiStatus, defaultApiStatus } from "../../constants/api.status";

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

const prepareStatus = (currentStatus: string) => {
  const statuses: { [key: string]: boolean } = {};
  for (const status of defaultApiStatus) {
    const normalisedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalisedStatus}`;

    statuses[normalisedStatusKey] = currentStatus === status;
  }

  return statuses;
};
// type CapitalizeString<S extends string> = S extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Lowercase<Rest>}` : S;

export type ApiStatusValue = (typeof apiStatus)[keyof typeof apiStatus];

export type StatusFlags = {
  [K in ApiStatusValue as `is${Capitalize<K>}`]: boolean;
};

export const useApiStatus = (
  currentStatus: string = apiStatus.IDLE
): StatusFlags & {
  status: string;
  setStatus: (status: string) => void;
} => {
  const [status, setStatus] = useState(currentStatus);

  const statuses = useMemo(() => prepareStatus(status), [status]);

  return {
    status,
    setStatus,
    ...statuses,
  };
};
