import React from 'react'
import {NavLink} from 'react-router-dom'
import { useAuth } from '../../hooks/AuthHook'

export const Navbar:React.FC = () =>{

    const {logout} = useAuth()

    const logoutHandler =() =>{
        logout()
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to='/' className='navbar-brand'>Admin</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to='/users' className='nav-link'>Users</NavLink>
                    </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink to='/logout' className='nav-link' onClick={logoutHandler}>Выйти</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}