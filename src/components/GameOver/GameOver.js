import './GameOver.css'

export const GameOver = ({restartGame}) =>{
    return(
        <div>
            <h1>Perdeu</h1>
            <button onClickCapture={restartGame}>Clique para reinicar o jogo</button>
        </div>
    )
}