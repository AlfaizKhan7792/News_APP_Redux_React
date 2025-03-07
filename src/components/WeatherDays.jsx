import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherDays } from "../features/Weather/WeatherSlice";

const WeatherDays = () => {
  const dispatch = useDispatch();
  const { weatherDays, loading, error } = useSelector((state) => state.Weather);
  console.log(weatherDays);

  useEffect(() => {
    dispatch(getWeatherDays("Indore"));
  }, [dispatch]);

  return (
    <div className="container my-3">
      <h4 className="text-center">Weather Forecast</h4>

      {loading && <p className="text-center">Loading weather data...</p>}
      {error && <p className="text-danger text-center">{error}</p>}

  <div className="row justify-content-start">
    {weatherDays.length > 0 &&
      weatherDays.map((day, index) => (
        <div key={index} className="col-12 mb-3">
          <div className="card shadow p-3 border h-100">
            <h5>{new Date(day.dt_txt).toDateString()}</h5>
            <p><strong>Temp:</strong> {day.main.temp}°C</p>
            <p><strong>Weather:</strong> {day.weather[0].description}</p>
            <p><strong>Humidity:</strong> {day.main.humidity}%</p>
            <p><strong>Wind:</strong> {day.wind.speed} m/s</p>
          </div>
        </div>
      

          ))}
      </div>
    </div>
  );
};

export default WeatherDays;
