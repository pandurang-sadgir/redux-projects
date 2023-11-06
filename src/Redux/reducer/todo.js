const InitialState = {
    alltodoList:[]
}

// const [item,setItem] = useState()
export const todoReducer =(state=InitialState,action)=>{
    switch (action.type) {
        case "ADD_ITEM":{
            const {id,data} =action.payload 
            return {
                ...state,// this is for overwrite
                alltodoList:[ // new list with previous data
                    ...state.alltodoList,
                    {
                     id:id,
                     data:data
                    // ...action.payload
                    }
                ]
            }
        }

        case 'REMOVE_ITEM':{
            const NewList = state.alltodoList.filter((ele)=>{
                                return ele.id !==action.id });
                                // id is not elquals to delete id only those id return in new array.
        // Note:This filter method only return those items which are not equals to delete items.
            return {
                ...state,
                alltodoList:NewList
            };
        }

        case 'EDIT_ITEM':{
            const NewList = state.alltodoList.map((ele)=>{
                if(ele.id === action.payload.id){
                    return action.payload;
                }else{
                    return ele;
                }
            });
            return {
                ...state,
                alltodoList:NewList
            };
        }

        case 'REMOVE_ALL_ITEMS':{
            return InitialState;
        }
        default:
            return InitialState;
    }

}


