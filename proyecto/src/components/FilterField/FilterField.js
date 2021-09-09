import React, {Component} from 'react';
import './filterField.css'

class FilterField extends Component{
    constructor(){
        super();
        this.state = {
            filterBy: ''
        }
    }

    evitarSubmit(e){ 
        e.preventDefault();
        console.log('Evitando el envío')
    }

    controlarCambios(event){
        this.setState({
            filterBy: event.target.value //Del event buscá el objetivo, y de ese objetivo traeme el valor. El objetivo es el campo (input)
            
        }, ()=> this.props.filtrarPeliculas(this.state.filterBy)) //De esta manera no voy a tener delay
        
    }



    render(){
        return (
            <React.Fragment>
            <form action="" onSubmit={(event) => this.evitarSubmit(event)}> 
                <input type='text' placeholder='Search' onChange={(event) => this.controlarCambios(event)} value={this.state.filterBy}/>
            </form>
            </React.Fragment>

        )
    }

}

export default FilterField