import React, {Component} from 'react';
import Card from '../Card/Card';

class CardContainer extends Component{
    constructor(){
        super()
        this.state = {
            canciones: [],
            isLoaded: false,
        }
    }

    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c9e6637cde2d15c9a94d98f3a8ece21d&language=en-US&page=1'
        console.log(url)

        fetch(url)
        .then( response => response.json())
        .then( data => {
            console.log(data)
            this.setState({
                canciones: data.data,
                isLoaded: true,
            })
        })
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