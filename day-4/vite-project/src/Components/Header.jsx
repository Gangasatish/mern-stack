import { useTheme } from "../context/ThemeContext"

const Header = () => {
    const {theme} = useTheme();
  return (
    <>
        <h1 className="text-5xl text-center">Your Current Mode is {theme}</h1>
    </>
  )
}

export default Header