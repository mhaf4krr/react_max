
const initialState = 0

const counterReducer = (prevState = initialState,action) =>{
    if(action.type==="INC_COUNTER"){
        return prevState+1
            
            
    }

    if(action.type ==="RESET_COUNTER"){
        return 0
    }

    return prevState
    
}

export default counterReducer