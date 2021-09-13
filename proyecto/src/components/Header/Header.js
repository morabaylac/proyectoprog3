import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterBy: '', 
            resultados: false,
        }
    }

    evitarSubmit(e){ 
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value, //Del event buscá el objetivo, y de ese objetivo traeme el valor. El objetivo es el campo (input)
            resultados: true
            
        }, ()=> this.props.filtrarPeliculas(this.state.filterBy)) //De esta manera no voy a tener delay
        
    }

    render(){
        return(
            <header>
                <img src="/assets/images/logo.png" className="logo" alt="logo" />
                <div className='search'>
                    <form action="" onSubmit={(event) => this.evitarSubmit(event)}> 
                        <input type='text' placeholder='Search' onChange={(event) => this.controlarCambios(event)} value={this.state.filterBy}/>
                    </form>
                </div>
                <section className= "iconos">
                    <i className="fas fa-align-justify button-column"  onClick={() => this.props.buttonRow()}></i>
                    <i className="fas fa-th button-row"onClick={() => this.props.buttonColumn()}></i>
                </section>     
            </header>
        )
    }
}

export default Header