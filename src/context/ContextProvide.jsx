import React, { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const Contexts = createContext();
function ContextProvide({ children }) {
  const API_KEYS = "AIzaSyAggl4XTt7wckyee1YDTg1h3DKdEAufhPA";
  const [category, setCategory] = useState(0);
  const [isExpand, setIsExpand] = React.useState(false);
  const values = {
    API_KEYS,
    category,
    setCategory,
    isExpand,
    setIsExpand,
  };
  return <Contexts.Provider value={values}>{children}</Contexts.Provider>;
}

export default ContextProvide;
