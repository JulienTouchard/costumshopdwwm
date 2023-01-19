import React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import './Panier.css';
const Panier = (props) => {
    let total = 0;
    const boutiqueContext = React.useContext(BoutiqueContext);
    if (boutiqueContext.panier.length > 0) {
        return (
            <div className="backPanier">
                <div className="panier">
                    <div className="closePanier" onClick={() => {
                        boutiqueContext.handleDisplayFrame("Cart");
                    }}>X</div>
                    <h3>Votre Panier : </h3>
                    <ul>
                        {/* Boucle Map sur le panier */}
                        {
                            boutiqueContext.panier.map((value, i) => {
                                let article = boutiqueContext.data[value];
                                total += article.price;
                                return (
                                    <li key={i}>
                                        <span className="namePanier">{article.name}</span>
                                        <span>
                                            <span className="morePanier" onClick={()=>boutiqueContext.achat(value)}>+</span>
                                            <span className="qtePanier">{article.qte}</span>
                                            <span className="lessPanier" onClick={()=>boutiqueContext.remove(i,value)}>-</span>
                                            <span className="pricePanier">{article.price} € TTC</span>
                                            <span className="removePanier"></span>
                                        </span>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className='total'>
                        <span className="totalPanier">{ total } € TTC </span>
                        <button className="achatPanier">Acheter</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="backPanier">
                <div className="panier">
                    <div className="closePanier" onClick={() => {
                        boutiqueContext.handleDisplayFrame("Cart");
                    }}>X</div>
                    <h3>Votre Panier : </h3>
                </div>
            </div>
        )
    }
}
export default Panier