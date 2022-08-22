import React, { useContext } from "react";

const AppContext = React.createContext();
function Provider({ children }) {
  return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
}

export function useGlobal() {
  return useContext(AppContext);
}

export default Provider;
