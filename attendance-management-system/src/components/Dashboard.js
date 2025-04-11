import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock data for demonstration
  const stats = {
    presentToday: 45,
    totalEmployees: 50,
    onLeave: 3,
    lateToday: 2
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Ministry of ICT</h1>
            </div>
            <div className="flex items-center">
              <div className="ml-4 flex items-center md:ml-6">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                  <span className="sr-only">View notifications</span>
                  <i className="fas fa-bell text-xl"></i>
                </button>
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://via.placeholder.com/150"
                      alt="User avatar"
                    />
                    <span className="ml-2 text-gray-700">John Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-users text-2xl text-blue-500"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Present Today</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stats.presentToday}/{stats.totalEmployees}
                      </div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        {((stats.presentToday/stats.totalEmployees) * 100).toFixed(1)}%
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-clock text-2xl text-yellow-500"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Late Today</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stats.lateToday}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-umbrella-beach text-2xl text-red-500"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">On Leave</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stats.onLeave}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <i className="fas fa-user-check text-2xl text-green-500"></i>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Employees</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{stats.totalEmployees}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/attendance" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-clipboard-check text-3xl text-indigo-500"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Mark Attendance</h3>
                    <p className="text-sm text-gray-500">Record daily attendance</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/leave" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-calendar-alt text-3xl text-purple-500"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Apply Leave</h3>
                    <p className="text-sm text-gray-500">Submit leave requests</p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/reports" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-chart-bar text-3xl text-green-500"></i>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">View Reports</h3>
                    <p className="text-sm text-gray-500">Access attendance reports</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {[1, 2, 3].map((item) => (
                <li key={item}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <i className="fas fa-circle text-green-500 text-xs"></i>
                        </div>
                        <p className="ml-2 text-sm font-medium text-gray-900">
                          John Doe marked attendance
                        </p>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
