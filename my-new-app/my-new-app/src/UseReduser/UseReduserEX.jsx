import React, { useReducer, useState } from 'react'

// Define the reducer function
const reducerCount = (state, action) => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return initialCountstate; // Make sure initialCountstate is accessible here
      default:
        return state;
    }
  };
  
  // Define the initial state
  const initialCountstate = 0;
  
  const UseReducerExample = () => {
      // Now reducerCount and initialCountstate are defined
      const [count, dispatchCountState] = useReducer(reducerCount, initialCountstate);
    return (
      <div>
        <h2>Count is: {count}</h2>
        <button onClick={()=> dispatchCountState('increment')}>Increment</button>
        <button onClick={()=> dispatchCountState('decrement')}>Decrement</button>
        <button onClick={()=> dispatchCountState('reset')}>Reset</button>
      </div>
    )
  }
  
  export default UseReducerExample
  
