import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './GameCard.css'

const GameCard = (props) => {

    const propsFavorite ={
        size:25,
        onClick:setFavorite
    }

    function setFavorite(){
        props.changeFavorite(props.gameId)
    }

    return(
        <div className='gameCard'>
            <AiFillCloseCircle size={30} className='excludeButton' onClick={() => props.excludeGame(props.gameId)} />
            <div className='header' style={{backgroundColor: props.color}}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
                <div className="favorite">
                    {props.favorite ? <AiFillHeart {...propsFavorite} /> : <AiOutlineHeart  {...propsFavorite}/>}
                </div>
            </div>
        </div>
    )
}

export default GameCard;