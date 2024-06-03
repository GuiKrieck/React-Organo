import GameCard from '../GameCard'
import './GameGenres.css'

const GameGenres = (props) => {
    return(
        props.games.length > 0 && <section className='genres' style={{backgroundColor:props.secondaryColor}}>
        <h3 style={{borderColor:props.primaryColor}}>{props.name}</h3>
        <div className='gameCardsContainer'>
            {props.games.map(game => <GameCard key={game.gameTitle} name={game.gameTitle} price={game.gamePrice} image={game.gameImage} />)}
        </div>
    </section>
    )
}

export default GameGenres