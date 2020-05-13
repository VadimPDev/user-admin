import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../redux/actions/userActions'

interface IForm {
    email:string
    password:string
}


export const RegisterPage = () =>{

    const dispatch = useDispatch()


    const [form,setForm] = useState<IForm>({
        email:'',
        password:''
    })



    const submitHandler = (event:React.FormEvent) =>{
        event.preventDefault()
        dispatch(userRegister(form.email,form.password))
    }

    const changeHandler =  (event:React.FormEvent<HTMLInputElement>):void =>{
        setForm({...form,[event.currentTarget.name]:event.currentTarget.value})
    }

    return (
        <div className="row justify-content-center mt-4">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Register</div>
                    <div className="card-body">
                        <form onSubmit={submitHandler}>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div className="col-md-6">
                                    <input type="text" id="email" className="form-control" name="email" required  onChange={changeHandler}/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                                <div className="col-md-6">
                                    <input type="password" id="password" className="form-control" name="password" required onChange={changeHandler}/>
                                </div>
                            </div>


                            <div className="col-md-6 offset-md-4">
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                                <Link to='/login' className='btn btn-link'>Login</Link>
                            </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}