import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';

function App() {
  const [loding, setLoding] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then( (userData) => {})
    .finally()
  })

  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
    <h1>Bolg web</h1>
    </>
  )
}

export default App
