import React, { Component } from 'react';
import { render } from 'react-dom';
import {router, Route, IndexRoute, hashHistory} from "react-router"; 

export default class BookView extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Water'
    };
  }

  render() {
    return (
      <div>
        
        <p>
        </p>
    
      </div>
    );
  }
}