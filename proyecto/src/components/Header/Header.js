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
                <img src="/assets/images/logo.png" class="logo-header uk-animation-scale-up" alt="logo" />
                <section>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                </section>
            </header>
        )
    }
}

export default Header