
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


const updateUserAction  = {type: 'updateUser',
                           payload: {user:'John'}}

function productsReducer( state = [], action){
 switch(action.type){
   case 'updateUser':
    return 'NewsAPI';
 }
 return state;
}

function userReducer(state =  '' , action){
  switch(action.type){
    case 'updateUser':
      return action.payload;
  }
  return state;
}

const allReducers  = combineReducers({
  products: productsReducer,
  user: userReducer
})

const state = {
  products: [{name: 'iphone'}, [{ state: 'ME'}] ],
  user: 'Michael'
}

const devTools = window.devToolsExtension && window.devToolsExtension();
const store = createStore(allReducers, state, devTools ); 



store.dispatch(action);
console.log(store.getState());

store.dispatch(updateUserAction);

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
