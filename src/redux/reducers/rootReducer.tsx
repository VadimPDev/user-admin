import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import { adminReducer } from './adminReducer'

export const rootReducer = combineReducers({
    user:userReducer,
    admin:adminReducer
})

export type RootState = ReturnType<typeof rootReducer>