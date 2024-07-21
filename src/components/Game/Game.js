import React from 'react'
import './Game.css'

export const Game = ({verifyLetter}) =>{
    return(
       <div className='game'>
            <p className='points'>
                <span>Pontuação: 000</span>
            </p>
            <h1>
                Advinhe a palavra
            </h1>
            <h3 className='tip'>Dica sobre a palavra: <span>Dica...</span></h3>
            <div className='wordcontainer'>
                <span className='letter'>A</span>
                <span className='blankSquare'></span>
            </div>
            <div className='letterContainer'>
                <p>Tente advinhar uma letra da palavra:</p>
                <form>
                    <input name='letter'/>
                    <button>
                        Jogar!
                    </button>
                </form>
            </div>
            <div className='wrongLettersContainer'>
                <p>Letras erradas</p>
            </div>
       </div>
    )
}