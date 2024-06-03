import './Input.css'

const Input = (props) => {

    return (
        <div className={`input-field ${props.type}`}>
            <label>{props.label}</label>
            <input type={props.type} value={props.value} onChange={event => props.onValueChange(event.target.value)} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default Input