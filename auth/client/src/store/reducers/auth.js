const initialState= {
    authenticated:false,
    token:null
}

const authReducer = (prevState=initialState,action) =>{
    switch(action.type){
        case "STORE_AUTH_TOKEN":

            window.localStorage.setItem("x-auth-token",action.payload)

            return {
                authenticated:true,
                token:action.payload
            }

            default: return prevState
    }

}

export default authReducer