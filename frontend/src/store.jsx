import React, { createContext, useReducer } from 'react';

const initialState = {
  q: '',
};
const store = createContext(initialState);
const { Provider } = store;

const QueryProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'set':
        return { ...state, q: action.value };

      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, QueryProvider };
