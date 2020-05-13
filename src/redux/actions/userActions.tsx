import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { Action } from "redux";
import { LOGIN_SUCCESS, USER_LOGOUT, } from "../types";
import axios from 'axios'



export const userLogin = (email:string,password:string):ThunkAction<void,RootState,unknown,Action<string>> => async dispatch =>{
   try{
        const data = await axios.post('/api/login',{email,password})
        const token = data.data.token
        if(data.data){
            localStorage.setItem('userData',JSON.stringify({token,...data.data}))
            dispatch(loginSuccess(data.data.email,token))
        }  
   }catch(e){
        console.log(e.message)
   }
}

export const userRegister = (email:string,password:string):ThunkAction<void,RootState,unknown,Action<string>> => async dispatch =>{
    try{
        const data = await axios.post('/api/register',{email,password})
        console.log(data)
    }catch(e){
        console.log(e)
    }
}

export function loginSuccess(email:string,token:string){
    return {
        type:LOGIN_SUCCESS,
        payload:{token,email}
    }
}

export function logOut(){
    return {
        type:USER_LOGOUT
    }
}