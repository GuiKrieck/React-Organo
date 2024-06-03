import { AiFillCloseCircle } from "react-icons/ai";
import './GameCard.css'

const GameCard = (props) => {
    return(
        <div className='gameCard'>
            <AiFillCloseCircle size={30} className='excludeButton' onClick={props.excludeGame} />
            <div className='header' style={{backgroundColor: props.primaryColor}}>
                <img src={props.image} alt={props.name}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.price}</h5>
            </div>
        </div>
    )
}

export default GameCard;