import React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import './Panier.css';
const Panier = (props) => {
    const boutiqueContext = React.useContext(BoutiqueContext);
    return (
        <div className="backPanier">
            <div className="panier">
                <div className="closePanier" onClick={()=>{
                    boutiqueContext.handleDisplayFrame("Cart");
                }}>X</div>
                <h3>Votre Panier : </h3>
                <ul>
                    {/* Boucle Map sur le panier */}
                    <li>
                        <span className="namePanier">{ }</span>
                        <span>
                            <span className="morePanier">+</span>
                            <span className="qtePanier">{}</span>
                            <span className="lessPanier">-</span>
                            <span className="pricePanier">{}</span>
                            <span className="removePanier"></span>
                        </span>
                    </li>
                </ul>
                <div>
                   <span className="totalPanier">{}</span>
                   <button className="achatPanier">Acheter</button> 
                </div>
            </div>
        </div>
    )
}
export default Panier