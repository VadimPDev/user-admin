import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/actions/adminActions'
import { RootState } from '../../redux/reducers/rootReducer'
import { UserItems } from '../../components/UserItems'

export const UsersPage = () =>{

    const dispatch = useDispatch()

    const users = useSelector((state:RootState)=> state.admin.users)

    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
    return (
        <div className="col-md-12" >
            <h2>Users list</h2>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created</th>
                        <th scope="col">Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                       <UserItems users={users}/>
                    </tbody>
                </table>
        </div>
    )
}