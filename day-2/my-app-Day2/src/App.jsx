import './App.css'
import { useState } from 'react'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="pt-14 pb-12 text-center">
      <Navbar />
      <Content name='Iron-Man' alias='Iron mamu' age='31'/>
      <h2 className='text-5xl text-center font-bold'>{count}</h2>
      <div className=' flex justify-center items-center'><button className='px-5 py-2 border rounded-2xl bg-green-500 text-white hover:bg-green-300 transition'
           onClick={() => {setCount(count+1)}}>Increment</button></div>
      <button
          className="px-5 py-2 border rounded-2xl bg-red-500 text-white hover:bg-red-400 transition"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          className="px-5 py-2 border rounded-2xl bg-gray-500 text-white hover:bg-gray-400 transition"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      <Footer />
    </div>
  )
}

export default App
