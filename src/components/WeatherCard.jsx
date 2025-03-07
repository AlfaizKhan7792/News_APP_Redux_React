import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeather, getWeatherDays } from "../features/Weather/WeatherSlice";

const WeatherCard = () => {
  const dispatch = useDispatch();
  const { weather, loading, error } = useSelector((state) => state.Weather);
  const [city, setCity] = useState("");

  useEffect(() => {
    dispatch(getWeather("Indore"));
    dispatch(getWeatherDays("Indore"))
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    dispatch(getWeather(city));
    dispatch(getWeatherDays(city))
    setCity("");
  };

  return (
    <div className={`card p-5 my-3 shadow border bg-dark text-light`}>
      <h4>Today's Update</h4>

      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter A City Name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-light w-100 my-2">
          Search Weather
        </button>
      </form>

      {loading ? (
        <div className="border border-dark p-3 d-flex flex-column align-items-center">
          <div className="placeholder-glow">
            <span className="placeholder col-12" style={{ height: "30px" }}></span>
            <span className="placeholder col-10" style={{ height: "30px" }}></span>
          </div>
          <div className="rounded-circle bg-secondary mt-3" style={{ width: "70px", height: "70px" }}></div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : weather?.current ? (
        <div className="d-flex align-items-center justify-content-between p-3">
          <div>
            <h1>{weather?.current?.temp_c}°C</h1>
            <h3>{weather?.location?.name}</h3>
          </div>
          <div className="text-end">
            <img src={weather?.current?.condition?.icon} alt="Weather Icon" className="img-fluid" style={{ height: "80px" }} />
            <p>{weather?.current?.condition?.text}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherCard;
