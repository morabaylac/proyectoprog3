import React, {Component} from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <header>
                <h1>Titulo/Nombre de App</h1>
                <section>
                    <p>Ordenar ASC/ DESC</p>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                    <form action="">
                        <input input type="text" name="search" id="" placeholder="Search"></input>
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </section>
            </header>
        )
    }
}

export default Header