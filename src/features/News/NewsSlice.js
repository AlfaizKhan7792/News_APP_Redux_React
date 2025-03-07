import { createSlice } from "@reduxjs/toolkit";

const NewsSlice = createSlice({
    name : "News",
    initialState : {
        AllNews : []
    },
    reducers : {
        Get_News : (state , action) =>{
            state.AllNews = action.payload
        },

        Remove_News : (state , action) =>{
            state.AllNews = state.AllNews.filter((item , index) => index !== action.payload)
        }
    },

})

export const {Get_News , Remove_News} = NewsSlice.actions
export default NewsSlice.reducer