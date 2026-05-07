import { loginRequest } from "../api";
import { useAuthStore } from "../store";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const setToken = useAuthStore((s) => s.setToken);
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      setToken(data.data.token);
      navigate("/dashboard");
    },
  });
};
