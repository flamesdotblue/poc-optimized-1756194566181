import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Vibe Coding Platform
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Your AI-generated application is ready!
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="text-6xl font-bold text-purple-600">
            {count}
          </div>
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Click me!
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
