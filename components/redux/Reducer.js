import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';



const action = {
  type: 'articleInfo',
  waterLog: 'Meg'
}







const allReducers  = combineReducers({
  articleInfo: ArticlesReducer,
  user: userReducer
})

const state = {
  articleInfo: [{name: 'iphone'}, [{ date: ''}] ],
  user: 'Michael'
}

const devTools = window.devToolsExtension && window.devToolsExtension();
const store = createStore(allReducers, state, devTools ); 



store.dispatch(action);
console.log(store.getState());