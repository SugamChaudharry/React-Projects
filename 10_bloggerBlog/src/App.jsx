import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login , logout } from "./store/Authslice"
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
function App() {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then( (userData) => {
      if(userData) {
        dispatch(login({userData}));
      }else {
        dispatch(logout());
      }
    })
    .finally( () => {setLoding(false)})
  })
  return !loding ? (
    <div className='bg-slate-900 w-full h-screen text-white flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
        <main>
          < Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
