import { useState, useEffect } from 'react'

const Post = () => {
  const [post, setPost] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
      if (!res.ok) throw new Error('Failed to fetch posts')
      const data = await res.json()
      setPost(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Error fetching posts:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="text-center">
          <div className="loading-spinner mb-4 mx-auto"></div>
          <p className="text-lg text-gray-400">Loading posts...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <div className="text-center">
          <p className="text-xl text-red-500">Error: {error}</p>
          <button
            onClick={fetchData}
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-5xl font-bold mb-2 text-blue-400">Posts</h1>
      <p className="text-gray-400 mb-8">Total posts: {post.length}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {post.map((item) => (
          <div
            key={item.id}
            className="post-card bg-[#1e293b] rounded-lg p-6 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-blue-400 bg-blue-900 px-3 py-1 rounded-full">
                ID: {item.id}
              </span>
              <span className="text-xs text-gray-500">Post by User {item.userId}</span>
            </div>
            
            <h2 className="text-xl font-bold text-white mb-3 line-clamp-2">
              {item.title}
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-4">
              <span className="font-semibold text-white">Body:</span> {item.body}
            </p>
            
            <div className="pt-4 border-t border-gray-700">
              <button className="m-0 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-lg text-sm font-semibold transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post
