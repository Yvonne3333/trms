import React, { createContext, useState, useContext } from "react";

type AuthContextProviderProps = {
  children: React.ReactNode;
};
type AuthContextType = {
  auth: boolean | undefined;
  setAuth: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
 
};
 
export const MyContext = createContext<AuthContextType | null>(null);
 
export const StateContext = ({ children }: AuthContextProviderProps) => {
  const [auth, setAuth] = useState<boolean>();
  const [token, setToken] = useState<string>();

 
  return (
    <MyContext.Provider
      value={{
        auth,
        setAuth,
        token,
        setToken,
       
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
 
export const useStateContext = () => useContext(MyContext);