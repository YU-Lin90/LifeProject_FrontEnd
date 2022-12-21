import { useState } from 'react';
import Swal from 'sweetalert2';
import textPack from '../LanguageTexts';
import { useFunc } from '../Context/FunctionProvider';
import { useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useLaguage } from '../Context/LaguageProvider';
import { useNavigate } from 'react-router-dom';
function LoginButton({ account, password, posting, setPosting }) {
  const { previousPage, setAuth, setAuthName } = useAuth();
  const { laguage, setLaguage } = useLaguage();
  const {
    loginText,
    loginCheckAlertText,
    loginSuccessAlertText,
    accpassWrongAlertText,
    systemNetworkErrorAlertText,
  } = textPack;
  const { notLoginPostFetch } = useFunc();
  const navi = useNavigate();

  const loginProcess = async () => {
    //空值阻擋
    if (account.trim() === '' || password.trim() === '') {
      Swal.fire(loginCheckAlertText[laguage]).then(() => {
        setPosting(false);
      });
      return;
    }
    const postData = JSON.stringify({ email: account, password });
    //登入動作
    try {
      const res = await notLoginPostFetch('login/login', postData);
      console.log(res);
      if (res.success) {
        const tokens = res.token;
        setLaguage(res.lang);
        setAuthName(res.name);
        setAuth(true);
        localStorage.setItem('memberAuth', tokens);
        Swal.fire(loginSuccessAlertText[res.lang]).then(() => {
          if (previousPage !== '') {
            navi(previousPage);
          } else {
            navi('/');
          }
        });
      } else {
        if (res.errorType === 'textError') {
          Swal.fire(accpassWrongAlertText[laguage]).then(() => {
            setPosting(false);
          });
        }
        // console.log(res);
      }
    } catch (error) {
      Swal.fire(systemNetworkErrorAlertText[laguage]).then(() => {
        setPosting(false);
      });
    }

    //memberAuth
  };
  useEffect(() => {
    if (posting) {
      loginProcess();
    }
  }, [posting]);
  return (
    <>
      <div
        onClick={() => {
          setPosting(true);
        }}
        className={`defaultButton  ${posting ? 'disabled' : null}`}
      >
        <p>{loginText[laguage]}</p>
      </div>
    </>
  );
}
export default LoginButton;
