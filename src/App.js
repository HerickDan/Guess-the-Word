import './App.css';
import { StartScreen } from './components/StartsScreen/StartScreen';
import {useCallback, useEffect, useState} from 'react'
import { wordsList } from './data/word';
import { Game } from './components/Game/Game';
import { GameOver } from './components/GameOver/GameOver';
import React from 'react';


function App() {
  const stages = [
    {id:1, name:'start'},
    {id:2, name:'game'},
    {id:3, name:'end'}
  ]
  const [gameStage, setGameStage] = useState(stages[0].name)
 
  const [words] = useState(wordsList)
  const [pickedsWords, setPickedsWords] = useState('')
  const [categoriy, setCategory] = useState('')
  const [letters, setLetters] = useState('')
  const pickedWords = () => {
    const categories = Object.keys(wordsList);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const word = wordsList[randomCategory][Math.floor(Math.random() * wordsList[randomCategory].length)];
    return { word, randomCategory };
}


  const startGame = () => {
    const { word, randomCategory } = pickedWords();
    
    let wordless = word.split(' ')
    console.log(word)
 
    setGameStage(stages[1].name);
    setPickedsWords(word);
    setCategory(randomCategory);
    setLetters(wordless);
}
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }
  const restartGame = () =>{
    setGameStage(stages[0].name)
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
