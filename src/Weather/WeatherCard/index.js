function WeatherCard({ datas, colSizeClass = 'testNow' }) {
  //資料形式
  const {
    city_name,
    start_time,
    end_time,
    precipitation,
    weather_condition,
    temp_max,
    temp_min,
    feeling_condition,
    city_order,
  } = datas;
  /*{
    "city_name": "新北市",
    "start_time": "12月22日12時",
    "end_time": "12月22日18時",
    "precipitation": 0,
    "weather_condition": "晴天",
    "temp_max": 19,
    "temp_min": 15,
    "feeling_condition": "寒冷至稍有寒意",
    "city_order": 1
  } */
  return (
    <>
      <div className={`weatherCardCol ${colSizeClass}`}>
        <div className="weatherCard">
          <h4 className="padV5">{city_name}</h4>
          <p>
            {start_time} - {end_time}
          </p>
          <p>{weather_condition}</p>
          <p>
            {temp_min}°C-{temp_max}°C
          </p>
          <p>降雨機率：{precipitation}%</p>
          <p>{feeling_condition}</p>
        </div>
      </div>
    </>
  );
}
export default WeatherCard;
