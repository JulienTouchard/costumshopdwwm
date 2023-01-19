import CardButton from "./CardButton";
import './Card.css';
function Card(props) {
    return (
        <div className="card">
            <img src={props.data.url} alt="" />
            <div>
                <div className="name">{props.data.name}</div>
                <div className="prix">{props.data.price}</div>

            </div>
            <div className="buttonCard">
                <CardButton id={props.data.id}></CardButton>
            </div>
        </div>
    )

}
export default Card;