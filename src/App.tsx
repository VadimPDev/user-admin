import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { useRoutes } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import {RootState} from './redux/reducers/rootReducer'
import { useAuth } from './hooks/AuthHook';
import { Navbar } from './components/UI/Navbar';
import { Loader } from './components/UI/Loader';
import { Modal } from './components/Modal';

function App() {

  const {ready} = useAuth()

  const user = useSelector((state:RootState)=> state.user.token)
  const loading = useSelector((state:RootState) => state.user.loading)
  const modal = useSelector((state:RootState) => state.admin.modal)
  const userEdit = useSelector((state:RootState) => state.admin.edit)
  const routes = useRoutes(!!user)
  if(!ready){
    return <Loader />
  }

  return (
    <BrowserRouter>
      {!!user ?<Navbar /> : null}
        {modal ? <Modal user={userEdit}/> : null}
        {loading ? <Loader /> : null}
        <div className="container mt-4">
          {routes}
        </div>
    </BrowserRouter>
  )
}

export default App;
