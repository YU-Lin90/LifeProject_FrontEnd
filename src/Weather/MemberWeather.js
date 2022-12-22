import { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useFunc } from '../Context/FunctionProvider';
import WeatherCard from './WeatherCard';
function MemberWeather({ order }) {
  const { setAuth } = useAuth();
  const { loginCheckGetFetch } = useFunc();
  const [favorCityDatas, setFavorCityDatas] = useState([]);
  const getMemberFavoriteCity = async () => {
    try {
      const res = await loginCheckGetFetch(
        'memberWeathers/getFavoriteCity',
        'memberAuth'
      );
      console.log(res);
      setFavorCityDatas(res.data.details);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMemberFavoriteCity();
  }, []);
  return (
    <>
      <h3>書籤</h3>
      <div className="disf fw-w">
        {favorCityDatas.length !== 0
          ? favorCityDatas[order].map((v, i) => {
              return (
                <WeatherCard datas={v} key={i} colSizeClass="rwdCol2-3-4" />
              );
            })
          : null}
      </div>
    </>
  );
}
export default MemberWeather;
