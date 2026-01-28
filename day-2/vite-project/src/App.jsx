import './App.css'
import {useState} from 'react';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
function App() {
  const [isVisible, setIsVisible] = useState(false);
  // useEffect is a hook that causes side-effects in the app.


  // useRef
//   let number = useRef(0);
// useEffect(()=>{
//   number.current += 1;
//   console.log(`The number is ${number.current}`);
// },);


  //case 1: Runs only on first render.
  // useEffect(() => {
  //   console.log("This is the result of useEffect");
  // }, []);

  //case 2: runs when the variable(s) inside the array changes. 
  // useEffect(() => {
  //   alert("Count has been changed");
  // }, [count]);
  
  // case 3: runs on every render
  // useEffect(() => {
  //   alert("I will appear everytime whenever there is a re-render.");
  // },);
  
  return (
    <>
      {/* <Navbar />
      <Main alias="Batman" name="Bruce Wayne" age="31"/>
      <h2 className='text-5xl text-center font-bold'>{count}</h2>
      <div className='btnDiv'>
        <button className='btnRed' onClick={()=>{setCount(0)}}>Reset</button>

        <button className='btnGreen' onClick={()=>{setCount(count+1)}}>Increment</button>

        <button className='btnYellow' onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>

      <Footer /> */}

      {/* Conditional rendering */}
      {!isVisible && <div className='text-center font-bold text-5xl text-green-600'>Why so Serious! - Joker</div>}

      {/* Conditional rendering using ternary operator */}
      {isVisible ? <div className=' text-center font-bold text-5xl text-yellow-600'>I am BatMan</div>: <div className='text-3xl text-center'>There is nothing to show</div>}
      <div className='flex justify-center items-center'>
        <button className='btnRed' onClick={()=>{setIsVisible(!isVisible)}}>Click To Reveal</button>
      </div>
      {/* Assignment - Make a normal login/logout function using useState and conditional rendering. */}
    </>
  )
}

export default App
