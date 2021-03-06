import { createContext, useContext, useEffect, useReducer } from "react";

const StoreContext = createContext();

const DispatchContext = createContext();

export const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);

  return dispatch;
};

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
  const persistedState =
    JSON.parse(window.localStorage.getItem("store")) ?? initialState;
  const [store, dispatch] = useReducer(reducer, persistedState);

  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    </DispatchContext.Provider>
  );
};
