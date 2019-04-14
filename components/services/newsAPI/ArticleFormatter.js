import React, { Component } from 'react';
import { render } from 'react-dom';
import {router, Route, IndexRoute, hashHistory} from "react-router"; 
import axios from 'axios';
import NewsAPI from '../newsAPI/NewsAPI';
export default class ArticleFormatter extends Component {

 constructor() {
    super();
    this.state = {search: ""};

}
componentDidMount()
{
}

 
displayDefaultArticles(){
    const posted = this.state.posted;
    const displaypostshtml = 0;
    if (displaypostshtml == 0)
    {
      displaypostshtml =  <div class="loader">Loading...</div>; 
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
}


render()
{
  this.displayDefaultArticles();
  
  return(<div>ARTICLE FORMATTER </div>);

}

}