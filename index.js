
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Router, Route, IndexRoute} from "react-router"; 
import './style.css';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import BookView from './components/pages/BookView';
import ArticleView from './components/pages/ArticleView';


import {Provider} from 'react-redux';
import { createStore} from 'redux';
import allReducers from './components/redux/Reducer';


const store = createStore(allReducers);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


   
  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        
        <p>
        </p>
      </div>
    );
  }
}

render(
  <Provider store = {store}>
  <Layout/>
  </Provider>, document.getElementById('root'));
