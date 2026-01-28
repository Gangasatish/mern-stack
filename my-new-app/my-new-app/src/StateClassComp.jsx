import React from "react";
class StateClassComp extends React.Component{
    constructor(){
        super();
        this.state={
            likes : 0
        }
    }
    changeState =()=>{
        this.setState((prevState)=>({
            likes:prevState.likes+1
        }))
    }
    render(){
        return(
            <div>
                <h1>likes are {this.state.likes}</h1>
                <button onClick={this.changeState}>like</button>
            </div>
        )
    }
}
export default StateClassComp