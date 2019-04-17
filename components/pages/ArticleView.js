import React, { Component } from 'react';
import { render } from 'react-dom';
import {router, Route, IndexRoute, hashHistory} from "react-router"; 
import axios from 'axios';

import '../../CSS/articles.css';

import ArticleFormatter from '../services/newsAPI/ArticleFormatter';

export default class ArticleView extends Component {
  constructor() {
    super();
    this.state = {search: ""};

}


componentDidMount()
{
    //this.GetNewsAPIData("");
}

GetNewsAPIData(searchVal)
{
  //axios.get('https://jsonplaceholder.typicode.com/todos/1/posts').then(res => {
  //console.log(res)
  //this.setState({ posts: res.data.slice(0,10) })
this.setState({search: searchVal});

 var accessUrl = 'https://newsapi.org/v2/everything?q=' + searchVal + '&domains=wsj.com&apiKey=f129749be7d6479c802c840bd952da97';
 //accessUrl = "'https://newsapi.org/v2";
  axios({
        method: 'get',
        url: accessUrl,
        
      })
    .then(function (data) {
      //console.log('Success ' + JSON.stringify(data))
      this.setState({posted: data});
      console.log(this.state.posted);

    }.bind(this))
    .catch(function (error) {
      console.log('Error ' + error.message)
    });       

}


handleChange(e){
  const value = e.target.value;
  this.GetNewsAPIData(value);
}

  render() {
    const posted = this.state.posted;
    const displaypostshtml = 0;
    if (displaypostshtml == 0)
    {
      //displaypostshtml =  <div class="loader">Loading...</div>; 
      if(posted != undefined)
      {
        displaypostshtml = <div><p>No Results for {this.state.search}</p></div>
      }
    }

    if(posted != undefined)
    {
      const articles = posted.data.articles;
      if(articles.length > 0) 
      { 

      displaypostshtml = articles.map( posts => 
    
      
      /*if(index == 0)
      {
          console.log("TEST");
      return( <div className="posts card" key={posts.author}>
              <div>First Entry:</div>
              <div className="card-content">
                <span className="card-title">{posts.description}</span>
                <p>{posts.content}</p>
              </div>

              </div> )      
    }*/
      {
        var index = articles.findIndex(k => k == posts);
       
        return( <div className="posts card" key={posts.author+index}>
              <div className="card-content">
                <span className="card-title">{posts.description}</span>
                <p>{posts.content}</p>
              </div>

              </div> )


   
    })
 } 

 
}


return (
  <div>    
  <div class="band col-sm-4">
     <p>Categories</p>
    
    <div></div>
   
   
  </div>



    <div class="band col-sm-8">

             <input onChange={this.handleChange.bind(this)} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>

    </div>    



 <div class="container">
              <div class="row">
                <div class="col-xs-12 ">
                  <nav>
                    <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                      <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
                      <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</a>
                      <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                      <a class="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">About</a>
                    </div>
                  </nav>
                  <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                     
               
                <br/>
                <ArticleFormatter/>

                <input onChange={this.handleChange.bind(this)} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    

     {displaypostshtml}
     
                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                     
                    </div>
                    <div class="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                 
                    </div>
                  </div>
                
                </div>
              </div>
        </div>

    

  
      </div>
    );
  }
}