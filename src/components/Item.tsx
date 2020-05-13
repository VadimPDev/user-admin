import React from 'react'
import { IUser, showModal } from '../redux/actions/adminActions'
import { useDispatch } from 'react-redux'

interface ItemProps {
    user:IUser
    index:number
}

export const Item = ({user,index}:ItemProps) =>{

    const dispatch = useDispatch()

 return (
        <tr key={user.__v+index} onClick={()=>dispatch(showModal(user))}>
            <th scope="row">{user.__v+index}</th>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.updatedAt}</td>
        </tr>
)
}