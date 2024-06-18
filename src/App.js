import './App.css';
import { StartScreen } from './components/StartsScreen/StartScreen';
import {useCallback, useEffect, useState} from 'react'
import { wordsList } from './data/word';
import { Game } from './components/Game/Game';
import { GameOver } from './components/GameOver/GameOver';


function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const stages = [
    {id:1, name:'start'},
    {id:2, name:'game'},
    {id:3, name:'end'}
  ]
  const [words] = useState(wordsList)
  const startGame = () =>{
    setGameStage(stages[1].name)
  }
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }
  const restartGame = () =>{
    setGameStage(stages[2].name)
  }

  return (
    <div className="App">
     {gameStage=== 'start' && <StartScreen startGame={startGame}/>}
     {gameStage=== 'game' && <Game verifyLetter={verifyLetter}/>}
     {gameStage=== 'end' && <GameOver restartGame={restartGame}/>}
      
    </div>
  );
}

export default App;
