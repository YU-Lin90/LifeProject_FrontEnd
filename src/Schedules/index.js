import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFunc } from '../Context/FunctionProvider';
import { useLaguage } from '../Context/LaguageProvider';
import Swal from 'sweetalert2';
import textPack from '../LanguageTexts';
import Calender from './Calender';
function Schedules() {
  const { pageLoginBlock, setPreviousPage } = useFunc();
  const { laguage } = useLaguage();
  const { goToLoginText } = textPack;
  const navi = useNavigate();
  //檢查登入
  const checkLogin = async () => {
    const res = await pageLoginBlock();
    // console.log(res);
    if (!res) {
      const path = window.location.pathname;
      setPreviousPage(path);
      Swal.fire(goToLoginText[laguage]).then(() => {
        navi('/login');
      });
    }
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      <Calender />
    </>
  );
}
export default Schedules;
