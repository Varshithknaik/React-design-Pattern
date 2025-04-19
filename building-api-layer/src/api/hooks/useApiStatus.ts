import { useMemo, useState } from "react";
import { apiStatus, defaultApiStatus } from "../../constants/api.status";

const capitalize = (s: string) =>
  s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export type ApiStatusValue = (typeof apiStatus)[keyof typeof apiStatus];

export type StatusFlags = {
  [K in ApiStatusValue as `is${Capitalize<K>}`]: boolean;
};

const prepareStatus = (currentStatus: string) => {
  const statuses: StatusFlags = {} as StatusFlags;
  for (const status of defaultApiStatus) {
    const normalisedStatus = capitalize(status.toLowerCase());
    const normalisedStatusKey = `is${normalisedStatus}` as keyof StatusFlags;

    statuses[normalisedStatusKey] = currentStatus === status;
  }

  return statuses;
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
