
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

import {createStore} from 'redux';


const action = {
  type: 'changeState',
  payload:{
    newState: 'New State'
  }
} 
function reducer( state, action){
  if(action.type == 'changeState'){
    return action.payload.newState;
  }

  if(action.type == 'notChanged'){
    return "1";
  }
}

const store = createStore(reducer); 

console.log(store.getState());

store.dispatch(action);

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

render(<Layout/>, document.getElementById('root'));
