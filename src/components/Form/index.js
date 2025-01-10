import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = (props) => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [img, setImg] = useState("");
    const [team, setTeam] = useState("")

    const whenSaving = (event) => {
        event.preventDefault();
        props.whenRegisteringCollaborator({
            name,
            position,
            img,
            team
        });
        setName("")
        setPosition("")
        setImg("")
        setTeam("")
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required="true" 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    enteredValue={name}
                    toTheChanged={enteredValue => setName(enteredValue)}
                />
                <TextField 
                    required="true" 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    enteredValue={position}
                    toTheChanged={enteredValue => setPosition(enteredValue)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    enteredValue={img}
                    toTheChanged={enteredValue => setImg(enteredValue)}
                />
                <DropdownList 
                    required="true" 
                    label="Time" 
                    items={props.teams} 
                    enteredValue={team}
                    toTheChanged={enteredValue => setTeam(enteredValue)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;
