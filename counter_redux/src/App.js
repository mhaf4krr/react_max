
import React from "react"
import Counter from "../src/containers/Counter/Counter"
import {connect} from "react-redux"

function App(props) {

  console.log(props)

let handleIncrement = ()=>{
  console.log("INC CLICKED")
  props.onIncrementCounter()
}

let handleReset = ()=>{
  console.log("RESET CLICKED")
  props.onReset()
}
  return (
    <div style={{margin:"auto auto"}}>
      <Counter counter={props.counter} increment={handleIncrement} reset={handleReset}/>
    </div>
  );
}




const mapStateToProps = (state) =>{
  console.log(state)
  return {
    counter:state.counter
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    onIncrementCounter: ()=>{
        dispatch({
          type:"INC_COUNTER"
        })      
    },

    onReset:()=>{
      dispatch({
        type:"RESET_COUNTER"
      })
    }
    
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
