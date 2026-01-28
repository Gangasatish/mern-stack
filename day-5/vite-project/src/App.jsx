// import { useState } from 'react'
// import {useRef} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css'
import Layout from './Layouts/Layout';

function App() {
  
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
      ]

    },
    
  ])
  // useRef is a react hook that lets us manipulate DOM elements directly and store mutable values that do not cause re-render.
  // An uncontrolled component is an element that manages it's own state in the DOM and not in React.
  // const nameRef = useRef();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // A controlled component is an element whose value is controlled bt React state.
  // const [myForm, setMyForm] = useState({uname: "", uage: ""});
  // const handleName = (e) => {
  //   setName(e.target.value);
  //   console.log(`Name: ${name}`);
  // }
  // const handleAge = (e) => {
  //   setAge(e.target.value);
  //   console.log(`Age: ${age}`);
  // }
  // const handleChange = (e) => {
  //   setMyForm({...myForm, [e.target.name]: e.target.value});
  // }
  // const handleSubmit = () => {
  //   console.log(`Name: ${myForm.uname} Age: ${myForm.uage}`);
    
  // }
  // const onDisplay = () => {
  //   alert(`Name: ${nameRef.current.value}`)
  // }
  
  
  
  return (
    <>
      {/* <input type="text" id='uname' value={name} onChange={handleName}/><br />
      <input type="text" id='uage' value={age} onChange={handleAge}/> */}
      {/* <input type="text" name='uname' value={myForm.uname} onChange={handleChange}/><br />
      <input type="text" name='uage' value={myForm.uage} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button> */}
      {/* <input type="text" ref={nameRef} />
      <button onClick={onDisplay}>Display</button> */}
      <RouterProvider router={routes} />
    </>
  )
}

export default App
