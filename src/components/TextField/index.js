import './TextField.css';

const TextField = (props) => {

    const whenTyped = (event) => {
        props.toTheChanged(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.enteredValue} onChange={whenTyped} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField;
