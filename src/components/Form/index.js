import Button from '../Button';
import DropdownList from '../DropdownList';
import TextField from '../TextField';
import './Form.css';

const Form = () => {

    const teams = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX & Design',
        'Mobile',
        'Inovação e gestão'
    ]

    const whenSaving = (event) => {
        event.preventDefault();
        console.log("Form foi submetido");
    }

    return (
        <section className="form">
            <form onSubmit={whenSaving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField required="true" label="Nome" placeholder="Digite seu nome" />
                <TextField required="true" label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList required="true" label="Time" items={teams} />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;
