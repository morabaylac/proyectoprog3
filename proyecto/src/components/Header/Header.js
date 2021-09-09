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
                <h1>Play</h1>
                <section>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                </section>
            </header>
        )
    }
}

export default Header