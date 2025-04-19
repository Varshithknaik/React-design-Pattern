export const IDLE = "IDLE";
export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const defaultApiStatus = ["IDLE", "PENDING", "SUCCESS", "ERROR"];

export const apiStatus = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;
