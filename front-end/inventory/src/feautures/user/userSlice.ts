import { createSlice,createAsyncThunk, current } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import getCookies from "../../utils/cookies/getCookies";
import removeCookies from "../../utils/cookies/RemoveCookies";
import setCookies from "../../utils/cookies/setCookie";

const initialState = {
    user:getCookies('usrin'),
    isLoading:false
}

export interface IUser{
    username:string
    email:string
    password:string
}

export const registerUser = createAsyncThunk('user/registerUser', async(user:IUser,thunkApi)=>{

    try {
        const resp = await customFetch.post('/auth/register', user);

        return resp.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async(user:IUser, thunkApi)=>{
    try {
        const resp = await customFetch.post('/auth/login', user)

        return resp.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
     reducers:{},
     extraReducers:{
        [registerUser.pending.type]:(state)=>{
            state.isLoading = true
        },
        [registerUser.fulfilled.type]:(state,{ payload })=>{
            state.isLoading = false;
            state.user = payload;
            console.log(current(state))
            removeCookies('usrin')
            setCookies('usrin', JSON.stringify(payload))
        },
        [registerUser.rejected.type]:(state)=>{
            state.isLoading = false
        },
        [loginUser.pending.type]:(state)=>{
            state.isLoading = true
        },
        [loginUser.fulfilled.type]:(state,{ payload })=>{
            state.isLoading = false;
            state.user = payload;
            console.log(current(state))
            removeCookies('usrin')
            setCookies('usrin', JSON.stringify(payload))
        },
        [loginUser.rejected.type]:(state)=>{
            state.isLoading = false
        }
     }
})

export default userSlice.reducer
