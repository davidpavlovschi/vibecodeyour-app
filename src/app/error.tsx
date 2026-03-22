'use client'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-400 mb-6">{error.message || 'An unexpected error occurred.'}</p>
        <button onClick={reset} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          Try again
        </button>
      </div>
    </div>
  )
}
