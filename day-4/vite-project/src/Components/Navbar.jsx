import { useEffect } from "react"
const Navbar = () => {
    useEffect(() => {
      console.log("The Navbar has been mounted");
    
      return () => {
        console.log("Navbar has been unmounted");
      }
    }, [])
    
  return (

    <nav className=" h-18 flex justify-center items-center gap-10 list-none bg-blue-600 text-white text-2xl" >
        <li className="hover:bg-blue-800 p-5 transition">Home</li>
        <li className="hover:bg-blue-800 p-5 transition">Contact Us</li>
        <li className="hover:bg-blue-800 p-5 transition">About Us</li>
    </nav>
  )
}

export default Navbar