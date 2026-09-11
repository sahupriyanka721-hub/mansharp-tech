import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile === '9876543210' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Mobile Number or Password');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white'}`}>
      
      {/* HEADER SECTION */}
      <header className={`border-b ${isDarkMode ? 'border-slate-800/80 bg-slate-900/95' : 'border-slate-200 bg-white/95'} backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            F
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">FENTHARA</h1>
            <p className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* Navigation Dropdowns */}
        {!isAdmin && (
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            
            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className={`group-hover:text-blue-500 flex items-center gap-1 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                About <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white font-bold transition-colors">About Us</button>
                <button onClick={() => setActiveTab('why-choose-us')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Why Choose Us</button>
                <button onClick={() => setActiveTab('life-at-fenthara')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Life At Fenthara</button>
                <button onClick={() => setActiveTab('leadership')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Leadership</button>
              </div>
            </div>

            {/* Industries Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className={`group-hover:text-blue-500 flex items-center gap-1 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Industries <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} border rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => (
                  <button key={idx} onClick={() => setActiveTab(ind.toLowerCase().replace(/\s+/g, '-'))} className="text-left px-2 py-1.5 rounded-lg text-[11px] hover:bg-blue-600 hover:text-white transition-colors">{ind}</button>
                ))}
              </div>
            </div>

            {/* Resources & Insights Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className={`group-hover:text-blue-500 flex items-center gap-1 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Resources & Insights <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                <button onClick={() => setActiveTab('blogs')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Blogs</button>
                <button onClick={() => setActiveTab('case-studies')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Case Studies</button>
                <button onClick={() => setActiveTab('workshops')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Events & Workshops</button>
              </div>
            </div>

            {/* Solutions Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className={`group-hover:text-blue-500 flex items-center gap-1 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Solutions <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                <button onClick={() => setActiveTab('department-solutions')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Department Solutions</button>
                <button onClick={() => setActiveTab('licenses')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Licenses</button>
                <button onClick={() => setActiveTab('technologies')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Technologies</button>
                <button onClick={() => setActiveTab('integration')} className="text-left px-3.5 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Integration & Consulting</button>
              </div>
            </div>

            {/* Products Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className={`group-hover:text-blue-500 flex items-center gap-1 transition-colors ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Products <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-[-40px] w-56 ${isDarkMode ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'} border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50`}>
                <button onClick={() => setActiveTab('aim-app')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">AIM App</button>
                <button onClick={() => setActiveTab('org-chart')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Fenthara Org Chart</button>
                <button onClick={() => setActiveTab('starfleet-stash')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-600 hover:text-white transition-colors">Starfleet Stash App</button>
              </div>
            </div>

            <button onClick={() => setActiveTab('contact')} className="bg-rose-900/30 border border-rose-700/50 hover:bg-rose-900/50 text-rose-200 px-4 py-2 rounded-xl transition-all">Contact us</button>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)} 
            className={`p-2 rounded-xl text-xs font-semibold border ${isDarkMode ? 'border-slate-800 bg-slate-900 text-yellow-400' : 'border-slate-200 bg-slate-100 text-slate-700'}`}
            title="Toggle Theme"
          >
            {isDarkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-600/30">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN BODY CONTENT */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            {/* HERO / BANNER SECTION DYNAMIC TO TAB */}
            <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center text-center px-4 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                  alt="Banner Background" 
                  className="w-full h-full object-cover brightness-[0.3] scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-slate-950 via-slate-950/40' : 'from-slate-900 via-slate-900/50'} to-transparent`}></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
                  {activeTab.replace(/-/g, ' ')}
                </h1>
                <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
                  Empowering innovation and delivering world-class enterprise technology solutions tailored for your business growth.
                </p>
                <div className="pt-2">
                  <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-blue-500/25">
                    Want To Explore AI Solutions Click Here!
                  </button>
                </div>
              </div>
            </div>

            {/* TAB SPECIFIC CONTENT AREA */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
              <div className={`p-8 sm:p-12 rounded-3xl border ${isDarkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-xl'} space-y-6`}>
                <h2 className="text-2xl sm:text-3xl font-extrabold capitalize">Overview of {activeTab.replace(/-/g, ' ')}</h2>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Fenthara Technologies delivers high-performance platforms, digital transformation consulting, cloud infrastructure, and modern software applications designed to accelerate organizational workflows.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                  <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                    <h3 className="font-bold text-sm text-blue-500">Secure & Scalable</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Built with enterprise-grade security protocols ensuring absolute data integrity.</p>
                  </div>
                  <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                    <h3 className="font-bold text-sm text-blue-500">AI-Powered Integration</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Seamless connectivity across Microsoft 365, Azure, and custom cloud apps.</p>
                  </div>
                  <div className={`p-5 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'} space-y-2`}>
                    <h3 className="font-bold text-sm text-blue-500">24/7 Expert Support</h3>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Dedicated certified consultants ready to handle your operational requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto px-4 py-6 space-y-6">
                <h2 className="text-3xl font-extrabold text-center">Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className={`space-y-4 p-8 rounded-3xl border shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <input type="text" placeholder="Your Name" className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                  <input type="email" placeholder="Business Email" className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                  <textarea rows="4" placeholder="Tell us about your challenge..." className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required></textarea>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-blue-500/25">Submit Request</button>
                </form>
              </div>
            )}

          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto py-12 px-4">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className={`border p-8 rounded-3xl space-y-6 shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className="text-2xl font-bold text-center">Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm ${isDarkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl text-sm shadow-lg shadow-blue-500/25">Login</button>
              </form>
            ) : (
              <div className={`border p-8 rounded-3xl space-y-6 text-center shadow-2xl ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className="text-xl font-bold">Welcome Admin!</h3>
                <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>You have successfully accessed the admin console.</p>
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-400 px-6 py-2.5 rounded-xl text-xs font-semibold">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER SECTION */}
      <footer className={`border-t ${isDarkMode ? 'border-slate-800 bg-slate-900/90 text-slate-400' : 'border-slate-200 bg-slate-100 text-slate-600'} text-xs py-12 px-4 sm:px-8 mt-auto`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          <div className="space-y-3">
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-400 font-bold">📞</span> +1-732-668-8002
            </p>
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-400 font-bold">📞</span> +91-62843-00850
            </p>
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-400 font-bold">✉️</span> info@fenthara.com
            </p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Licenses</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('technologies')}>Technologies</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('integration')}>Integration & Consulting</p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Industries</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('healthcare')}>Healthcare</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('manufacturing')}>Manufacturing</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('public-sector')}>Public Sector</p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Products</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('org-chart')}>Org Chart</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('aim-app')}>Asset Management App</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('starfleet-stash')}>Expense Management App</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-8 text-[11px]">
            <div>
              <span className={`font-bold block mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>USA</span>
              <p>131 Continental Drive, Suite 205, Newark, Delaware, 19713</p>
            </div>
            <div>
              <span className={`font-bold block mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>India</span>
              <p>SCO 515, Third Floor, Sector 70, Mohali, Punjab, 160055</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('privacy-policy')}>Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('terms')}>Terms And Conditions</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center text-[11px] opacity-75">
          Copyright © {new Date().getFullYear()} Fenthara Technologies, All rights reserved.
        </div>
      </footer>

    </div>
  );
}