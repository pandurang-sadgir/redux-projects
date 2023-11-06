// These actiona return object and passed to a reducer
export const addItem = (data)=>{
    return {
        type:'ADD_ITEM',
        payload:{
            id:Date.now().toString(36) + Math.random().toString(36).substring(10),
            data:data,
        }
    }
}

export const removeItem = (id)=>{
    return {
        type:'REMOVE_ITEM',
        id:id
    }
}

export const editItem = ({id,data})=>{
    return {
        type:'EDIT_ITEM',
        payload:{
            id:id,
            data:data
        }
    }
}

export const removeAllItems = ()=>{
    return {
        type:'REMOVE_ALL_ITEMS'
    }
}

