import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Link from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from "./components/pages/Navbar";
import Contact from './components/pages/Contact';
import BookView from './components/pages/BookView';
import About from './components/pages/About';
import Home from './components/pages/Home';


import ArticleView from './components/pages/ArticleView';

import Temp from './components/pages/Temp';

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Water'
    };
  }

  render() {
   return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Temp/>

        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/article' component={ArticleView}/>

      </div>
      </BrowserRouter>
    );
  }
}