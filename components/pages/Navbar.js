import React from 'react'
import { Button } from 'reactstrap';
import {Link, NavLink, withRouter} from 'react-router-dom';




const Navbar = (props) =>{

  //console.log(props);
  // setTimeout( ()=> {props.history.push('/about')} ,2000);

  return (
    <div>
    
     <nav className="navbarcontainer">
      <div className = "container">
        <div className="glyphicon glyphicon-plane"></div>
          <ul className="right">


                   <li><Link to="/" className="brand-logo left"><img id="logo" src ="images/pNewsRoom.png"/></Link></li>

            <li><NavLink to="/about">About</NavLink></li>
            <li><Link to="/contact">Timeline</Link></li>
            <li><Link to="/article">News Room</Link></li>

          </ul>
        </div>
    </nav>


<div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">



  <a class="navbar-brand">Navbar</a>
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    </div>
  )

}

export default withRouter(Navbar);