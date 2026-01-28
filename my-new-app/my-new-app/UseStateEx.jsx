// import React, { useState } from "react";

// const UseStateEx =()=>{
//     const [count,setCount]=useState(0);
//     const incre = () =>{
//         setCount((prevCount)=>{return (prevCount+1)});
//     }
//     const decre = () =>{
//         setCount(prevCount => prevCount-1);
//     }

//     return(
//         <div>
//             <h2>Count : {count}</h2>
//             <button onClick={incre}>Increment</button>
//             <button onClick={decre}>Decrement</button>
//         </div>
//     )
// }

// export default UseStateEx


//object
// import React, { useState } from "react";

// const UseStateEx = () =>{
//     const [led, setLed] = useState({
//         name: "fog bulb",
//         price: 100,
//         mfd: 10-9-2008,
//         exd: 7-6-2025
//     })
//     const changeState = () =>{
//         setLed(prevState =>{
//             return {price: 150}
//         })
//     }
//     return(
//         <div>
//             <h2>The led name is {led.name} and the price is {led.price}</h2>
//             <button onClick={changeState}>change</button>
//         </div>
//     )
// }
// export default UseStateEx


//array
import React, { useState } from "react";

const UseStateEx = () =>{
    const [led, setLed] = useState(["10","20","30"])
    const changeState = () =>{
        setLed(prevState =>{
            return [...prevState,40]
        })
    }
    return(
        <div>
            <h2>The array length is {led.join(', ')}</h2>
            <button  onClick={changeState}>change</button>
        </div>
    )
}
export default UseStateEx