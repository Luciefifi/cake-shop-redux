import { useState } from 'react'
import { CakeView } from './features/cake/cakeView'
import { IcecreamView } from './features/icecream/IcecreamView'
import {UserView} from './features/user/UserView'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <CakeView/>
        <IcecreamView/>
        <UserView/>

       </div>
   
  )
}

export default App
