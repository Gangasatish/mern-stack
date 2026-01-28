import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import ThemeButton from './Components/ThemeButton';
function App() {
  return (
    <>
    <ThemeProvider>
      <Navbar />
      <Header />
      <ThemeButton />
    </ThemeProvider>
    </>
  )
}

export default App
