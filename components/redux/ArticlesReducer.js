
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';


function ArticlesReducer( state = [], action){
 switch(action.type){
   case 'updateUser':
    return 'NewsAPI';
 }
 return state;
}