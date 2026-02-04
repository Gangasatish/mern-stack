import './App.css'
// import { useState, useEffect } from 'react'
// import {useRef} from 'react'
function App() {
  // const [count, setCount] = useState(0)
  // const [count2, setCount2] = useState(0)
  // useEffect(() => {
  //   alert("This will run in the beginning");
  
  // }, [])
  // useEffect - API calls, subscription, timers, DOM
  // useEffect(() => {
  //   alert("Count has changed");
  //   const timer = setTimeout(()=>{
  //     console.log("API is requested")
  //   }, 1000)
  //   // cleanup function
  //   return(()=>{
  //     clearTimeout(timer);
  //   })
  // }, [count, count2]);
// [] - run only once
// [state] - run on update
// no array - run on every render
  // const count = useRef()

  // useRef - refecence a value without re-render
  // access DOM elements
  // Store values without causing our app to re-render
  // useRef - for uncontrolled components
  // useState - for controlled components
  return (
    <>
    <div>
      {/* <h1>The count is {count.current.value}</h1>
      <button onClick={()=>{count.current += count.current.value+1}
      }>+</button> */}
    </div>
    {/* <div>
      <h1>The count is {count}</h1>
      <button onClick={() => {setCount(count+1)}}>+</button>
    </div>
    <div>
      <h1>The count is {count2}</h1>
      <button onClick={() => {setCount2(count2+1)}}>+</button>
    </div> */}

    </>
  )
}

export default App
