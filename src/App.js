import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import GameContainer from './components/GameContainer';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';


function App() {

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

  const [games, setGames] = useState([{
    gameId:uuidv4(),
    gameTitle:'EA SPORTS FC™ 24',
    gamePrice:'R$ 299,00',
    gameImage:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2195250/header.jpg?t=1713799333',
    gameGenre:'Sports'
  },
  {
    gameId:uuidv4(),
    gameTitle:'Project Zomboid',
    gamePrice:'R$ 85,00',
    gameImage:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/108600/header.jpg?t=1691508011',
    gameGenre:'Survival'
  },
  {
    gameId:uuidv4(),
    gameTitle:'Dota 2',
    gamePrice:'Free to Play',
    gameImage:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/header.jpg?t=1714502360',
    gameGenre:'MOBA'
  },
  {
    gameId:uuidv4(),
    gameTitle:'Soulmask',
    gamePrice:'R$ 80,99',
    gameImage:'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2646460/header_alt_assets_13.jpg?t=1717257996',
    gameGenre:'MMO'
  },
])

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

  return (
    <div className="App">
      <Banner />
      <Form genre={genres.map(genre => genre.name)} onGameSaved={game => addNewGame(game)} addNewGenre={addNewGenre} />
      <GameContainer genres={genres} games={games} excludeGame={excludeGame} changeGenreColor={changeGenreColor}/>
      <Footer />
    </div>
  );
}

export default App;