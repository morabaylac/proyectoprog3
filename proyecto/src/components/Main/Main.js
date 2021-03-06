import React, {Component} from 'react';
import Card from '../Card/Card';
import './main.css';
import Header from '../Header/Header'

class Main extends Component{
    constructor(){
        super()
        this.state = {
            peliculas: [],
            isLoaded: false,
            page: 1,
            peliculasIniciales: [],
            url: `https://api.themoviedb.org/3/movie/popular?api_key=c9e6637cde2d15c9a94d98f3a8ece21d&language=en-US&page=`,
            buttonRow: false, 
        }
    }

    componentDidMount(){
        console.log(this.state.url + this.state.page)
        fetch(this.state.url + this.state.page)
        .then( response => response.json())
        .then( data => {
            console.log(data)
            this.setState({
                peliculas: data.results,
                isLoaded: true,
                peliculasIniciales: data.results,
                page: data.page + 1
            })
        })
        .catch(error => console.log(error))
    }

    addMore(){
        fetch(this.state.url + this.state.page)
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
        //Tengo una funcion que lo que hace es filtrar los personajes y compara si el nombre del personaje tiene textoAFIltrar
        let peliculasFiltradas = this.state.peliculasIniciales.filter( pelicula => pelicula.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            peliculas: peliculasFiltradas,
        })
    }; 

    buttonRow(){ 
        console.log("fila");
        this.setState({
            buttonRow: true
        })
    }

    buttonColumn(){
            console.log("columna");
            this.setState({
                buttonRow: false
            }) 
    }
    
    render(){
        return(
            <React.Fragment>

            <Header buttonRow={() => this.buttonRow()} buttonColumn={() => this.buttonColumn()} filtrarPeliculas={(textoAFiltrar) => this.filtrarPeliculas(textoAFiltrar)}/>
            <main>       
                <section className={`${this.state.buttonRow ? 'card-container-column': 'card-container-row'}`}>
                {
                    this.state.isLoaded === false ?
                    <iframe src="https://giphy.com/embed/xTkcEQACH24SMPxIQg" title='gif' width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe> :
                    this.state.peliculas.length === 0 ?
                    <p className="no-results">??No hay resultados para tu b??squeda!</p>:
                    this.state.peliculas.map((pelicula, idx) => 
                    <Card key={pelicula.title + idx} dataPelicula={pelicula} remove={(peliculaABorrar) => this.deleteCard(peliculaABorrar)} />)
                }
                </section>
                <button className= "agregar" onClick={()=> this.addMore()}> M??s pel??culas</button>
            </main>

            </React.Fragment>
        )
    }
}

export default Main