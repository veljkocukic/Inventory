import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";

const initialState = {
    user:null,
    isLoading:false
}

export interface IUser{
    username:string
    email:string
    password:string
}

export const registerUser = createAsyncThunk('user/registerUser', async(user:IUser,thunkApi)=>{

    try {
        const resp = await customFetch.post('auth/register', user);

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
        [registerUser.fulfilled.type]:(state)=>{
            state.isLoading = false;
        },
        [registerUser.rejected.type]:(state)=>{
            state.isLoading = false
        }
     }
})

export default userSlice.reducer
