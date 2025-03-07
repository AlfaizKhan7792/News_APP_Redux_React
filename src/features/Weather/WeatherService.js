
export const fetchWeather = async (City) =>{
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee92046c99a24c76aea172405240210&q=${City}&aqi=yes`)
    const data = await res.json()
    if(data.error) throw new Error("Invalid city name")
    return data
}


export const fetchWeatherDays = async (City) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=885451332d5d63cd10360aa637966afa&units=metric`);
    const data = await response.json();
    console.log(data);
    if (data.cod !== "200") throw new Error("Invalid city name");
    return data.list.filter((entry) => entry.dt_txt.includes("12:00:00"));
  };