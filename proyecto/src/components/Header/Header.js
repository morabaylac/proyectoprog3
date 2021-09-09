import React, {Component} from 'react';
import './header.css'

class Header extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <header>
                <img src="/assets/images/logo.png" class="logo" alt="logo" />
                {/* <section>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-align-justify"></i>
                </section> */}
            </header>
        )
    }
}

export default Header