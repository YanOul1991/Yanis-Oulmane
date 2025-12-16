import React, { createContext, useState, useContext } from "react";

const MenuContext = React.createContext();

export function MenuProvider({ children }) {
  
  const [isOpen, setIsOpen] = useState(false);

  return(
    <MenuContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </MenuContext.Provider>
  )
}

export function useMenu() {
  return useContext(MenuContext);
}