import { useState } from 'react';
import { useLaguage } from '../Context/LaguageProvider';
import LoginButton from './LoginButton';
import textPack from '../LanguageTexts';
function LoginPart({ posting, setPosting }) {
  const { laguage } = useLaguage();
  const { accountText, passwordText, clearText } = textPack;
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <div className="loginInputFrame">
        <div
          className="padV10"
          onClick={() => {
            setAccount('test@test.com');
            setPassword('123456');
          }}
        >
          <label htmlFor="loginInputAccount">{accountText[laguage]}</label>
        </div>
        <div className="padV10">
          <input
            type="email"
            value={account}
            onChange={(e) => {
              setAccount(e.target.value.trim());
            }}
            id="loginInputAccount"
          />
        </div>
        <div className="padV10">
          <label className="marb10" htmlFor="loginInputPassword">
            {passwordText[laguage]}
          </label>
        </div>
        <div className="padV10 marb10">
          <input
            type={'password'}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value.trim());
            }}
            id="loginInputPassword"
          />
        </div>
        <div className="w100p disf jc-se ai-c">
          <LoginButton
            account={account}
            password={password}
            posting={posting}
            setPosting={setPosting}
          />

          <div
            onClick={() => {
              setAccount('');
              setPassword('');
            }}
            className="defaultButton"
          >
            <p>{clearText[laguage]}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPart;
