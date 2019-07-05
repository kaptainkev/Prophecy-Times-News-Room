import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';



const action = {
  type: 'searchQuery',
  waterLog: 'Meg'
}


const ArticlesReducer = (state = {}, action) =>
{
  return state;
};

const BookReducer = (state = {}, action) =>
{
  return state;
};



const allReducers  = combineReducers({
  searchQuery: ArticlesReducer,
  book: BookReducer
})

const state = {
  searchQuery: [
    {name: 'pope'}, 
    [{ date: ''} ] ],
  book: 'Michael'
}

const devTools = window.devToolsExtension && window.devToolsExtension();
const store = createStore(allReducers, state, devTools ); 



store.dispatch(action);
console.log(store.getState());

export default allReducers;