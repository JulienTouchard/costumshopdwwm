import Card from "../Card/Card";
import './CardFrame.css';
function CardFrame(props) {
    return (
        <div className="cardFrame">
            {
                props.data.map((value,i) => {
                    return (
                        <Card
                            data={value}
                            key = {i}
                       ></Card>
                    )
                })
            }
        </div>
    )
}
 export default CardFrame;