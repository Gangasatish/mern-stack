//Lazy Loading - is a concept of loading a component only when it is needed, or whenever it is in our view point, instead of loading everything at once.

/*Advantages
1. It improves our performance.
2. Reduce initial bundle size.
3. Make our app faster.
*/

/*
When to use Lazy Loading?
1. Large Pages
2. Dashboard Modules
3. Admin Panels
4. Routes
5. Heavy charts
*/

import { useState, lazy, Suspense} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// dynamically imports the component
const Dashboard = lazy(()=>
  new Promise((resolve)=>{
    setTimeout(() => {
      resolve(import('./Pages/Dashboard'));
    }, 3000);
  })
);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs m-5">
        Click on the Vite and React logos to learn more
      </p>

      {/* shows a fallback UI while component loads... */}
      {/* Lazy components must be wrapped in <Suspense></Suspense> */}
      <Suspense fallback={<h1>Dashboard is Loading...</h1>}>
        <Dashboard />
      </Suspense>
    </>
  )
}

export default App
