import React, {Component} from 'react';
import Card from '../Card/Card';
import './CardContainer.css'

class CardContainer extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            isLoaded: false,
            page: '',
        }
    }

    componentDidMount(){
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=c9e6637cde2d15c9a94d98f3a8ece21d&language=en-US&page='
        console.log(url)

        fetch(url)
        .then( response => response.json())
        .then( data => {
            console.log(data)
            this.setState({
                peliculas: data.results,
                isLoaded: true,
            })
        })
        .catch(error => console.log(error))
    }

    addMore(){
        let url = this.state.page;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                page: data.page + 1
            })
        })
        .catch(error => console.log(error))
    }

    deleteCard(peliculaABorrar){
        let peliculasQueQuedan = this.state.peliculas.filter( pelicula => pelicula.id !== peliculaABorrar );
        this.setState({
            peliculas: peliculasQueQuedan,
        })
    }
    
    render(){
        return(
            <React.Fragment>
            <section className="card-container">
            {
                this.state.isLoaded === false ?
                <p>Cargando...</p> :
                this.state.peliculas.map((pelicula, idx) => 
                <Card key={pelicula.title + idx} dataPelicula={pelicula} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)} />)
            }
            </section>
            <button onClick={()=> this.addMore()}>Mas peliculas</button>
            </React.Fragment>
        )
    }
}

export default CardContainer