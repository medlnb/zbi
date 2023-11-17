import { useContext } from 'react'
import './App.css'
import WelcomePage from './Pages/WelcomePage/WelcomePage'
import { AuthContext } from './Contexts/UserContext'
import HomePage from './Pages/HomePage/HomePage'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  const { user } = useContext(AuthContext)

  return (
    <div>
      {/* {!user.username ?
        < WelcomePage />
        : */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          
            <HomePage />
        </LocalizationProvider>
      {/* } */}
    </div>
  )
}

export default App
