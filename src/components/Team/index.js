import Collaborator from "../Collaborator";
import "./Team.css";

const Team = (props) => {
    return (
        (props.collaborators.length > 0) && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className="collaborators">
                {props.collaborators.map(collaborator => <Collaborator name={collaborator.name} position={collaborator.position} img={collaborator.img} />)}
            </div>
        </section>
    )
}

export default Team;
