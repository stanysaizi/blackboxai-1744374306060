import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function AttendanceMarking() {
  const [markingMethod, setMarkingMethod] = useState('manual'); // 'manual' or 'qr'
  const [scanResult, setScanResult] = useState('');
  const [location, setLocation] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setScanResult(result?.text);
      // TODO: Process QR code data
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h2 className="text-3xl font-bold text-center mb-8">Mark Attendance</h2>

                {/* Marking Method Selection */}
                <div className="flex justify-center space-x-4 mb-8">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      markingMethod === 'manual'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setMarkingMethod('manual')}
                  >
                    <i className="fas fa-edit mr-2"></i>
                    Manual Entry
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      markingMethod === 'qr'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setMarkingMethod('qr')}
                  >
                    <i className="fas fa-qrcode mr-2"></i>
                    QR Code
                  </button>
                </div>

                {markingMethod === 'manual' ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Employee ID
                      </label>
                      <input
                        type="text"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your employee ID"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Attendance Type
                      </label>
                      <select
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      >
                        <option value="check-in">Check In</option>
                        <option value="check-out">Check Out</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Notes (Optional)
                      </label>
                      <textarea
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        rows="3"
                        placeholder="Add any notes..."
                      ></textarea>
                    </div>

                    <button
                      onClick={getCurrentLocation}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      Use Current Location
                    </button>

                    {location && (
                      <div className="text-sm text-gray-500">
                        Location: {location.latitude}, {location.longitude}
                      </div>
                    )}

                    <button
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      <i className="fas fa-check-circle mr-2"></i>
                      Mark Attendance
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="qr-reader-container">
                      <QrReader
                        constraints={{ facingMode: 'environment' }}
                        onResult={handleScan}
                        style={{ width: '100%' }}
                      />
                    </div>
                    {scanResult && (
                      <div className="mt-4 p-4 bg-green-100 rounded-lg">
                        <p className="text-green-700">QR Code scanned successfully!</p>
                        <p className="text-sm text-green-600">{scanResult}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Attendance Records */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Attendance Records</h3>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check In
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Check Out
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <tr key={item}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    2024-01-{item}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    09:00 AM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    05:00 PM
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Present
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AttendanceMarking;
