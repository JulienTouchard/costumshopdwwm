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
            displayFramesPanier:false,
            displayFramesRegister:false,
            panier:[],
            handleDisplayFrame:this.handleDisplayFrame.bind(this),
            achat:this.achat.bind(this),
            remove:this.remove.bind(this)
        }
        //this.handleDisplayFrame = this.handleDisplayFrame.bind(this);
    }
    handleDisplayFrame(value){
        if(value === "Cart"){
            this.setState(()=>{
                return {
                    displayFramesPanier:!this.state.displayFramesPanier 
                }
            })
        }
    }
    achat(id){
        // je dois decrémenter la quantité du this.state.data[id] qui vient d'être acheté
        let panierTmp = this.state.panier;
        let dataTmp = this.state.data;
        dataTmp[id].qte -= 1;
        panierTmp.push(id);
        this.setState(()=>{
            return {
                data:dataTmp,
                panier:panierTmp
            }
        })
    }
    remove(i,id){
        console.log(i)
        let panierTmp = this.state.panier;
        let dataTmp = this.state.data;
        dataTmp[id].qte += 1;
        panierTmp.splice(i,1);
        this.setState(()=>{
            return {
                data:dataTmp,
                panier:panierTmp
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