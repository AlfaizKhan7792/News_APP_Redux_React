import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeather, fetchWeatherDays } from "./WeatherService";
// import {fetchWeather , fetchWeatherDays} from "./WeatherService"

// export const getWeather = createAsyncThunk("weather/getWeather", fetchWeather);
// export const getWeatherDays = createAsyncThunk("weather/getWeatherDays", fetchWeatherDays);

const weatherSlice = createSlice({
  name: "Weather",
  initialState: { weather: {}, weatherDays : [], dark: false, loading: false, error: null },
  reducers: {
    toggleTheme: (state) => {
      state.dark = !state.dark;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.weather = action.payload;
        state.loading = false;
      })
      .addCase(getWeather.rejected, (state) => {
        state.error = "Failed to fetch weather";
        state.loading = false;
      })
      .addCase(getWeatherDays.pending , (state , action) =>{
        state.loading = true;
      })
      .addCase(getWeatherDays.fulfilled, (state, action) => {
        state.weatherDays = action.payload;
      })
      .addCase(getWeatherDays.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { toggleTheme } = weatherSlice.actions;
export default weatherSlice.reducer;



export const getWeather = createAsyncThunk("weather/getWeather" , async (city) =>{
    try {
        return await fetchWeather(city)
    } catch (error) {
        console.log(error);
    }
})

export const getWeatherDays = createAsyncThunk("weather/getWeatherDays" , async (city) =>{
    try {
        return await fetchWeatherDays(city)
    } catch (error) {
        console.log(error);
    }
})