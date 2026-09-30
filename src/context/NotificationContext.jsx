import { createContext, useContext, useReducer } from "react";
import notificationReducer from "../reducers/notificationReducer";

const NotificationContext = createContext();

const initialState = {
  message: "",
  type: "",
};

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(
    notificationReducer,
    initialState
  );

  function showNotification(message) {
    dispatch({
      type: "SHOW",
      payload: message,
    });
  }

  function hideNotification() {
    dispatch({
      type: "HIDE",
    });
  }

  return (
    <NotificationContext.Provider
      value={{
        state,
        showNotification,
        hideNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}   