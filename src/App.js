import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import GameContainer from './components/GameContainer';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
import Favorites from './components/Favorites/Favorites';



function App() {

  const favoriteState = {
    id:uuidv4(),
    name: 'Favorites',
    color: '#FFC0CB'
  }
  
  const [genres, setGenres] = useState([
    {
      id:uuidv4(),
      name:'J-RPG',
      color: "#57C278"
    },
    {
      id:uuidv4(),
      name:'Metroidvania',
      color: "#E8F8FF"
    },
    {
      id:uuidv4(),
      name:'Adventure',
      color: "#F0F8E2"
    },
    {
      id:uuidv4(),
      name:'Roguelike',
      color: "#FDE7E8"
    },
    {
      id:uuidv4(),
      name:'RPG',
      color: "#FAE9F5"
    },
    {
      id:uuidv4(),
      name:'Action',
      color: "#FFF5D9"
    },
    {
      id:uuidv4(),
      name:'Simulation',
      color: "#FFEEDF"
    },
    {
      id:uuidv4(),
      name:'Survival',
      color: "#5C88C4"
    },
    {
      id:uuidv4(),
      name:'Hack and Slash',
      color: "#BED7DC"
    },
    {
      id:uuidv4(),
      name:'MMO',      
      color:"#57C278"
    },
    {
      id:uuidv4(),
      name:'Plataformer',
      color: "#E8F8FF"
    },
    {
      id:uuidv4(),
      name:'Souls-like',
      color: "#F0F8E2"
    },
    {
      id:uuidv4(),
      name:'Sports',
      color: "#FDE7E8"
    },
    {
      id:uuidv4(),
      name:'MOBA',
      color: "#FAE9F5"
    }
  ])

  const [games, setGames] = useState([])

  const addNewGame = (game) => {
    setGames([...games, game])
  }

  function excludeGame(gameToDelete){
    setGames(games.filter(game => game.gameId !== gameToDelete))
  }

  function addNewGenre(newGenre){
    setGenres([...genres, {...newGenre, id:uuidv4()}]);
  }

  function changeGenreColor(newColor, genreId){
    setGenres(genres.map(genre => {
      if(genre.id === genreId){
        genre.color = newColor
      }
      return genre
    }))
  }

  function changeFavorite(gameId){
    setGames(games.map(game => {
      if(game.gameId === gameId){
        game.favorite = !game.favorite
      }
      return game
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Form genre={genres.map(genre => genre.name)} onGameSaved={game => addNewGame(game)} addNewGenre={addNewGenre} />
      <Favorites favoriteState={favoriteState} games={games} excludeGame={excludeGame} changeGenreColor={changeGenreColor} changeFavorite={changeFavorite}/>
      <GameContainer genres={genres} games={games} excludeGame={excludeGame} changeGenreColor={changeGenreColor} changeFavorite={changeFavorite}/>
      <Footer />
    </div>
  );
}

export default App;