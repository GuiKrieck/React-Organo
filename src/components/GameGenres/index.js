import hexToRgba from 'hex-to-rgba';
import GameCard from '../GameCard'
import './GameGenres.css'

const GameGenres = (props) => {
    return(
        props.games.length > 0 && <section className='genres' style={{backgroundImage: 'url(/images/fundo.png)', backgroundColor:hexToRgba(props.color, '0.6')}}>
        <input value={props.color} onChange={event => props.changeGenreColor(event.target.value, props.id)} type='color' className='input-color'/>
        <h3 style={{borderColor:props.color}}>{props.name}</h3>
        <div className='gameCardsContainer'>
            {props.games.map(game => {
                return <GameCard key={game.gameTitle} name={game.gameTitle} price={game.gamePrice} image={game.gameImage} primaryColor={props.color} excludeGame={props.excludeGame} />
            })}
        </div>
    </section>
    )
}

export default GameGenres