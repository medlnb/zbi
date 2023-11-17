import './WelcomePage.css'
import logo from '../../assets/KasdiLogo.png'
import Signup from '../../Components/Signup/Signup'
import { useState } from 'react'
import Login from '../../Components/Login/Login'

function WelcomePage() {
  const [PageSelected, setPageSelected] = useState<"login" | "signup">("signup")

  return (
    <div className='welcomePage--container'>
      <div className="welcomePage--left">
        <img src={logo} className='welcomePage--logo' />
      </div>
      <div className="welcomePage--right">
        {PageSelected == "signup" ?
          <Signup HandleChange={() => setPageSelected("login")} />
          :
          <Login HandleChange={() => setPageSelected("signup")} />}
      </div>
    </div>
  )
}

export default WelcomePage