import './Card.css';
function CardButton(props) {
    return (
        <button>Buy <span>{props.qteCard}</span></button>
    )
}
export default CardButton;