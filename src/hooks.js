import { useState } from "react";
import { useDispatch, useStore } from "./store";

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  return [value, onChange];
};

export const useLoginHandler = () => {
  const dispatch = useDispatch();

  const loginHandler = (username, password) => {
    dispatch({ type: "login", payload: { username, password } });
  };

  return loginHandler;
};

export const useLogoutHandler = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch({ type: "logout" });
  };

  return logoutHandler;
};

export const useUsername = () => {
  const store = useStore();

  return store?.username;
};

export const useAuth = () => {
  const store = useStore();

  return store?.auth;
};
