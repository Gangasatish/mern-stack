const User1 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-2xl p-12 shadow-2xl max-w-md text-center">
        <h1 className="text-6xl font-bold text-purple-300 mb-6">🦇</h1>
        
        <div className="bg-purple-950 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-400 mb-2">Username</p>
          <p className="text-4xl font-bold text-purple-300">Batman</p>
        </div>
        
        <p className="text-gray-300 text-lg">
          Ready to defend Gotham City! 🌙
        </p>
      </div>
    </div>
  )
}

export default User1
