
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
<Layout/>, document.getElementById('root'));
