import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // navigation logic
    setUser({ email });
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Login to your account.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-sm text-gray-700 block mb-1">E-mail Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm text-gray-700 block mb-1">Password</label>
              <input
                type="password"
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-600" />
                Remember me
              </label>
              <a href="#" className="text-blue-700 hover:underline font-medium">Reset Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-sm"
            >
              Sign In
            </button>
          </form>
          <p className="text-sm text-center mt-6 text-gray-600">
            Don’t have an account yet?{" "}
            <a href="#" className="text-blue-800 font-semibold hover:underline">
              Join KRIS today.
            </a>
          </p>
        </div>
      </div>

      {/* Right side - Image and Text */}
<div
  className="hidden md:block w-1/2 relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url('/login-right.png')` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-blue-900 bg-opacity-10 flex flex-col justify-end p-10">
    {/* Text */}
    <div className="mb-24">
      <p className="text-white text-left text-2xl md:text-3xl font-semibold leading-snug max-w-md">
        Manage all <span className="text-yellow-400 font-bold">HR Operations</span><br />
        from the comfort of your home.
      </p>
    </div>

    {/* Slider bars */}
    <div className="flex gap-2">
      <div className="w-10 h-2 bg-yellow-400 rounded-full"></div>
      <div className="w-10 h-2 bg-white rounded-full"></div>
      <div className="w-10 h-2 bg-white rounded-full"></div>
    </div>
  </div>
</div>
    </div>
  );
}