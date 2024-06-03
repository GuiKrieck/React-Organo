import './DropList.css'

const DropList = (props) => {
    return(
        <div className='drop-list'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={event => props.onValueChange(event.target.value)}>
                <option value='' hidden> Escolha um Gênero</option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default DropList