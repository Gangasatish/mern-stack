import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import User from './Pages/User'
import Post from './Pages/Post'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/products/:brand/:product',
      element: <User />
    },
    // {
    //   path: '/post/:id',
    //   element: <Post />
    // },
    {
      path: '/posts',
      element: <Post />
    }
    
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
