import React, {Component} from 'react';
import './footer.css'

class Footer extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <footer className="desktop">
            <div className="logo">
                <img src="/assets/images/logo.png" className="logo-footer" alt="logo" />
            </div>
            <ul className="nombres">
                    <li>martina cappelloni</li>
                    <li>lola marinelli</li>
                    <li>mora baylac</li>
            </ul>
            <div className="tmdb">
               <a href="https://www.themoviedb.org/?language=es"><img src="/assets/images/tmdb.png" className="logo-tmdb" alt="tmdb" /></a> 
            </div>
        </footer>
        )
    }
}

export default Footer