
import React from "react";
class DashboardClassComponent extends React.Component{
    constructor(){
        super();
        this.state={
            color: "Red",
            year: 2000
        }
    }
    changeState =()=>{
        this.setState((prevState)=>({
            year:prevState.year+1
        }))
    }
    changeYear = ()=>{
        this.setState((curState)=>({
            year:curState.year-1
        }))
    }
    render(){ 
        return(
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <h1>I was in year {this.state.year}</h1>
                <button onClick={this.changeState}>change Year</button>
                <button onClick={this.changeYear}>decrease year</button>
            </div>
        )
    }
}

export default DashboardClassComponent;