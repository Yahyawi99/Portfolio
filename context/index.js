import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

const AppContext = React.createContext();
function Provider({ children }) {
  const { asPath } = useRouter();

  const [nav, setNav] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  // changing Icons styles depending on the path
  useEffect(() => {
    setCurrentPath(asPath);
  }, [asPath]);

  return (
    <AppContext.Provider
      value={{
        nav,
        setNav,
        currentPath,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobal() {
  return useContext(AppContext);
}

export default Provider;
