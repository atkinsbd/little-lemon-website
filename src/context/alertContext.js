import {createContext, useContext, useState} from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {

  const [state, setState] = useState({
    isOpen: false,
    isLoading: false,
    // Type can be either "success" or "error"
    type: '',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, isLoading: false, type, message }),
        onClose: () => setState({...state, isOpen: false}),
        onFetching: () => setState({...state, isLoading: true})
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
