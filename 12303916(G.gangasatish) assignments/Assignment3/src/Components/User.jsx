import { useParams } from 'react-router-dom'

const User = () => {
  const { brand, product } = useParams()

  return (
    <div className="flex flex-col items-center justify-center min-h-96 text-center">
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 shadow-2xl max-w-md">
        <h1 className="text-5xl font-bold text-blue-300 mb-6">🔍</h1>
        
        <h2 className="text-4xl font-bold text-white mb-6">
          User Search Result
        </h2>
        
        <div className="space-y-4 text-left">
          <div className="bg-blue-950 rounded-lg p-4">
            <p className="text-sm text-gray-400">Brand</p>
            <p className="text-2xl font-bold text-blue-300 capitalize">{brand}</p>
          </div>
          
          <div className="bg-blue-950 rounded-lg p-4">
            <p className="text-sm text-gray-400">Product</p>
            <p className="text-2xl font-bold text-blue-300 capitalize">{product}</p>
          </div>
        </div>
        
        <p className="mt-8 text-xl text-gray-300">
          You have been searching for{' '}
          <span className="font-bold text-blue-300">{brand}</span> <span className="font-bold text-blue-300">{product}</span>
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700 w-full text-center">
        <p className="text-gray-400">
          Try different combinations in the URL like:<br />
          <code className="text-blue-400 text-sm">/user/samsung/galaxy</code>
        </p>
      </div>
    </div>
  )
}

export default User
