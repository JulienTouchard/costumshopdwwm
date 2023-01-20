import React from 'react';
import BoutiqueContext from '../../BoutiqueContext';
import './Panier.css';
const Panier = (props) => {
   let qteTmp = 0;
    let qteDisplay;
    const boutiqueContext = React.useContext(BoutiqueContext);
    boutiqueContext.panier.sort();
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
                                if(value !== boutiqueContext.panier[i+1]){
                                    qteDisplay = qteTmp+1;
                                    qteTmp = 0;
                                    return (
                                        <li key={i}>
                                            <span className="namePanier">{article.name}</span>
                                            <span>
                                                {
                                                    boutiqueContext.data[value].qte > 0 ?
                                                    <span className="morePanier" onClick={()=>boutiqueContext.achat(value)}>+</span> :
                                                    <></>
                                                }
                                                
                                                
                                                <span className="qtePanier">{qteDisplay}</span>
                                                <span className="lessPanier" onClick={()=>boutiqueContext.remove(i,value)}>-</span>
                                                <span className="pricePanier">{article.price} € TTC</span>
                                                <span className="removePanier" onClick={()=>boutiqueContext.removeAll(value)}>Poubelle</span>
                                            </span>
                                        </li>
                                    )

                                } else {
                                    qteDisplay = qteTmp+1;
                                    qteTmp++
                                }
                                
                            })
                        }
                    </ul>
                    <div className='total'>
                        <span className="totalPanier">{ boutiqueContext.totalPanier } € TTC </span>
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