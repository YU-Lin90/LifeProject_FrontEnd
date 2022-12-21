import React, { useContext, createContext } from 'react';
import { useState } from 'react';
const LaguageContext = createContext(null);
//常用的函式放在這裡管理
export const LaguageProvider = ({ children }) => {
  //0 中文 1日文 2英文
  const [laguage, setLaguage] = useState(0);

  return (
    <LaguageContext.Provider
      value={{
        laguage,
        setLaguage,
      }}
    >
      {children}
    </LaguageContext.Provider>
  );
};

export const useLaguage = () => useContext(LaguageContext);
