export type RequestStatus = "none" | "loading" | "success" | "error";

export type RequestData<T, E = unknown> = {
  status: "success";
  data?: T;
} | {
  status: "error";
  error: E;
} | {
  status: "loading";
} | {
  status: "none";
};