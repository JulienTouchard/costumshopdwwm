import React from 'react';
import Menu from './components/Menu/Menu';
import CardFrame from './components/CardFrame/CardFrame';
import articles from './articles';
import Panier from './components/Panier/Panier';
import './Root.css';

// component de type class simple
class Root extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data : articles
        }
    }
   
    render(){
        return(
            <>
            <Panier></Panier>
            <header>
                <Menu></Menu>
            </header>
            <main>
                <CardFrame data = {this.state.data}></CardFrame>
            </main>
            </>
        )
    }
}

export default Root