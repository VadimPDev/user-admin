import { useCallback, useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { loginSuccess, logOut } from "../redux/actions/userActions"



export const useAuth =() =>{

    const [ready,setReady] = useState(false)
    const dispatch = useDispatch()

    const auth = useCallback((email,token)=>{
        dispatch(loginSuccess(email,token))
    },[dispatch])

    const logout = useCallback(()=>{
        dispatch(logOut())
        localStorage.removeItem('userData')
    },[dispatch])


    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userData')!)
        if(data && data.token){
            auth(data.email,data.token)
        }
        setReady(true)
    },[auth])

    return {auth,logout,ready}
}