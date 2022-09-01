import { addUserLocalStorage } from './../../utils/localStorage';
import { createSlice,createAsyncThunk, current } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import getCookies from "../../utils/cookies/getCookies";
import removeCookies from "../../utils/cookies/RemoveCookies";
import setCookies from "../../utils/cookies/setCookie";

const initialState = {
    isLoading:false,
    isUserLoading:false,
   
}

export interface IUser{
    username:string
    email:string
    password:string
    organizationName?:string
}

export const registerUser = createAsyncThunk('user/registerUser', async(user:IUser,thunkApi)=>{

    try {
        const resp = await customFetch.post('/auth/register', user);

        return resp.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const loginUser = createAsyncThunk('user/loginUser', async(user:{email:string,password:string}, thunkApi)=>{
    try {
        const resp = await customFetch.post('/auth/login', user)

        return resp.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

export const getUser = createAsyncThunk('/user/getUser', async(id:string,thunkApi)=>{
    try {

        const resp = await customFetch.get('/auth/' + id)

        return resp.data
        
    } catch (error) {
        
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

            removeCookies('usrin')
            setCookies('username', JSON.stringify(payload?.user?.username))
            addUserLocalStorage(payload.user)

            setCookies('usrin', JSON.stringify(payload.token))
        },
        [registerUser.rejected.type]:(state)=>{
            state.isLoading = false
        },
        [loginUser.pending.type]:(state)=>{
            state.isLoading = true
        },
        [loginUser.fulfilled.type]:(state,{ payload })=>{
            state.isLoading = false;
            setCookies('username', JSON.stringify(payload?.user?.username))
            addUserLocalStorage(payload.user)

            removeCookies('usrin')
            setCookies('usrin', JSON.stringify(payload.token))
        },
        [loginUser.rejected.type]:(state)=>{
            state.isLoading = false
        },
        [getUser.pending.type]:(state)=>{
            state.isUserLoading = true
        },
        [getUser.fulfilled.type]:(state,{ payload })=>{
            state.isUserLoading = false
        },
        [getUser.rejected.type]:(state)=>{
            state.isUserLoading = false
        }
     }
})

export default userSlice.reducer
