import { useEffect } from 'react';
import { useGeo } from '../Context/GeoProvider';
import { useFunc } from '../Context/FunctionProvider';
function Weather() {
  const { getPosition, myPosition, getAddressByLatLngNow, myAddress } =
    useGeo();
  const { notLoginGetFetch, loginCheckGetFetch } = useFunc();
  //獲得現在地址
  // const getAddress = async () => {
  //   const res = await getAddressByLatLngNow();
  //   console.log(res);
  // };
  // useEffect(() => {
  //   if (myPosition.lng === 0 && myPosition.lat === 0) {
  //     getPosition();
  //   } else if (myPosition.lng !== 0 && myPosition.lat !== 0) {
  //     getAddress();ㄈ
  //   }
  // }, [myPosition]);
  // useEffect(() => {
  //   if (myAddress !== '') {
  //     console.log({ myAddress });
  //   }
  // }, [myAddress]);
  const getAllDatas = async () => {
    const res = await notLoginGetFetch('weathers/getAll');
    console.log(res);
  };
  const testFetch = async () => {
    const res = await loginCheckGetFetch(
      'memberWeathers/getFavoriteCity',
      'memberAuth'
    );
    console.log({ res });
  };
  return (
    <div className="ta-c">
      <h2
        className="ta-c "
        onClick={() => {
          // getAllDatas();
          testFetch();
        }}
      >
        氣象預報
      </h2>
      <div></div>
    </div>
  );
}
export default Weather;
