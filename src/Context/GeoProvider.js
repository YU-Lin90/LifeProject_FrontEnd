import React, { useContext, createContext } from 'react';
import { useState } from 'react';
import Geocode from 'react-geocode';
import keys from '../keys';
const GeoContext = createContext(null);
export const GeoProvider = ({ children }) => {
  Geocode.setApiKey(keys.gmap);
  Geocode.setLanguage('zh-tw');
  Geocode.setRegion('tw');
  Geocode.setLocationType('ROOFTOP');
  //自己的位置
  const [myPosition, setMyPosition] = useState({ lat: 0, lng: 0 });
  //自己的地址
  const [myAddress, setMyAddress] = useState('');
  //===============================================分隔線================================================
  //獲得現在的位置
  const getPosition = () => {
    navigator.geolocation.getCurrentPosition((location) => {
      setMyPosition({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      console.log(location.coords);
    });
  };
  //===============================================分隔線================================================
  //由地址獲得位置
  const getLatLngByAddress = async (address) => {
    let locate = { lat: 0, lng: 0 };
    await Geocode.fromAddress(address).then(
      (response) => {
        locate = response.results[0].geometry.location;
      },
      (error) => {
        console.error(error);
      }
    );
    return locate;
  };
  //===============================================分隔線================================================
  //由自己位置獲得地址
  const getAddressByLatLngNow = async () => {
    let address = '';
    await Geocode.fromLatLng(myPosition.lat, myPosition.lng).then(
      (response) => {
        address = response.results[0].formatted_address;
        setMyAddress(address);
        // console.log(address);
      },
      (error) => {
        console.error(error);
      }
    );
    return address;
  };
  //===============================================分隔線================================================
  //傳入經緯度資訊  { lat, lng }  得到距離
  const calculateDistanceByLatLng = (positionA, positionB) => {
    const latDistance = positionA.lat - positionB.lat;
    const lngDistance = positionA.lng - positionB.lng;
    const getDistance =
      6378.137 *
      2 *
      Math.asin(
        Math.pow(
          Math.sin(((latDistance / 2) * Math.PI) / 180) *
            Math.sin(((latDistance / 2) * Math.PI) / 180) +
            Math.cos((positionA.lat * Math.PI) / 180) *
              Math.cos((positionB.lat * Math.PI) / 180) *
              Math.sin(((lngDistance / 2) * Math.PI) / 180) *
              Math.sin(((lngDistance / 2) * Math.PI) / 180),
          0.5
        )
      );
    return getDistance;
  };
  //===============================================分隔線================================================
  return (
    <GeoContext.Provider
      value={{
        myPosition,
        setMyPosition,
        getAddressByLatLngNow,
        getLatLngByAddress,
        getPosition,
        myAddress,
        calculateDistanceByLatLng,
      }}
    >
      {children}
    </GeoContext.Provider>
  );
};

export const useGeo = () => useContext(GeoContext);
