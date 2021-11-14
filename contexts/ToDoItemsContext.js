import { listItems } from "../components/Data/MockedData";

import React from "react";
export const ToDoItemsContext = React.createContext();

const ToDoItemsProvider = (props) => {
  const contextValue = listItems;

  return (
    <ToDoItemsContext.Provider value={contextValue}>
      {props.children}
    </ToDoItemsContext.Provider>
  );
};

export default ToDoItemsProvider;
