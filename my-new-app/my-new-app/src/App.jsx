import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './APP.css'
import UserProfile from './UserProfile';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My App</h1>
      
      {/* 1. Example with a Premium User */}
      <UserProfile 
        name="Alice Johnson" 
        age={28} 
        isPremium={true} 
      />

      <br />

      {/* 2. Example with a Regular User */}
      <UserProfile 
        name="Bob Smith" 
        age={34} 
        isPremium={false} 
      />
    </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }





// function App(){
//   return(
//     <div>
//       <h3>this is my first App</h3>
//     </div>
//   )
// }

export default App;

// export const App = () => {
//   return(
//     <div>
//       <h3>This is my first App using arrow function</h3>
//     </div>
//   )
// }