import { useState } from 'react'
import Button from '../Button'
import DropList from '../DropList'
import TextInput from '../TextInput'
import './Form.css'


const Form = (props) => {

    const[gameTitle, setGameTitle] = useState("")
    const[gamePrice, setGamePrice] = useState("")
    const[gameImage, setGameImage] = useState("")
    const[gameGenre, setGameGenre] = useState("");


    const onFormSubmit = (event) =>{
        event.preventDefault();
        props.onGameSaved({
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
    
    return (
        <section className='form'>
            <form onSubmit={onFormSubmit}>
                <h2>Preencha os dados para criar o card do Game</h2>
                <TextInput value={gameTitle} onValueChange={value => setGameTitle(value)} required={true} label="Título" placeholder="Digite o título do jogo" />
                <TextInput value={gamePrice} onValueChange={value => setGamePrice(value)} required={true}label="Preço" placeholder="Digite o preço do jogo" />
                <TextInput value={gameImage} onValueChange={value => setGameImage(value)} label="Imagem" placeholder="informe o Link da imagem" />
                <DropList value ={gameGenre} onValueChange={value => setGameGenre(value)}required={true} label="Gênero" items={props.genre} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form