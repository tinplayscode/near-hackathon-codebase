import produce from "immer";
import { createContext, useEffect, useReducer } from "react";

const initialContext = {
  user: {
    name: "",
    email: "",
    accountId: "",
  },
  isLoggedIn: false,
};

const Context = createContext(initialContext);

const Reducer = produce((state, action) => {
  switch (action.type) {
    case "LOGIN":
      state.user = action.payload;
      state.isLoggedIn = true;

      break;
    case "LOGOUT":
      state = initialContext;
      break;
    default:
      break;
  }
});

const App = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialContext);

  // Check login
  useEffect(() => {
    const loginCheck = async () => {
      setTimeout(() => {
        if (window.walletConnection.isSignedIn()) {
          dispatch({
            type: "LOGIN",
            payload: {
              name: "Tin",
              email: "hopthucuatin@gmail.com",
              accountId: window.walletConnection._authData.accountId,
            },
          });
        }
      }, 1000);
    };

    loginCheck();
  }, []);

  return (
    <Context.Provider value={[istate, dspatch]}>{children}</Context.Provider>
  );
};

export { Context, Reducer, App };
