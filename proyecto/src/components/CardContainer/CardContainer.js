import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <section className="card-container">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        )
    }
}

export default CardContainer