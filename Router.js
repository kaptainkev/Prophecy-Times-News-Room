import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {router, Route, IndexRoute, hashHistory} from "react-router"; 
import './style.css';

export default class Router extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Reaction'
    };
  }



  createTable = () => {
    let table = []

    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 5; j++) {
        children.push(<td>{`Column ${j + 1}`}</td>)
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>)
    }
    return table
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>{this.createTable()}</p>
        {this.createTable()}

      </div>
    );
  }
}