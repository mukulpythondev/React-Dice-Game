import React, { useState } from 'react'
import StartGame from './Components/StartGame'
import GamePlay from './Components/GamePlay'

const App = () => {
  const [isgameplay, setisgameplay] = useState(false)
  const togglegame=()=>{
    setisgameplay((prev)=>  !prev)
  }
  return (
   <>
   {
    isgameplay? <GamePlay/> : <StartGame toggle={togglegame}  />
   }
   </>
  )
}

export default App