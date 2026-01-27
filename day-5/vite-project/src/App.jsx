// import {useState} from 'react';
import {useRef} from 'react';
import './App.css'

function App() {
// useref is a react hook that lets us manipulate dom elements directly and store mutuable values that do not cause re render when updated.
  const nameRef = useRef();
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");

  // a controlled component is an element whose value is controlled by react state.
  // const [myForm, setMyFORM] = useState({uname: "", uage: ""});
  // const handleName = (e) => {
  //    setName(e.target.value);
  //    console.log(name);
  // }
  // const handleAge = (e) => {
  //    setAge(e.target.value);
  //    console.log(`age: ${age}`);
  // }
  // const handleChange = (e) => {
  //   setMyFORM({...myForm, [e.target.name]: e.target.value});
  //   console.log(myForm);
  // }
  // const handlesubmit = () => {
  //   console.log(`Name: ${myForm.uname} Age: ${myForm.uage}`);
  // }
  const onDisplay = () => {
    alert(`Name: ${nameRef.current.value}`);
  }
  return (
    <>
   {/* <input type="text" id='uname' value={name} onChange={handleName} /> */}
   {/* <input type="text" id='uage' value={age} onChange={handleAge} /> */}
    {/* <input type="text" name='uname' value={myForm.uname} onChange={handleChange} /><br />
    <input type="text" name='uage' value={myForm.uage} onChange={handleChange} />
    <button onclick={handlesubmit}>Submit</button> */}
    <input type="text" ref={nameRef} />
    <button onclick={onDisplay}>Display</button>
    </>
  )
}


export default App
