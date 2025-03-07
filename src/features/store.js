import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice"
import NewsReducer from "./News/NewsSlice"
import WeatherReducer from "./Weather/WeatherSlice"

const store = configureStore({
reducer : {
Auth : AuthReducer,
News : NewsReducer,
Weather : WeatherReducer,
}
})

export default store