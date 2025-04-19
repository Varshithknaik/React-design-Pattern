export const IDLE = "Idle";
export const PENDING = "Pending";
export const SUCCESS = "Success";
export const ERROR = "Error";

export const defaultApiStatus = ["Idle", "Pending", "Success", "Error"];

export const apiStatus = {
  IDLE: "Idle",
  PENDING: "Pending",
  SUCCESS: "Success",
  ERROR: "Error",
} as const;
