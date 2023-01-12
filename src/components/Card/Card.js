import CardButton from "./CardButton";
import './Card.css';
function Card(props) {
    console.dir(props);
    return (
        <div>
            <img src={props.data.url} alt="" />
            <div>
                <div className="name">{props.data.name}</div>
                <div className="prix">{props.data.price}</div>

            </div>
            <div className="buttonCard">
                <CardButton qteCard={props.data.qte}></CardButton>
            </div>
        </div>
    )

}
export default Card;