import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { Action } from "redux";
import axios from 'axios'
import {START_LOADING, STOP_LOADING, FETCH_SUCCESS, SHOW_MODAL, ActionType,CLOSE_MODAL} from '../types'
export interface IUser {
    email:string
    password:string
    _id:string
    createdAt:string
    updatedAt:string
    __v:number
}

export const fetchUsers = ():ThunkAction<void,RootState,unknown,Action<string>> => async dispatch => {
    try{
        dispatch(startLoading())
        const response = await axios.get('/api/getUsers')
        dispatch(fetchSuccess(response.data))
        dispatch(stopLoading())
    }catch(e){
        console.log(e)
    }
}

export const showModal = (user:IUser):ActionType =>{
    return {
        type:SHOW_MODAL,
        payload:user
    }
}

export const closeModal = ():ActionType =>{
    return {
        type:CLOSE_MODAL
    }
}
export function fetchSuccess(users:IUser[]):ActionType{
    return {
        type:FETCH_SUCCESS,
        payload:users
    }
}
export function startLoading(){
    return {
        type:START_LOADING
    }
}

export function stopLoading(){
    return {
        type:STOP_LOADING
    }
}