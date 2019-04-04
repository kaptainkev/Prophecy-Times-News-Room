import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../CSS/articles.css';
import Logo from '../pages/Logo';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Water'
    };
  }

  render() {
    return (
      <div >
      


     <header>
    <section class="header-content">
      <img src="https://cssanimation.rocks/levelup/public/images/rocky-dashed.svg" class="rocky-dashed"/>
    <h1 class="header-title TrebuchetFont">Your Resource for Prophecy information</h1>
    <h3 class="header-subtitle SubFont"> Useful for studying current events</h3>
    <p class="header-button"><a href="http://courses.cssanimation.rocks/p/level-up" class="btn btn-outline-success ">Get started today</a></p>
  </section>
  </header>

         
    <Logo/>

    </div>
 


    );
  }
}

export default Home;