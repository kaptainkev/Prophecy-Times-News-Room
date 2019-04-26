
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

import {combineReducers, createStore} from 'redux';

const action = {
  type: 'products',
  waterLog: 'Meg'
}

function productsReducer( state = [], action){
 if(action.type == 'products'){
   return 'YES';
 }
 return state;
}

function userReducer(state =  '', action ){
  return state;
}

const allReducers  = combineReducers({
  products: productsReducer,
  user: userReducer
})

const state = {
  products: [{name: 'iphone'}],
  user: 'Michael'
}
const store = createStore(allReducers, state); 


store.dispatch(action);

console.log(store.getState());

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
