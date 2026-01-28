import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // Link
    // - Buttons
    // - Cards
    // - Redirects

    // NavLink
    // - Navigation Bar
    // - SideBar
    // - Tabs
    // - Menu
  return (
    <nav>
        <ul className='navUl'>
            <li className='navItems'><NavLink to="/">Home</NavLink></li>
            <li className='navItems'><NavLink to="/contact">Contact Us</NavLink></li>
            <li className='navItems'><NavLink to="/about">About Us</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar