import './app.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
export function App() {


  return (
    <UserContextProvider>
      <Profile />
      <Login />
    </UserContextProvider>
  )
}
