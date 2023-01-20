import React from 'react';
import Menu from './components/Menu/Menu';
import CardFrame from './components/CardFrame/CardFrame';
import Panier from './components/Panier/Panier';
import BoutiqueContext from './BoutiqueContext';
import articles from './articles';

import './Root.css';

// component de type class simple
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: articles,
            displayFramesPanier: false,
            displayFramesRegister: false,
            panier: [],
            totalPanier: 0,
            handleDisplayFrame: this.handleDisplayFrame.bind(this),
            achat: this.achat.bind(this),
            remove: this.remove.bind(this),
            removeAll:this.removeAll.bind(this)
        }
        //this.handleDisplayFrame = this.handleDisplayFrame.bind(this);
    }
    handleDisplayFrame(value) {
        if (value === "Cart") {
            this.setState(() => {
                return {
                    displayFramesPanier: !this.state.displayFramesPanier
                }
            })
        }
    }
    achat(id) {
        // je dois decrémenter la quantité du this.state.data[id] qui vient d'être acheté
        if (this.state.data[id].qte > 0) {
            let panierTmp = this.state.panier.sort();
            let dataTmp = this.state.data;
            dataTmp[id].qte -= 1;
            panierTmp.push(id);
            this.setState(() => {
                return {
                    data: dataTmp,
                    panier: panierTmp
                }
            })
            this.calculTotal(id, "achat");
        }

    }
    remove(i, id) {
        let panierTmp = this.state.panier.sort();
        let dataTmp = this.state.data;
        dataTmp[id].qte += 1;
        panierTmp.splice(i, 1);
        this.setState(() => {
            return {
                data: dataTmp,
                panier: panierTmp
            }
        })
        this.calculTotal(id, "remove");
    }
    removeAll(id){
        let panierTmp = this.state.panier.sort();
        let dataTmp = this.state.data;
        console.log(id);
        panierTmp.map((value,i)=>{
            console.dir(value,id);
            if(value === id){
                dataTmp[id].qte += 1;
                panierTmp.splice(i, 1);
                this.calculTotal(id, "remove");
            }
        })
        

        this.setState(() => {
            return {
                data: dataTmp,
                panier: panierTmp
            }
        })

    }
    calculTotal(id, action) {
        let totalPanierTmp = this.state.totalPanier;
        let priceTmp = this.state.data[id].price;
        if (action === "achat") {
            totalPanierTmp += priceTmp;
        } else if (action === "remove") {
            totalPanierTmp -= priceTmp;
        }

        this.setState(() => {
            return {
                totalPanier: totalPanierTmp
            }
        })

    }
    render() {
        return (
            <BoutiqueContext.Provider value={this.state}>
                {
                    this.state.displayFramesPanier ? <Panier></Panier> : <></>

                }
                <header>
                    <Menu ></Menu>
                </header>
                <main>
                    <CardFrame data={this.state.data}></CardFrame>
                </main>
            </BoutiqueContext.Provider>
        )
    }
}

export default Root