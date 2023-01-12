import Card from "../Card/Card";
import './CardFrame.css';
function CardFrame(props) {
    return (
        <div className="cardFrame">
            {
                props.data.map((value) => {
                    return (
                        <Card
                            data={value}
                       ></Card>
                    )
                })
            }
        </div>
    )
}
 export default CardFrame;