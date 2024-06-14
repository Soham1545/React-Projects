import styled from 'styled-components';
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';


function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () =>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
    {/* we use curley brackets to run javascript, for logics nd all */}
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGameplay}/>
      }

    </>
  )
}

export default App
