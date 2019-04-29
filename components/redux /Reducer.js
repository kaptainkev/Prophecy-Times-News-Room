import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';



const action = {
  type: 'products',
  waterLog: 'Meg'
}



function productsReducer( state = [], action){
 switch(action.type){
   case 'updateUser':
    return 'NewsAPI';
 }
 return state;
}

function userReducer(state =  '' , {type, payload} ){
  switch(type){
    case 'updateUser':
      return payload;
  }
  return state;
}

const allReducers  = combineReducers({
  products: productsReducer,
  user: userReducer
})

const state = {
  products: [{name: 'iphone'}, [{ state: 'ME'}] ],
  user: 'Michael'
}

const devTools = window.devToolsExtension && window.devToolsExtension();
const store = createStore(allReducers, state, devTools ); 



store.dispatch(action);
console.log(store.getState());