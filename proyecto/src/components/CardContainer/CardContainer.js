import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component{
    constructor(){
        super()
        this.state = {
            canciones: [],
            isLoaded: false,
            /* nextUrl: '' */

        }
    }

    componentDidMount(){ //Aqui adentro traemos la informacion (de la API)
        
        console.log('monte Canciones')

        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0';
        console.log(url)
       
        fetch(url)
        .then( response => response.json())
        .then( data => {
            console.log(data);
            this.setState({
                canciones: data.data,
                isLoaded: true,
            })
        })
        .catch( e => console.log(e))

    }

    render(){
        return(
            <section className="card-container">
                <Card />
            </section>
        )
    }
}

export default CardContainer