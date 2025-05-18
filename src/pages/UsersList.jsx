import React, { useEffect, useState } from 'react';

function EmployeeManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/user.json')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="bg-[#e5f0fd] min-h-screen p-6">
      <div className="text-sm text-gray-700 font-medium mb-2">Dashboard / Employee Management</div>
      <div className="bg-white p-6 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Employee Management</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-gray-200">
              <span className="material-icons">filter_list</span>
            </button>
            <button className="bg-[#4CAF50] text-white px-4 py-2 rounded-md font-semibold text-sm">Export</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#d9eaff] text-[#202020] text-[13px] font-semibold">
              <tr>
                <th className="px-4 py-3">Name(s)</th>
                <th className="px-4 py-3">Dept</th>
                <th className="px-4 py-3">Job Title</th>
                <th className="px-4 py-3">Start Date</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Gender</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id} className={`${idx % 2 === 1 ? 'bg-[#f2f8ff]' : 'bg-white'} border-b border-gray-200`}>
                  <td className="px-4 py-3 font-medium text-[#202020]">{user.name}</td>
                  <td className="px-4 py-3">{user.dept}</td>
                  <td className="px-4 py-3">{user.jobTitle}</td>
                  <td className="px-4 py-3">{user.startDate}</td>
                  <td className="px-4 py-3">{user.category}</td>
                  <td className="px-4 py-3">{user.gender}</td>
                  <td className="px-4 py-3">
                    <div className="relative inline-block text-left group">
                      <button className="bg-[#1a3f8b] text-white px-4 py-1.5 rounded-md text-sm font-medium flex items-center gap-1">
                        Actions <span className="material-icons text-sm">arrow_drop_down</span>
                      </button>
                      <div className="hidden group-hover:block absolute z-10 mt-1 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1 text-sm">
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">View Profile</a>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100">Edit Profile</a>
                        </div>
                      </div>
                    </div>
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

export default EmployeeManagement;
