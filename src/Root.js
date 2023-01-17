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
            handleDisplayFrame:this.handleDisplayFrame.bind(this)
        }
        //this.handleDisplayFrame = this.handleDisplayFrame.bind(this);
    }
    handleDisplayFrame(value){
        console.log(value)
        if(value === "Cart"){
            this.setState(()=>{
                return {
                    displayFramesPanier:!this.state.displayFramesPanier 
                }
            })
        }
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