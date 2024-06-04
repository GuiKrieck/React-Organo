import { useState } from 'react'
import Button from '../Button'
import DropList from '../DropList'
import Input from '../Input'
import { v4 as uuidv4 } from 'uuid';
import './Form.css'


const Form = (props) => {

    const[gameTitle, setGameTitle] = useState("")
    const[gamePrice, setGamePrice] = useState("")
    const[gameImage, setGameImage] = useState("")
    const[gameGenre, setGameGenre] = useState("")
    const[newGenre, setNewGenre] = useState("")
    const[newGenreColor, setNewGenreColor] = useState("#000000")


    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.onGameSaved({      
            gameId:uuidv4(),
            gameTitle,
            gamePrice,
            gameImage,
            gameGenre
        })
        setGameTitle("")
        setGamePrice("")
        setGameImage("")
        setGameGenre("")
    }

    const onNewGenreSubmit = (event) =>{
        event.preventDefault();
        props.addNewGenre({name:newGenre, color:newGenreColor})
        setNewGenre('')
        setNewGenreColor('#000000')
    }
    
    return (
        <section className='form'>
            <form onSubmit={onFormSubmit}>
                <h2>Preencha os dados para criar o card do Game</h2>
                <Input type='text' value={gameTitle} onValueChange={value => setGameTitle(value)} required={true} label="Título" placeholder="Digite o título do jogo" />
                <Input type='text' value={gamePrice} onValueChange={value => setGamePrice(value)} required={true}label="Preço" placeholder="Digite o preço do jogo" />
                <Input type='text' value={gameImage} onValueChange={value => setGameImage(value)} label="Imagem" placeholder="informe o Link da imagem" />
                <DropList value ={gameGenre} onValueChange={value => setGameGenre(value)}required={true} label="Gênero" items={props.genre} />
                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={onNewGenreSubmit}>
                <h2>Preencha os dados para criar um novo Gênero</h2>
                <Input type='text' value={newGenre} onValueChange={value => setNewGenre(value)} required label="Genero" placeholder="Digite o novo Genero para Ser Adicionado" />
                <Input type='color' value={newGenreColor} onValueChange={value => setNewGenreColor(value)} required label="Cor" />
                <Button>
                    Criar novo Gênero
                </Button>
            </form>
        </section>
    )
}

export default Form