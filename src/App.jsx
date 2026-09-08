import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile === '9876543210' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Mobile Number or Password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold h-10 w-10 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight text-white">Mansharp</h1>
            <p className="text-xs tracking-widest text-blue-400 font-semibold uppercase">Technologies Private Limited</p>
          </div>
        </div>
        <button
          onClick={() => {
            setIsAdmin(!isAdmin);
            setIsLoggedIn(false);
          }}
          className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
        >
          {isAdmin ? 'Public Portal' : 'Admin Panel 🛡️'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        {!isAdmin ? (
          /* Public Portal Home */
          <div className="max-w-4xl w-full text-center space-y-8 py-12">
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
              Welcome to Mansharp Technologies
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Empowering Businesses <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                Through Digital Innovation
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
              We deliver cutting-edge software solutions, enterprise web development, and robust cloud services tailored to scale your business into the future.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => alert('Explore services clicked!')}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30"
              >
                Our Services
              </button>
              <button
                onClick={() => alert('Contact form coming soon!')}
                className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        ) : (
          /* Admin Section */
          <div className="w-full max-w-md bg-slate-900/80 border border-slate-800/80 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">Admin Login</h3>
                  <p className="text-xs text-slate-400">Enter your credentials to access the dashboard</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Mobile Number</label>
                    <input
                      type="text"
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Password</label>
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/30 text-sm"
                >
                  Login
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6 py-4">
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl">
                  <h3 className="font-bold text-lg mb-1">Welcome, Admin!</h3>
                  <p className="text-xs text-slate-400">You have successfully logged into the Mansharp Technologies dashboard.</p>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="w-full bg-rose-600/10 hover:bg-rose-600/20 border border-rose-500/20 text-rose-400 font-semibold py-3 rounded-xl transition-all text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mansharp Technologies Private Limited. All rights reserved.
      </footer>
    </div>
  );
}