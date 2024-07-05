import React from "react"
import "./StartsScreen.css"

export const StartScreen = ({startGame}) =>{
    return(
         <div className='start'>
            <h1>Secret Word</h1>
            <p>Clique no botão abaixo para começar o jogo</p>
            <button onClick={startGame}>começar o jogo</button>
         </div>
    )
}