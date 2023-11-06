import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addItem ,removeItem,removeAllItems,editItem} from '../../Redux/actions/todo';
import "./todo.css"
import Task from './task';


// component
export default function TodoList() {
const [item,setItem] = useState(''); 
const [edit,setEdit] = useState(true);
const state = useSelector((entireGlobalState)=>{
                            return entireGlobalState.todoReducer.alltodoList
                          });
  const dispatch = useDispatch();

  function handleAddItem(){
    dispatch(addItem(item));
    setItem('');
  }

  function handleDeleteItem(id){
    dispatch(removeItem(id));
  }


  function handleEditItem({id,data}){
    dispatch( editItem({id,data}));
  }
  
  function handleRemoveAllItem(){
    dispatch(removeAllItems());
    ;
  }

  return (
    <div>
      <h1>To-Do List </h1>
      <div className='container'>
        <input 
          type="text" 
          className='input'
          placeholder='Add Items' 
          onChange={(e)=>{setItem(e.target.value)}}
          value={item}
        />
          <Button onClick={handleAddItem}>Add</Button>
      </div> 

      {state.map((item)=>{
        return (
            <Task key={item.id} onDelete={handleDeleteItem} onEdit={handleEditItem}  data={item}/>
        )
      })}



      <Button onClick={handleRemoveAllItem}>Remove All</Button>

    </div>
  )
}


 function Button({children,onClick}) {
  return (
    <div>
      <button className="btn" onClick = {onClick} >
        {children}
      </button>
    </div>
  )
}

// function for generate unique id .
// const uid = function(){
//   return Date.now().toString(36) + Math.random().toString(36).substring(10);
// }
// console.log(uid())


        // {/* <div key={item.id} className='container'>
        //   <input type="text"   defaultValue={item.data} className='item'/>
        //   <Button onClick={handleEditItem}>Edit</Button>
        //   <Button onClick={()=>{handleDeleteItem(item.id)}}>Delete</Button>
        // </div> */}