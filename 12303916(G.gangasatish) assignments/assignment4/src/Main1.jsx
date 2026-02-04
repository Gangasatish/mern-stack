import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, multiply, reset } from './Redux/counterSlice'

const Main1 = () => {
  const counter = useSelector((state) => state.counter.value)
  const [inputValue, setInputValue] = useState(0)
  const dispatch = useDispatch()

  return (
    <div className="relative flex justify-center items-center bg-black m-10 p-10 space-x-10 rounded-4xl overflow-hidden">

      <h1 className="text-4xl font-bold font-[Open_Sans] text-white z-10">
        Your count: {counter}
      </h1>

      <div className="z-10 space-x-10">

        <button
          className="rounded-2xl font-bold bg-orange-900 text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <button
          className="rounded-2xl font-bold bg-orange-900 text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          className="rounded-2xl font-bold bg-orange-900 text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>

        <button
          className="rounded-2xl font-bold bg-orange-900 text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>

        <input
          className="border border-red-900 rounded-2xl text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out bg-transparent"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
        />

        <button
          className="rounded-2xl font-bold bg-orange-900 text-white p-5 shadow-lg hover:shadow-red-900 duration-500 ease-in-out"
          onClick={() => dispatch(incrementByAmount(Number(inputValue)))}
        >
          +
        </button>

      </div>
    </div>
  )
}

export default Main1
