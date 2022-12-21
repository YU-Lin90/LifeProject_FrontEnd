import React, { useContext, createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFunc } from './FunctionProvider';
import { useLaguage } from './LaguageProvider';
const AuthContext = createContext(null);
//常用的函式放在這裡管理
export const AuthProvider = ({ children }) => {
  const { setLaguage } = useLaguage();
  const { loginCheckGetFetch } = useFunc();
  //登入狀態
  const [auth, setAuth] = useState(false);
  //名稱
  const [authName, setAuthName] = useState('');
  //進入登入頁前頁紀錄
  const [previousPage, setPreviousPage] = useState('');
  //===============================================分隔線================================================
  //登出函式
  const logoutAction = () => {
    localStorage.removeItem('memberAuth');
    setAuth(false);
  };
  //===============================================分隔線================================================
  //檢查登入函式
  const checkLogin = async () => {
    const localToken = localStorage.getItem('memberAuth');
    if (!localToken) {
      return;
    }
    try {
      const res = await loginCheckGetFetch('login/loginCheck', 'memberAuth');
      if (res.success) {
        setLaguage(res.lang);
        setAuth(true);
        setAuthName(res.name);
        return;
      } else {
        logoutAction();
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  //===============================================分隔線================================================
  useEffect(() => {
    if (!auth) {
      checkLogin();
      console.log('logincheckbycontext');
    }
  }, [auth]);
  //===============================================分隔線================================================
  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        previousPage,
        setPreviousPage,
        logoutAction,
        authName,
        setAuthName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
