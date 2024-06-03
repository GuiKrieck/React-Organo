import GameGenres from '../GameGenres'
import './GameContainer.css'

const GameContainer = (props) => {
    return(
        <main className='container'>
            <h2>Minha Organização:</h2>
            <img src='/images/botao-add.png' alt='um circulo com um simbolo de adição no meio'/>
            {props.genres.map(genre => <GameGenres key={genre.name} name={genre.name} primaryColor={genre.primaryColor} secondaryColor={genre.secondaryColor} games={props.games.filter(game => game.gameGenre === genre.name)}/>)}
        </main>
    )
}

export default GameContainer