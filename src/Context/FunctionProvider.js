import React, { useContext, createContext, useState } from 'react';
import siteAddress from '../AddressSetting';
import Swal from 'sweetalert2';
const FunctionContext = createContext(null);
//常用的函式放在這裡管理
export const FunctionProvider = ({ children }) => {
  const { fullAddress } = siteAddress;
  const [previousPage, setPreviousPage] = useState('');
  //===============================================分隔線================================================
  //有帶登入檢查的FETCH
  //回傳RES                (API連結 ,哪方,post資料 json格式 )
  const loginCheckPostFetch = async (apiLink, who, postData) => {
    const r = await fetch(`${fullAddress}${apiLink}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(who),
      },
      body: postData,
    });
    const res = await r.json();
    if (res.errorType && res.errorType === 'DisableToken') {
      localStorage.removeItem(who);
    } else if (res.errorType && res.errorType === 'ServerError') {
      Swal.fire('ServerError');
    }
    return res;
  };
  //GET 回傳RES
  const loginCheckGetFetch = async (apiLink, who) => {
    const r = await fetch(`${fullAddress}${apiLink}`, {
      method: 'Get',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem(who),
      },
    });
    const res = await r.json();
    if (res.errorType && res.errorType === 'DisableToken') {
      localStorage.removeItem(who);
    }
    return res;
  };
  //===============================================分隔線================================================
  //沒有登入檢查的FETCH
  //post
  const notLoginPostFetch = async (apiLink, postData) => {
    const r = await fetch(`${fullAddress}${apiLink}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: postData,
    });
    const res = await r.json();
    return res;
  };
  //get
  const notLoginGetFetch = async (apiLink) => {
    const r = await fetch(`${fullAddress}${apiLink}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await r.json();
    return res;
  };
  //===============================================分隔線================================================
  //頁面登入阻擋，重新導向
  const pageLoginBlock = async () => {
    const localToken = localStorage.getItem('memberAuth');
    if (!localToken) {
      return false;
    }
    try {
      const res = await loginCheckGetFetch('login/loginCheck', 'memberAuth');
      if (res.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  //===============================================分隔線================================================
  return (
    <FunctionContext.Provider
      value={{
        loginCheckPostFetch,
        loginCheckGetFetch,
        notLoginGetFetch,
        notLoginPostFetch,
        previousPage,
        setPreviousPage,
        pageLoginBlock,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export const useFunc = () => useContext(FunctionContext);
