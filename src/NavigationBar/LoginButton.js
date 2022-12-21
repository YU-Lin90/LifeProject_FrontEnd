import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';
import { useLaguage } from '../Context/LaguageProvider';
import textPack from '../LanguageTexts';
function LoginButton() {
  const { auth, logoutAction } = useAuth();
  const { laguage } = useLaguage();
  const { loginText, logoutText } = textPack;
  const navi = useNavigate();
  return (
    <>
      <div className="w33p disf jc-fe">
        <div
          className="navLoginButton"
          onClick={() => {
            if (!auth) {
              navi('/login');
              return;
            } else {
              logoutAction();
            }
          }}
        >
          {auth ? logoutText[laguage] : loginText[laguage]}
        </div>
      </div>
    </>
  );
}
export default LoginButton;
