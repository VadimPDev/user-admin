import React from 'react'
import { IUser, closeModal } from '../redux/actions/adminActions'
import { useDispatch } from 'react-redux'
interface ModalProps {
    user:IUser
}
export const Modal = ({user}:ModalProps) =>{
    const dispatch = useDispatch()
    return (
        <div className="modal-app">
        <div className="my-modal">
          <div className="modal-title">Edit user</div>
          <div className="modal-data">
                <p>{user.email}</p>
          </div>
          <div className="modal-bottom">
                <button>Save</button>
                <button onClick={()=>dispatch(closeModal())}>Close</button>
          </div>
        </div>  
        </div>
    )
}