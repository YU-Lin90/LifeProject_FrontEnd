import ShowMap from './ShowMap';
import ChooseParkList from './ChooseParkList';
import { useState } from 'react';
import { useFunc } from '../Context/FunctionProvider';
import { useGeo } from '../Context/GeoProvider';
import { useEffect } from 'react';
function ParkingMap() {
  //現在顯示的停車場ID
  const [showPark, setShowPark] = useState('');
  //選擇到的停車場資訊
  const [showParkDatas, setShowParkDatas] = useState({});
  //獲得的停車場資訊
  const [parkInfos, setParkInfos] = useState([]);
  //顯示用資訊
  const [showParkInfos, setShowParkInfos] = useState([]);
  //距離 預設2000 單位為公尺
  const [maxDistance, setMaxDistance] = useState(2000);
  //現在位置
  const [myPosition, setMyPosition] = useState({ lat: 0, lng: 0 });
  //地圖中心點
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  //===============================================分隔線================================================
  const { notLoginGetFetch } = useFunc();
  const { calculateDistanceByLatLng } = useGeo();
  //===============================================分隔線================================================
  //獲得自己位置
  const checkMyLocation = async () => {
    navigator.geolocation.getCurrentPosition((location) => {
      // console.log(location.coords);
      setMyPosition({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    });
  };
  //===============================================分隔線================================================
  //獲得停車場資訊
  const getShopDatas = async () => {
    if (myPosition.lat !== 0 && myPosition.lng !== 0 && maxDistance !== 0) {
      const res = await notLoginGetFetch(
        `getNearPark/?lat=${myPosition.lat}&lng=${myPosition.lng}&maxDistance=${maxDistance}`
      );
      const datas = res.data;
      for (let element of datas) {
        const parkLat = element.lat;
        const parkLng = element.lng;
        const distance = await calculateDistanceByLatLng(myPosition, {
          lat: parkLat,
          lng: parkLng,
        });
        element.distance = parseInt(distance * 100) / 100;
      }
    }
  };
  //===============================================分隔線================================================
  useEffect(() => {}, [myPosition]);
  return (
    <>
      停車場地圖--最外層
      <ShowMap />
      <ChooseParkList />
    </>
  );
}
export default ParkingMap;
