import React from 'react'

const Navbar = () => {
  return (
    <dir>
        <nav className='fixed top-0 left-0 right-0 w-full h-14 bg-blue-600 text-white flex items-center justify-center'>
            <ul className="flex gap-10">
            <li className='hover:bg-blue-800 p-5 transition'>Home</li>
            <li className='hover:bg-blue-800 p-5 transition'>About us</li>
            <li className='hover:bg-blue-800 p-5 transition'>Contact us</li>
            </ul>
        </nav>
    </dir>
  )
}

export default Navbar
