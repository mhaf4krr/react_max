let initialState = {
    counter:0
}

const rootReducer = (prevState = initialState,action) =>{
    if(action.type==="INC_COUNTER"){
        return {
            
            counter:prevState.counter+1
        }

    }

    if(action.type ==="RESET_COUNTER"){
        return {
       
            counter:0
        }
    }

    return prevState
    
}

export default rootReducer