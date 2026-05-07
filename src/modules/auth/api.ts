import { api } from "../../shared/lib/axios";
import type { AuthResponse, loginPayload } from "./types";

export const loginRequest = (payload: loginPayload) => {
  return api.post<AuthResponse>("/api/login", payload).then((res) => res.data);
};
