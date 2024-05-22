import React from 'react'

function Event() {
  return (
    <div>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Upcoming Events</h1>
        <div className="flex flex-col items-center">
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Science Faire</h2>
              <p className="text-gray-700 mb-2">
                A showcase of innovative science projects by students.
              </p>
              <div className="flex items-center">
                <span className="text-gray-600">April 20, 2024</span>
                <span className="ml-auto text-blue-500 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Sports Day</h2>
              <p className="text-gray-700 mb-2">
                Various sports competitions and activities for students.
              </p>
              <div className="flex items-center">
                <span className="text-gray-600">May 15, 2024</span>
                <span className="ml-auto text-blue-500 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden mb-4">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Annual Concert</h2>
              <p className="text-gray-700 mb-2">
                An evening of music and performances by the school's talented
                students.
              </p>
              <div className="flex items-center">
                <span className="text-gray-600">June 5, 2024</span>
                <span className="ml-auto text-blue-500 cursor-pointer">
                  Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Event
