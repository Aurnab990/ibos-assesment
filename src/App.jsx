import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Registration/Login'
import Signup from './Registration/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <Login></Login> */}
      <Signup></Signup>
    </div>
  )
}

export default App
