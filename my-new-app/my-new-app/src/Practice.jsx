import React from "react";
class Practice extends React.Component{
    render(){
        return(
            <div>
                <h1>this is second class Component</h1>
            </div>
        )
        
        // return React.createElement('div', {style:{backgroundColor:"yellow"}}, React.createElement('h2',{style:{color:"green"}},'this is heading 2'));

    }
}

export default Practice;