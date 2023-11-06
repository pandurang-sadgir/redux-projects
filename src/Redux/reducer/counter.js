
const InitialState = 0;
export const counter = (state,action)=>{
    switch (action.type) {
        case 'INCREMENT': 
        {
            return state + 1;
        }

        case 'DECREMENT':{
            return state -1;
        } 
    
        default:
            return InitialState;
    }

}


// Reducer return current value of state to store, It might be updated
// Note state values are identified by reducer Name