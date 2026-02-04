const User2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-96">
      <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-12 shadow-2xl max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-300 mb-6">⚡</h1>
        
        <div className="bg-red-950 rounded-lg p-6 mb-6">
          <p className="text-sm text-gray-400 mb-2">Username</p>
          <p className="text-4xl font-bold text-red-300">Superman</p>
        </div>
        
        <p className="text-gray-300 text-lg">
          Saving the world, one day at a time! 🌍
        </p>
      </div>
    </div>
  )
}

export default User2
