import React, {Component} from 'react';
import Card from '../Card/Card';
import './CardContainer.css';
import FilterField from '../FilterField/FilterField';

class CardContainer extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            isLoaded: false,
            page: '',
            peliculasIniciales: [],
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
                peliculasIniciales: data.results,
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
    filtrarPeliculas(textoAFiltrar){
        // let peliculasFiltradas = this.state.peliculasIniciales.filter( pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase())); //Tengo una funcion que lo que hace es filtrar los personajes y compara si el nombre del personaje tiene textoAFIltrar
        let peliculasFiltradas = this.state.peliculasIniciales.filter( pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas,
        })
    }; 
    
    render(){
        return(
            <React.Fragment>
                <div className='search'>
                <FilterField filtrarPeliculas={(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)}/>
                </div>
                
            <section className="card-container">
            {
                this.state.isLoaded === false ?
                <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> :
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