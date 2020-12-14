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

        case "LOGOUT_USER":
            window.localStorage.removeItem("x-auth-token")

            return{
                authenticated:false,
                token:null
            }

            default: return prevState
    }

}

export default authReducer