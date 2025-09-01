export default function MaintenancePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Site Under Maintenance
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We&apos;re currently working on improving our website. Please check back later.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Available Services</h2>
          <a 
            href="/register/event" 
            className="block w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
          >
            Event Registration
          </a>
        </div>
      </div>
    </div>
  )
}
