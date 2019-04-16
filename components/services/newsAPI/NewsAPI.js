import React, { Component } from 'react';
import { render } from 'react-dom';
import {router, Route, IndexRoute, hashHistory} from "react-router"; 
import axios from 'axios';

 class NewsAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {search: props.searchVal,
                  domain: "",
                  accessUrl: "",
                  };

}


componentDidMount()
{
   this.GetNewsAPIData(this.props.searchVal);

}


 SetAccessUrl()
{
  return 'https://newsapi.org/v2/everything?q=' + this.state.searchVal + '&domains=' + this.domain + '&apiKey=f129749be7d6479c802c840bd952da97';
  
}

GetNewsAPIData(searchVal)
{
  //axios.get('https://jsonplaceholder.typicode.com/todos/1/posts').then(res => {
  //console.log(res)
  //this.setState({ posts: res.data.slice(0,10) })
this.setState({search: searchVal});
this.setState({domain: "wsj.com"});

 var accessUrl = this.SetAccessUrl();
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



render(){


  return(
    
    <div> {this.props.searchVal} </div>
  );
}





}
export default NewsAPI;

