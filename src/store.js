import { createContext, useReducer } from "react";

const StoreContext = createContext();

const DispatchContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "login": {
      return {
        ...state,
        auth: true,
        username: action.payload.username,
      };
    }
    case "logout": {
      return { ...initialState };
    }
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
