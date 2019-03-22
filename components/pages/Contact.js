import React, { Component } from 'react';
import { render } from 'react-dom';


class Contact extends Component {
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
        <h4 className="center"> Historical Timelines</h4>
      </div>

      <p>TESTING IT NOW</p>
      <button type="button" className="btn">Button</button>


      
  <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>
    </div>
 

 
    );
  }
}

export default Contact;

