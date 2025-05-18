A React-based HR management dashboard built with Vite, Tailwind CSS, and React Router. This project provides a user-friendly interface for managing HR operations, including employee management, recruitment, and payroll.

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

# 1. Clone the repo
git clone https://github.com/garviiii/Dashboard.git
cd Dashboard

# 2. Install dependencies
npm install
# or
yarn

# 3. Run locally
npm run dev
# Vite will start at http://localhost:5173

Project Structure

frontend-dashboard/
├── public/               # Static assets (e.g., images, logos)
├── src/                  # Source code
│   ├── assets/           # Additional assets
│   ├── context/          # React Context for global state
│   ├── data/             # Static JSON data
│   ├── pages/            # Page components (e.g., Login, Dashboard)
│   ├── [App.css]         # Component-specific styles
│   ├── [index.css]        # Global styles
│   ├── main.jsx          # Entry point
├── [tailwind.config.js]  # Tailwind CSS configuration
├── [postcss.config.js]    # PostCSS configuration
├── vite.config.js        # Vite configuration
├── [package.json]        # Project metadata and dependencies
└── [README.md]           # Project documentation

Approach
Authentication
Login: The Login page uses React's useState to manage form inputs and useContext to update the global user state via the UserContext.
Session Persistence: User data is stored in localStorage and synced using the useEffect hook in the UserProvider.
State Management
React Context: The UserContext provides global state for user authentication and session management. It includes methods like setUser and logOut.
Routing
React Router: The app uses react-router-dom for navigation between pages like Login and Dashboard.
Styling
Tailwind CSS: Tailwind is used for responsive and utility-first styling. The index.css file imports Tailwind's base, components, and utilities.
Dashboard
Sidebar Navigation: The Dashboard page includes a collapsible sidebar with navigation links.
Dynamic Content: The dashboard dynamically displays user-specific data, such as the logged-in user's email.
