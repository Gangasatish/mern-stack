import { useTheme } from "../context/ThemeContext"

const ThemeButton = () => {
    const {toggleTheme} = useTheme()
  return (
    <div className='text-center'>
        <button className='px-5 py-2 border rounded-2xl' onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeButton