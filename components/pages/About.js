import React, { Component } from 'react';
import { render } from 'react-dom';

import Rainbow from '../hoc/Rainbow';

class About extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Water'
    };
  }

  render() {
    return (
      <div>
      <div className ="container">
        <h4 className="center">About</h4>
      </div>

      <p className="band col-sm-8" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

      <button type="button " className="waves-effect waves-light btn-large"><i class="material-icons left">cloud</i>Checking it   <i class="material-icons">add</i>
</button>
    </div>
    );
  }
}

export default About