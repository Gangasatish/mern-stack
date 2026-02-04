import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Post from './Components/Post'
import User from './Components/User'
import User1 from './Components/User1'
import User2 from './Components/User2'

function App() {
  return (
    <Router>
      <div className="app-container min-h-screen">
        {/* Navigation */}
        <nav className="nav-container sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <h1 className="text-2xl font-bold text-blue-400">Assignment App</h1>
              <div className="flex space-x-8">
                <Link to="/posts" className="nav-link font-semibold hover:text-blue-400">
                  Posts
                </Link>
                <Link to="/user/apple/iphone" className="nav-link font-semibold hover:text-blue-400">
                  User (Apple/iPhone)
                </Link>
                <Link to="/user1" className="nav-link font-semibold hover:text-blue-400">
                  User1
                </Link>
                <Link to="/user2" className="nav-link font-semibold hover:text-blue-400">
                  User2
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Route Components */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/posts" element={<Post />} />
            <Route path="/user/:brand/:product" element={<User />} />
            <Route path="/user1" element={<User1 />} />
            <Route path="/user2" element={<User2 />} />
            <Route 
              path="/" 
              element={
                <div className="text-center py-20">
                  <h2 className="text-5xl font-bold mb-4 text-blue-400">Welcome! 👋</h2>
                  <p className="text-xl text-gray-400">Use the navigation menu above to explore different components</p>
                </div>
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
