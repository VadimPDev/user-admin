import React from 'react'
import {IUser} from '../redux/actions/adminActions'
import { Item } from './Item'

interface ItemsProps {
    users:IUser[]
}

export const UserItems = ({users}:ItemsProps) =>{
    return (
        <>
        {users.map((user,index) => {
        return (
            <Item user={user} index={index} key={index+ user.__v}/>
            )
        })}
    </>
    )
}