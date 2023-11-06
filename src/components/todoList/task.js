import React, { useState } from 'react'
import './todo.css';
export default function Task({data,onEdit,onDelete}) {
const [isEditing,setEditing] = useState(false);
// const element  = {
//     title:'value'
// }
let todoContent;
// hold toggle content
if(isEditing){
    todoContent = (
        <>
        <input
          className='item'
          defaultValue={data.data}
          onChange={e => {
            onEdit({
              ...data,
              data:e.target.value
            });
          }} />
        <button className="btn"  onClick={()=>{setEditing(false)}}>
          Save
        </button>
        </>
    )
}else{
    todoContent = (
        <>
          <span className='list'>{data.data}</span>
          <button className="btn" onClick={()=>{setEditing(true)}}>
            Edit
          </button>
        </>
      );

}
  return (
    // Note this code part is iterate by map.
    <div>
    <input
        type="checkbox"
        checked={true}
        onChange={e => {;
        }}
      />
      
      {todoContent}
      <button className="btn" onClick={()=>{onDelete(data.id)}}>
        Delete
      </button>
    </div>
  )
}
