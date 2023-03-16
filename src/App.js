import React from "react";
import Counter from './Counter'

class App extends React.Component{
    render(){
        return<div>
            <h1>
                App Component
            </h1>
            <hr />
            <Counter/>
        </div>
    }
}
export default App