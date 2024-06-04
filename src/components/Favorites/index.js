import GameGenres from '../GameGenres'
import './Favorites.css'

const Favorites = (props) =>{
    const favoriteHasElements = props.games.filter(game => game.favorite === true).length
    return(
        
        favoriteHasElements > 0 && <section className='favoriteContainer'>
            <h2>Favoritos</h2>
            <img src='/images/botao-add.png' alt='um circulo com um simbolo de adição no meio' onClick={props.hideForm} title='Mostrar/Esconder formulário'/>
            <GameGenres 
                key={props.favoriteState.name} 
                id={props.favoriteState.id}
                hidden={'hidden'} 
                color={props.favoriteState.color} 
                changeGenreColor={props.changeGenreColor} 
                excludeGame={props.excludeGame} 
                changeFavorite={props.changeFavorite} 
                games={props.games.filter(game => game.favorite === true)}/>
        </section>
    )
}

export default Favorites