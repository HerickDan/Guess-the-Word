import './App.css';
import { StartScreen } from './components/StartsScreen/StartScreen';
import {useCallback, useEffect, useState} from 'react'
import { wordsList } from './data/word';
import { Game } from './components/Game/Game';
import { GameOver } from './components/GameOver/GameOver';


function App() {
  const stages = [
    {id:1, name:'start'},
    {id:1, name:'game'},
    {id:1, name:'end'}
  ]

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)


  return (
    <div className="App">
     {gameStage=== 'start' && <StartScreen/>}
     {gameStage=== 'game' && <Game/>}
     {gameStage=== 'end' && <GameOver/>}

    </div>
  );
}

export default App;
