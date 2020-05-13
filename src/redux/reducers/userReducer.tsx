import { LOGIN_SUCCESS, USER_LOGOUT, START_LOADING, STOP_LOADING } from "../types"

interface IState {
    token:string
    email:string
    loading:boolean
}
interface IAction {
    type:string
    payload:IState
}


const initialState:IState ={
    token:'',
    email:'',
    loading:false
}

export const userReducer = (state:IState = initialState,action:IAction) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return {...state,email:action.payload.email,token:action.payload.token}
        case USER_LOGOUT:{
            return {...state,email:'',token:''}
        }
        case START_LOADING:{
            return {...state,loading:true}
        }
        case STOP_LOADING:{
            return {...state,loading:false}
        } 
        default:
            return state
    }
} 