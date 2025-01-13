import "./Collaborator.css";

const Collaborator = ({ name, img, position, backgroundColor }) => {
    return (
        <div className="collaborator">
            <div className="header" style={{ backgroundColor: backgroundColor }}>
                <img src={img} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Collaborator;
