import React from 'react'
import {Switch,Route,Redirect} from 'react-router'
import { MainPage } from './pages/MainPage'
import { LoginPage } from './pages/Auth/LoginPage'
import { RegisterPage } from './pages/Auth/RegisterPage'
import { UsersPage } from './pages/Users/UsersPage'

type Auth = boolean


export const useRoutes = (isAuthenticated:Auth) =>{
    if(isAuthenticated){
        return (
            <Switch>
                <Route path='/' exact>
                    <MainPage />
                </Route>
                <Route path='/users' exact>
                    <UsersPage />
                </Route>
                <Route path='/logout'>

                </Route>
                <Redirect to='/' />
            </Switch>
        )
    }else{
        return (
            <Switch>
                <Route path='/login'>
                    <LoginPage />
                </Route>
                <Route path='/register'>
                    <RegisterPage />
                </Route>
                <Redirect to='/login'/>
            </Switch>
        )
    }
}