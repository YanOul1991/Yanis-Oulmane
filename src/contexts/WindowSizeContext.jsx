import React, { useState, useContext, useEffect } from "react";

const WindowSizeContext = React.createContext();

export function WindowSizeContextProvider({children}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [])

  return(
    <WindowSizeContext.Provider value={ {windowWidth}}>
      { children }
    </WindowSizeContext.Provider>
  )
}

export function useWindowSizeContext() {
  return useContext(WindowSizeContext);
}