import React from "react"
class Counter extends React.Component{
    state = {counter: 1}
    decrhandler=()=>{
        this.setState({counter: this.state.counter -1})
    }
    incrhandler=()=>{
        this.setState({ counter: this.state.counter +1})
    }
        render(){
            return<div>
                
                <h1>Counter Component</h1>
                <button onClick={this.decrhandler}>-</button>
                {this.state.counter}
                <button onClick={this.incrhandler}>+</button>
            </div>
        }

}
export default Counter