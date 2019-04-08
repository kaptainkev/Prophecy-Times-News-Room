import React from 'react'
import { Button } from 'reactstrap';
import {Link, NavLink, withRouter} from 'react-router-dom';
import { GiTorch } from 'react-icons/gi';



const Navbar = (props) =>{

  //console.log(props);
  // setTimeout( ()=> {props.history.push('/about')} ,2000);

  return (
    <div>
     <nav className="navbarcontainer" >
      <div className = "container">
        <div className="glyphicon glyphicon-plane"></div>
          <Link  to="/" className="brand-logo left font">
          <p className="PNews ">P-NEWS 
            <i class="fa fa-newspaper-o shadowLogo right "></i>
          </p>

         </Link>
          <ul className="right">




            <li><NavLink className="NavFont" to="/about">About <i className="material-icons right">chrome_reader_mode
</i></NavLink></li>
            <li><Link className="NavFont" to="/contact">Timeline <i className="material-icons right  ">timelapse</i></Link></li>
            <li><Link className="NavFont" to="/article">News Room <i className="material-icons right">cast_connected</i></Link></li>

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
  
</div>

<nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>





    </div>
  )

}

export default withRouter(Navbar);