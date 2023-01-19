import React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import './Card.css';
function CardButton(props) {
    const boutiqueContext = React.useContext(BoutiqueContext);
    return (
        <button onClick={() => boutiqueContext.achat(props.id)}>Buy</button>
    )
}
export default CardButton;