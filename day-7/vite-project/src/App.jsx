import './App.css'
import Main from './Components/Main';
import { useSelector } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.value)
  return (
    <>
    <Main/>
      <h2>This count from store is {count}</h2>
    </>
  )
}

export default App
