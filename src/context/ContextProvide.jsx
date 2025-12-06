import React, { createContext, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const Contexts = createContext();
function ContextProvide({ children }) {
  const API_KEYS = "AIzaSyD5lmVhZDGuwWTsGBUiWO2NrMJTsWnIkKE";
  const [category, setCategory] = useState(0);
  const [isExpand, setIsExpand] = useState(false);
  const [inputValues, setInputValues] = useState("");
  const [searchValues, setSearchValues] = useState("");

  const values = {
    API_KEYS,
    category,
    setCategory,
    isExpand,
    setIsExpand,
    inputValues,
    setInputValues,
    searchValues,
    setSearchValues,
  };
  return <Contexts.Provider value={values}>{children}</Contexts.Provider>;
}

export default ContextProvide;
