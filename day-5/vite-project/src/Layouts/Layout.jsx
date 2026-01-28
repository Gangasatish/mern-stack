import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    const hero = {
        name: "Bruce Wayne",
        age: "32",
        organization: "Justice League Alliance",
        alias: "Batman"
    }
    return (
    
    <>
        <Header />
            <Outlet context={hero}/>
        <Footer />
    </>
  )
}

export default Layout