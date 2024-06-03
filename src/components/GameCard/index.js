import './GameCard.css'

const GameCard = (props) => {
    return(
        <div className='gameCard'>
            <div className='header'>
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