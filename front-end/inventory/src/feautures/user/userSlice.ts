import { addUserLocalStorage, removeUserFromLocalStorage } from './../../utils/localStorage';
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import customFetch from "../../utils/axios";
import getCookies from "../../utils/cookies/getCookies";
import setCookies from "../../utils/cookies/setCookie";
import { validateInput } from '../../utils/helpers';
import { toast } from 'react-toastify';

const initialState = {
    isLoading:false,
    isUserLoading:false,
    userToken:getCookies('usrin'),
    backErrorMsgs:{},
    user:{},
}

export interface IUser{
    username:string
    email:string
    password:string
    organizationName?:string
    _id?:string
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
        return thunkApi.rejectWithValue(error)
    }
})

export const editUser = createAsyncThunk('user/editUser', async(user:IUser, thunkApi)=>{
    console.log(user)
    try {
        const resp = await customFetch.patch('/auth/edit/' + user._id, user)
console.log('first')
        return resp.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
})

const userSlice = createSlice({
    name:'user',
    initialState,
     reducers:{
        handleErrors: (state, { payload }) => {
          let  newErrors = validateInput({...payload})

          state.backErrorMsgs = newErrors
          },

        clearErrors: (state) => {
            state.backErrorMsgs = '';
          },
          
     },
     extraReducers:{
        [registerUser.pending.type]:(state)=>{
            state.isLoading = true
       
        },
        [registerUser.fulfilled.type]:(state,{ payload })=>{
            state.isLoading = false;
            setCookies('usrin', JSON.stringify(payload.token))

            addUserLocalStorage(payload.user)
            state.userToken = getCookies('usrin')

        },
        [registerUser.rejected.type]:(state, { payload })=>{
            state.isLoading = false

            state.backErrorMsgs = payload.response.data
        },
        [loginUser.pending.type]:(state)=>{
            state.isLoading = true
        },
        [loginUser.fulfilled.type]:(state:any,{ payload })=>{
            state.isLoading = false;
            setCookies('usrin', JSON.stringify(payload?.token))
            addUserLocalStorage(payload.user)
            state.userToken = getCookies('usrin')
           
        },
        [loginUser.rejected.type]:(state, {payload})=>{
            state.isLoading = false

            state.backErrorMsgs = payload.response.data
        },
        [getUser.pending.type]:(state)=>{
            state.isUserLoading = true
        },
        [getUser.fulfilled.type]:(state,{ payload })=>{
            state.isUserLoading = false
        },
        [getUser.rejected.type]:(state)=>{
            state.isUserLoading = false
        },
        [editUser.pending.type]:(state)=>{
            state.isLoading = true;

        },
        [editUser.fulfilled.type]:(state, payload)=>{
            removeUserFromLocalStorage()
            state.isLoading = false;
            addUserLocalStorage(payload.payload)
            console.log(payload)

            toast.success('User profile updated')
        },
        [editUser.rejected.type]:(state, payload)=>{
            state.isLoading = false;
        },

     }
})

export const { clearErrors, handleErrors } = userSlice.actions;


export default userSlice.reducer
