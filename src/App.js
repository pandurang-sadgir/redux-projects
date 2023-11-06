import './App.css';
import Counter from './components/counter/counter';
import React from 'react'
import store from './Redux/store';
import { Provider } from 'react-redux';
import TodoList from './components/todoList/todoList';
// store.subscribe(()=>{
//   console.log(store.getState());
// })
export default function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <h1>Redux Projects</h1>
      <TodoList/>
      {/* <Counter/> */}

    </div>
    </Provider>
  )
}
