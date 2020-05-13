import { IUser } from "./actions/adminActions"

export const USER_AUTH = 'USER_AUTH'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const USER_LOGOUT = 'USER_LOGOUT'
export const START_LOADING = 'START_LOADING'
export const STOP_LOADING = 'STOP_LOADING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const SHOW_MODAL='SHOW_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'







interface fetchUsersAction {
    type: typeof FETCH_SUCCESS
    payload:IUser[]
}

interface showModalAction {
    type: typeof SHOW_MODAL
    payload:IUser
}
interface closeModalAction {
    type: typeof CLOSE_MODAL
}

export type ActionType = fetchUsersAction | showModalAction | closeModalAction