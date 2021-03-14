import { useState } from "react";
import { useDispatch } from "./store";

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
