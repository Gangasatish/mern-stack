import React from "react";
class CarComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>This car class component mode is {this.props.model}</h1>
            </div>
        )
    }
}

export default CarComponent