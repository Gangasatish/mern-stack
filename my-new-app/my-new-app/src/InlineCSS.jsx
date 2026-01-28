import React from "react";

function InlineCSS(){
    const myStyle ={
        color : "gold",
        backgroundColor : "red",
        border : "2px solid"
    }
    return(
        <div style={myStyle}>
            <h2>This is an example of Inline CSS</h2>
        </div>
    )
}

export default InlineCSS