import { useState } from 'react';
import LoginPart from './LoginPart';
import RegistPart from './RegistPart';
import { useAuth } from '../Context/AuthProvider';
import { useLaguage } from '../Context/LaguageProvider';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import textPack from '../LanguageTexts';
function LoginPage() {
  const { auth } = useAuth();
  const { laguage } = useLaguage();
  const navi = useNavigate();
  //選擇登入或註冊
  const [chooseReg, setChooseReg] = useState(false);
  const [posting, setPosting] = useState(false);
  const { loginText, registText, alreadyLoginAlertText } = textPack;
  useEffect(() => {
    if (auth && !posting) {
      Swal.fire(alreadyLoginAlertText[laguage]).then(navi('/'));
    }
  }, [auth]);
  return (
    <>
      <div className={`loginPageFrame`}>
        <div className="disf ta-c w100p">
          <p
            onClick={() => {
              setChooseReg(false);
            }}
            className={`switchButton ${!chooseReg ? 'active' : ''}`}
          >
            {loginText[laguage]}
          </p>
          <p
            onClick={() => {
              setChooseReg(true);
            }}
            className={`switchButton ${chooseReg ? 'active' : ''}`}
          >
            {registText[laguage]}
          </p>
        </div>
        <div className="loginPageContent">
          {!chooseReg ? (
            <LoginPart posting={posting} setPosting={setPosting} />
          ) : (
            <RegistPart />
          )}
        </div>
      </div>
    </>
  );
}
export default LoginPage;
