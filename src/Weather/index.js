import { useEffect } from 'react';
import { useGeo } from '../Context/GeoProvider';

function Weather() {
  const { getPosition, myPosition, getAddressByLatLngNow, myAddress } =
    useGeo();
  //獲得現在地址
  const getAddress = async () => {
    const res = await getAddressByLatLngNow();
    console.log(res);
  };
  useEffect(() => {
    if (myPosition.lng === 0 && myPosition.lat === 0) {
      getPosition();
    } else if (myPosition.lng !== 0 && myPosition.lat !== 0) {
      getAddress();
    }
  }, [myPosition]);
  useEffect(() => {
    if (myAddress !== '') {
      console.log({ myAddress });
    }
  }, [myAddress]);
  return (
    <>
      <button
        onClick={() => {
          console.log(myPosition);
        }}
      >
        test
      </button>
      氣象
    </>
  );
}
export default Weather;
