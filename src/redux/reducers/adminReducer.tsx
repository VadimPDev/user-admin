import { FETCH_SUCCESS, SHOW_MODAL, ActionType, CLOSE_MODAL } from "../types"
import { IUser } from "../actions/adminActions"

interface IAdmin {
    users:Array<IUser>
    modal:boolean,
    edit:IUser
}
const initialState:IAdmin = {
    users:[],
    modal:false,
    edit:{email:'',__v:0,_id:'',password:"",createdAt:'',updatedAt:''}
}


export const adminReducer = (state:IAdmin = initialState,action:ActionType):IAdmin =>{
    switch(action.type) {
        case FETCH_SUCCESS:
            return {...state,users:action.payload}
        case SHOW_MODAL:
            return {...state,modal:true,edit:action.payload}
        case CLOSE_MODAL:
            return {...state,modal:false,edit:{email:'',__v:0,_id:'',password:"",createdAt:'',updatedAt:''}}
        default:
            return {...state}
    }
}