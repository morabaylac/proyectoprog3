import React, {Component} from 'react';
import './card.css'

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
                    {/* <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div> */}
                    <i className="far fa-window-close borrar" onClick={() => this.props.remove(this.props.dataPelicula.id)}></i>
                </section>
                <main>
                    <img src={`https://image.tmdb.org/t/p/w500${this.props.dataPelicula.poster_path}`} alt="" />
                    <h3>{this.props.dataPelicula.title}</h3>
                    <section className={`aditional-info ${this.state.viewMore ? 'show' : 'hide'}`}>
                        <p className="description">{this.props.dataPelicula.overview}</p>
                        <p>Release Date: {this.props.dataPelicula.release_date}</p>
                        <p>Vote Average: {this.props.dataPelicula.vote_average}</p>
                        <p>Original Language: {this.props.dataPelicula.original_language}</p>
                    </section>
                    <button className='more' onClick={() => this.viewMore()}>{this.state.text}</button>
                </main>
            </article>
        )
    }
}

export default Card