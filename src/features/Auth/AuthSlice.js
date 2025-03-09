import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthenServe from "./AuthService"

const ExitUser = JSON.parse(localStorage.getItem("user"))

const AuthSlice = createSlice({
    name : "Auth",
    initialState : {
        user : ExitUser || null,
        isLoading : false,
        isError : false,
        isSuccess : false,
        message : ""
    },
    reducers : {},
    extraReducers : builder =>{
builder
.addCase(LoginUser.pending , (state , action) =>{
    state.isError = false
    state.isLoading = true
    state.isSuccess = false
})
.addCase(LoginUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoading = false
    state.isSuccess = true
    state.user = action.payload
})
.addCase(LoginUser.rejected , (state , action) =>{
    state.isError = true
    state.isLoading = false
    state.isSuccess = false
    state.message = action.payload
})

.addCase(RegisterUser.pending , (state , action) =>{
    state.isError = false
    state.isLoading = true
    state.isSuccess = false
})
.addCase(RegisterUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoading = false
    state.isSuccess = true
    state.user = action.payload
})
.addCase(RegisterUser.rejected , (state , action) =>{
    state.isError = true
    state.isLoading = false
    state.isSuccess = false
    state.message = action.payload
})

.addCase(LogOutUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoading = false
    state.isSuccess = false
    state.user = null
})


    }
})


export default AuthSlice.reducer

// Login User
export const LoginUser = createAsyncThunk('AUTH/LOGIN' , async (formData) =>{
    try {
        return await AuthenServe.Login(formData)
    } catch (error) {
        console.log(error);
    }
})

// Register User
export const RegisterUser = createAsyncThunk('AUTH/REGISTER' , async (formData) =>{
    try {
        return await AuthenServe.Register(formData)
    } catch (error) {
        console.log(error);
    }
})


// LogOut User
export const LogOutUser = createAsyncThunk('AUTH/LOGOUT' , async () =>{
localStorage.removeItem("user")
})