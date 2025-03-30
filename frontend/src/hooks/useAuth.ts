import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../api/auth";
import { useState } from "react";

interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  user: { email: string };
}

export function useAuth() {
  const [user, setUser] = useState("");

  const registerMutation = useMutation<void, Error, LoginData>({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("Registration successful!");
    },
    onError: () => {
      alert("Registration error");
    },
  });

  const loginMutation = useMutation<LoginResponse, Error, LoginData>({
    mutationFn: loginUser,
    onSuccess: (response) => {
      
      setUser(response.user.email); 
      console.log(user);
      alert(`Login successful!`);
    },
    onError: () => {
      alert("incorrect credentials");
    },
  });

  return { user, registerMutation, loginMutation };
}
