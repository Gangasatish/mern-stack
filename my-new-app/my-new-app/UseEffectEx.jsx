
import React, { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red")
    useEffect(()=>{
        console.log("component mounted")
    },[count])

    const increfunction = () => {
        setCount(prev => prev+1)
    }
    const changeColor = () =>{
        setColor(()=>"white");
    }
    return(
        <div>
            <h2>Count: {count}</h2>
            <h2>color: {color}</h2>
            <button onClick={increfunction}>increase</button>
            <button onClick={changeColor}> changeColor</button>
        </div>
    )
}
export default UseEffectEx
