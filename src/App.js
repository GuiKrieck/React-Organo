import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import GameContainer from './components/GameContainer';
import Footer from './components/Footer';


function App() {

  const genres = [
    {
      name:'J-RPG',
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      name:'Metroidvania',
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name:'Adventure',
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      name:'Roguelike',
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      name:'RPG',
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      name:'Action',
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      name:'Simulation',
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    },
    {
      name:'Survival',
      primaryColor: "#5C2FC2",
      secondaryColor: "#5C88C4"
    },
    {
      name:'Hack and Slash',
      primaryColor: "#80959C",
      secondaryColor: "#BED7DC"
    },
    {
      name:'MMO',
      primaryColor:"#57C278",
      secondaryColor:"#D9F7E9"
    },
    {
      name:'Plataformer',
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      name:'Souls-like',
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    }]

  const [games, setGames] = useState([])

  const addNewGame = (game) => {
    setGames([...games, game])
  }

  return (
    <div className="App">
      <Banner />
      <Form genre={genres.map(genre => genre.name)} onGameSaved={game => addNewGame(game)} />
      <GameContainer genres={genres} games={games}/>
      <Footer />
    </div>
  );
}

export default App;