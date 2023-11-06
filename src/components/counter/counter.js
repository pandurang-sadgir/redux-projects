import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../../Redux/actions/actions';


export default function Counter() {
    const state = useSelector((entireReduxStore)=>{
        return entireReduxStore.counter;
        //useSelector holds entire redux store ,It Lets our react component to get data from redux store
    
    });
    const dispatch = useDispatch();
// The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

    function handleIncrement(){
        dispatch(increment());    
    }
    function handleDecrement(){
        dispatch(decrement());    


    }
  return (
    <>
    <section className='counter'>
        <div className='counterDiv'>
        <h1 className='counterH1'>Counter Application</h1>
        <p> {state}</p>
            <Button onClick={handleIncrement}>
                Increment
            </Button>
            <Button onClick={handleDecrement}>
                Decrement
            </Button>
        </div>
    </section>

    </>
    
  )
}


 function Button({children,onClick}) {
  return (
      <button className='btn' onClick={onClick}>
        {children}
      </button>
  )
}

