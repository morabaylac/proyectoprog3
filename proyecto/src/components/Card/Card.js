import React, {Component} from 'react';
import './Card.css'

class Card extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: 'Ver más',
            viewMore: false,
        }
    }

    viewMore(){
        if(this.state.viewMore){
            this.setState({
                text: 'Ver más',
                viewMore: false,

            })
        }else{
            this.setState({
                text: 'Ver menos',
                viewMore: true,

            })
        }
    }
    
    render(){
        return(
            <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
                <main>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.dataPelicula.poster_path}`} alt="" />
                    <h3>{this.props.dataPelicula.title}</h3>
                    <p className="description">{this.props.dataPelicula.overview}</p>
                    <section className={`aditional-info ${this.state.viewMore ? 'show' : 'hide'}`}>
                        <p>{this.props.dataPelicula.release_date}</p>
                        <p>{this.props.dataPelicula.vote_average}</p>
                        <p>{this.props.dataPelicula.original_language}</p>
                    </section>
                    <p className='more' onClick={() => this.viewMore()}>{this.state.text}</p>
                    <p className='borrar' onClick={() => this.props.remove(this.props.dataPelicula.id)}>Borrar</p>
                </main>
            </article>
        )
    }
}

export default Card