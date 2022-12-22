import { useEffect } from 'react';
import { useGeo } from '../Context/GeoProvider';
import { useFunc } from '../Context/FunctionProvider';
import { useAuth } from '../Context/AuthProvider';
import MemberWeather from './MemberWeather';
import WeatherCard from './WeatherCard';
import { useState } from 'react';
function Weather() {
  const { auth } = useAuth();
  const { notLoginGetFetch } = useFunc();
  const [order, setOrder] = useState(1);
  const [weatherDatas, setWeatherDatas] = useState([]);
  const [weatherTimes, setWeatherTimes] = useState([]);

  const getAllDatas = async () => {
    const res = await notLoginGetFetch('weathers/getAll');
    console.log(res);
    if (res.success) {
      const allDetails = res.data.details;
      const times = res.data.timeSets;
      setWeatherDatas(allDetails);
      setWeatherTimes(times);
    }
  };
  useEffect(() => {
    getAllDatas();
  }, []);
  return (
    <div className="ta-c">
      <h2
        className="ta-c "
        onClick={() => {
          getAllDatas();
        }}
      >
        氣象預報
      </h2>
      <div>
        <span>預報時間</span>
        <select
          value={order}
          onChange={(e) => {
            setOrder(Number(e.target.value));
          }}
        >
          {weatherTimes.map((v, i) => {
            return (
              <option key={i} value={v.order}>
                {v.start} - {v.end}
              </option>
            );
          })}
        </select>
      </div>
      {auth ? <MemberWeather order={order} /> : null}
      <hr></hr>
      <h3>全部預報</h3>
      <div className="disf fw-w">
        {weatherDatas.length !== 0
          ? weatherDatas[order].map((v, i) => {
              return (
                <WeatherCard datas={v} key={i} colSizeClass="rwdCol2-3-4" />
              );
            })
          : null}
      </div>
      {/* rwdCol2-3-4 */}
    </div>
  );
}
export default Weather;
