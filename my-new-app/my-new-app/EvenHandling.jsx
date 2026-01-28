import React from "react";
const EventHandling = () =>{
    // const HandleEvent = () => alert("OK")
    function HandleEvent(){
        return alert("OK")
    }
    return(
        <div>
            <h1>Event Hndling</h1>
            <button type="click" onClick={HandleEvent}>Clicl here</button>
        </div>
    )
}

export default EventHandling