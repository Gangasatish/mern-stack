import React from "react";
class EventHandling1 extends React.Component{
    handleEvent(){
        return alert("HEY")
    }
    render(){
        return(
            <div>
                <h1>Event Handle</h1>
                <button type="submit" onClick={this.handleEvent}>click</button>
            </div>
        )
    }
}

export default EventHandling1