import React from "react";
import ComponentY from './ComponentY'
const ComponentX = ()=>{
    return(
        <div>
            <h2>This is the component X</h2>
            <ComponentY/>
        </div>
    )
}
export default ComponentX