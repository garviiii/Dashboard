import users from "../data/users.json";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faChevronDown,
    faWrench,
    faDownload,
    faSearch,
    faSort,
    faBarsStaggered,
    faFilter,
  faTachometerAlt,
  faEnvelope,
  faBriefcase,
  faUsers,
  faFileAlt,
  faUserTie,
  faCalendarCheck,
  faChartLine,
  faMoneyCheckAlt,
  faSignOutAlt,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-[#f1f5f9]">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 top-0 left-0 h-full w-64 bg-[#0e1a45] text-white flex flex-col p-4 transform transition-transform duration-300 ease-in-out
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center gap-4 mb-10">
          <img
            src="/avatars/admin.png"
            alt="Admin Avatar"
            className="w-20 h-20 rounded-full border-4 border-white object-cover"
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg">KRIS Admin</p>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>

        <nav className="space-y-4">
          <div className="text-sm uppercase text-gray-400">Features</div>
          <NavItem
            label="Dashboard"
            icon={faTachometerAlt}
            active={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
          />
          <NavItem label="Messages" icon={faEnvelope} badge="13" />
          <div className="text-sm uppercase text-gray-400 mt-6">
            Recruitment
          </div>
          <NavItem label="Jobs" icon={faBriefcase} />
          <NavItem label="Candidates" icon={faUsers} />
          <NavItem label="Resumes" icon={faFileAlt} />
          <div className="text-sm uppercase text-gray-400 mt-6">
            Organization
          </div>
          <NavItem
            label="Employee Management"
            icon={faUserTie}
            active={activeSection === "users"}
            onClick={() => setActiveSection("users")}
          />
          <NavItem label="Leave Management" icon={faCalendarCheck} />
          <NavItem label="Performance Management" icon={faChartLine} />
          <div className="text-sm uppercase text-gray-400 mt-6">KRIS Pay</div>
          <NavItem label="Payroll Management" icon={faMoneyCheckAlt} />
        </nav>

        <button className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faSignOutAlt} />
          Log Out
        </button>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Dashboard */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          {/* Left spacer or hamburger */}
          <button
            className="text-2xl"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon icon={faBarsStaggered} />
          </button>

          {/* Center: Filter + Search, perfectly aligned */}
          <div className="flex-1 flex justify-center w-full px-2">
            <div className="flex h-12 w-full max-w-full sm:max-w-lg lg:max-w-3xl">
              {/* Filter Dropdown */}

              <div className="relative hidden sm:block">
                <select className="h-12 bg-blue-800 text-white text-sm font-semibold px-8 pr-10 py-2 rounded-l-xl border-none outline-none appearance-none">
                  <option>All Candidates</option>
                  <option>Shortlisted</option>
                  <option>Rejected</option>
                </select>
                <FontAwesomeIcon
                  icon={faSort}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white pointer-events-none"
                />
              </div>

              {/* Search Input with Icon */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full h-full text-sm pl-6 pr-10 rounded-r-xl rounded-l-xl sm:rounded-l-none outline-none shadow-sm"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-300 text-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex gap-3 items-center text-xl">
            <IconButton color="bg-blue-800" icon={faBell} badge />
            <IconButton
              color="bg-yellow-400"
              icon={faWrench}
              iconColor="text-black"
            />
            <IconButton color="bg-green-700" icon={faEnvelope} badge />
          </div>
        </div>

        {/* Placeholder for content */}
        {activeSection === "dashboard" && (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex flex-wrap gap-6 mt-6">
              <SummaryCard
                bgColor="bg-yellow-500"
                icon={faEnvelope}
                count="138"
                label="Messages"
                iconColor="text-black"
                textColor="text-black"
              />
              <SummaryCard
                bgColor="bg-blue-800"
                icon={faBriefcase}
                count="50"
                label="Jobs"
              />
              <SummaryCard
                bgColor="bg-green-700"
                icon={faUsers}
                count="100"
                label="Candidates"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <SectionCard title="Applied Jobs">
                <JobItem
                  title="Sales Executive"
                  company="Access Bank"
                  time="20mins ago"
                  color="bg-orange-100"
                  logo="/logos/access.png"
                />
                <JobItem
                  title="User Experience Designer"
                  company="Paystack"
                  time="10mins ago"
                  color="bg-blue-100"
                  logo="/logos/paystack.png"
                />
                <JobItem
                  title="Product Manager"
                  company="T-Pay"
                  time="5mins ago"
                  color="bg-pink-100"
                  logo="/logos/tpay.png"
                />
              </SectionCard>

              <SectionCard title="Employees">
                <EmployeeCard
                  name="John Doe"
                  role="Product Manager"
                  avatarUrl="/avatars/user1.png"
                  color="bg-yellow-400"
                />
                <EmployeeCard
                  name="Ginna Loe"
                  role="Sales Executive"
                  avatarUrl="/avatars/user2.png"
                  color="bg-blue-400"
                />
                <EmployeeCard
                  name="John Dore"
                  role="UI UX Designer"
                  avatarUrl="/avatars/user1.png"
                  color="bg-red-400"
                />
              </SectionCard>

              <SectionCard title="Candidates">
                <CandidateCard
                  name="John Doe"
                  role="Product Manager"
                  color="bg-yellow-400"
                  avatarUrl="/avatars/user1.png"
                  score={80}
                />
                <CandidateCard
                  name="Ginna Loe"
                  role="Sales Executive"
                  color="bg-blue-400"
                  avatarUrl="/avatars/user2.png"
                  score={30}
                />
                <CandidateCard
                  name="James Foe"
                  role="Product Manager"
                  color="bg-yellow-500"
                  avatarUrl="/avatars/user3.png"
                  score={55}
                />
              </SectionCard>

              <SectionCard title="April Payrolls">
                <PayrollItem
                  name="John Doe"
                  amount="₦500,000"
                  status="Paid"
                  avatarUrl="/avatars/user1.png"
                />
                <PayrollItem
                  name="Ginna Loe"
                  amount="₦150,000"
                  status="Processing"
                  avatarUrl="/avatars/user2.png"
                />
                <PayrollItem
                  name="James Foe"
                  role="Product Manager"
                  status="Processing"
                  avatarUrl="/avatars/user3.png"
                />
              </SectionCard>
            </div>
          </>
        )}

        {activeSection === "users" && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Dashboard / Employee Management
            </h2>
            <div className="bg-white rounded-2xl shadow p-6">
              {/* Top bar with title + filter + export */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  Employee Management
                </h3>
                <div className="flex items-center gap-4">
                  <FontAwesomeIcon
                    icon={faFilter}
                    className="text-gray-600 text-lg cursor-pointer"
                  />
                  <button className="flex items-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow">
                    Export{" "}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-2 text-xs"
                    />
                  </button>
                </div>
              </div>

              {/* Table starts here */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse overflow-hidden">
                  <thead>
                    <tr className="bg-blue-100 text-gray-800 text-base font-semibold">
                      <th className="px-6 py-4 rounded-tl-2xl">Name</th>
                      <th className="px-6 py-4">Email</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4 rounded-tr-2xl">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, idx) => (
                      <tr
                        key={idx}
                        className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                      >
                        <td className="px-6 py-4 font-medium">{user.name}</td>
                        <td className="px-6 py-4">{user.email}</td>
                        <td className="px-6 py-4">{user.role}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              user.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// Reusable Components
function NavItem({ label, icon, active, badge, onClick }) {
  return (
    <div
        onClick={onClick}
      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer ${
        active ? "bg-yellow-400 text-black font-semibold" : "hover:bg-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={icon} className="w-4 h-4" />
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-xs bg-red-600 px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </div>
  );
}


function SummaryCard({ icon, count, label, bgColor, iconColor = "text-white", textColor = "text-white" }) {
    return (
      <div className={`flex items-center justify-between p-6 sm:p-12 rounded-2xl shadow-md ${bgColor} sm:w-80 sm:h-40 w-full gap-y-4`}>
        {/* Left: Icon */}
        <div className={`text-6xl sm:text-7xl lg:text-8xl mr-6 ${iconColor} rotate-[-5deg] transition-transform duration-300 hover:rotate-0`}>
          <FontAwesomeIcon icon={icon} />
        </div>
  
        {/* Right: Text */}
        <div className="flex flex-col items-center text-white">
          <p className={`text-4xl sm:text-5xl font-bold leading-snug ${textColor}`}>{count}</p>
          <p className={`text-sm sm:text-base font-medium ${textColor}`}>{label}</p>
        </div>
      </div>
    );
  }

function SectionCard({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className="text-xl text-gray-500">⋮</span>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function JobItem({ title, company, time, color, logo }) {
  return (
    <div className="h-[90px] flex justify-between items-center p-4 rounded-xl bg-blue-100 hover:shadow-md transition">
      <div className="flex items-center gap-3">
      <img src={logo} alt={company} className="w-10 h-10 object-cover" />
        <div>
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-xs text-gray-500">{company}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}

function EmployeeCard({ name, role, color, avatarUrl }) {
  return (
    <div className="h-[90px] flex items-center justify-between bg-blue-100 rounded-lg p-4 hover:shadow-md transition">
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-700">Role : {role}</p>
        </div>
      </div>

      {/* Right: View + Download (vertical stack) */}
      <div className="flex gap-4">
        <ActionButton label="View" icon={faEye} color="bg-green-700" />
        <ActionButton label="Download" icon={faDownload} color="bg-blue-800" />
      </div>
    </div>
  );
}

function ActionButton({ label, icon, color }) {
  return (
    <div className="flex flex-col items-center text-xs text-gray-700 font-medium">
      <span>{label}</span>
      <div
        className={`w-8 h-8 mt-1 flex items-center justify-center text-white rounded-md ${color}`}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
}

function CandidateCard({ name, role, color, score, avatarUrl }) {
  return (
    <div className="h-[90px] flex items-center justify-between bg-blue-100 rounded-xl p-4 hover:shadow-md transition">
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-500">Applied for : {role}</p>
        </div>
      </div>

      {/* Right: ATS Score + View */}
      <div className="flex gap-6">
        <div className="flex flex-col items-center text-xs text-gray-700 font-medium">
          <span>ATS Score (%)</span>
          <div
            className={`w-10 h-10 mt-1 rounded-full text-white flex items-center justify-center text-sm font-semibold ${
              score >= 70
                ? "bg-blue-600"
                : score >= 50
                ? "bg-yellow-400 text-black"
                : "bg-red-500"
            }`}
          >
            {score}
          </div>
        </div>
        <div className="flex flex-col items-center text-xs text-gray-700 font-medium">
          <span>View</span>
          <div className="w-10 h-10 mt-1 rounded-full bg-green-700 text-white flex items-center justify-center">
            <FontAwesomeIcon icon={faEye} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PayrollItem({ name, role, amount, status, avatarUrl }) {
  const isPaid = status === "Paid";

  return (
    <div className="h-[90px] flex items-center justify-between bg-blue-100 rounded-xl p-4 hover:shadow-md transition">
      {/* Left: Avatar + Info */}
      <div className="flex items-center gap-3">
        <img
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-700">
            {amount ? `Salary Amount : ${amount}` : `Applied for : ${role}`}
          </p>
        </div>
      </div>

      {/* Right: Status + Bar */}
      <div className="flex flex-col items-center w-28">
        <p className="text-sm font-medium text-gray-800 mb-1">{status}</p>
        {isPaid ? (
          <div className="w-full h-2 rounded-full bg-green-700" />
        ) : (
          <div className="flex items-center w-full gap-1">
            <div className="w-4 h-2 bg-black rounded-full" />
            <div className="h-2 flex-1 rounded-full bg-yellow-400" />
          </div>
        )}
      </div>
    </div>
  );
}

function UserRow({ user }) {
    return (
      <div className="bg-blue-100 p-4 rounded-xl flex justify-between items-center shadow-sm">
        {/* Left: Avatar + Info */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${user.color}`}>
            {user.name[0]}
          </div>
          <div>
            <p className="text-sm font-semibold">{user.name}</p>
            <p className="text-xs text-gray-600">{user.jobTitle}</p>
          </div>
        </div>
  
        {/* Right: Actions */}
        <div className="flex gap-4 text-sm text-gray-700">
          <ActionIcon label="View" icon="👁️" />
          <ActionIcon label="Edit" icon="✏️" />
          <ActionIcon label="Delete" icon="🗑️" />
        </div>
      </div>
    );
  }
  
  function ActionIcon({ label, icon }) {
    return (
      <div className="flex flex-col items-center text-xs">
        <span>{label}</span>
        <div className="w-8 h-8 mt-1 rounded-md bg-white flex items-center justify-center shadow border">
          {icon}
        </div>
      </div>
    );
  }

  function IconButton({ icon, color, badge, iconColor = "text-white" }) {
    return (
      <div className="relative">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${color}`}
        >
          <FontAwesomeIcon icon={icon} className={iconColor} />
        </div>
        {badge && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-[8px] text-white rounded-full flex items-center justify-center">
            13
          </span>
        )}
      </div>
    );
  }