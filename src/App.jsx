import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile === '9876543210' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Mobile Number or Password');
    }
  };

  // Dynamic class helpers based on theme
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white'}`}>
      
      {/* HEADER */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl transition-colors duration-300 ${isDark ? 'border-slate-800/80 bg-slate-900/95' : 'border-slate-200 bg-white/95'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            M
          </div>
          <div>
            <h1 className={`font-extrabold text-base sm:text-lg leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* NAVIGATION MENUS */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            
            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                About <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('about')} className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>About Us</button>
                <button onClick={() => setActiveTab('why-choose-us')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Why Choose Us</button>
                <button onClick={() => setActiveTab('life-at-mansharp')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Life At Mansharp</button>
                <button onClick={() => setActiveTab('leadership')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Leadership</button>
              </div>
            </div>

            {/* Industries Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Industries <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 border rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => (
                  <button key={idx} onClick={() => setActiveTab(ind.toLowerCase().replace(/\s+/g, '-'))} className={`text-left px-2 py-1.5 rounded-lg text-[11px] transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>{ind}</button>
                ))}
              </div>
            </div>

            {/* Resources & Insights Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Resources & Insights <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('blogs')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Blogs</button>
                <button onClick={() => setActiveTab('case-studies')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Case Studies</button>
                <button onClick={() => setActiveTab('workshops')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Events & Workshops</button>
              </div>
            </div>

            {/* Solutions Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Solutions <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('department-solutions')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Department Solutions</button>
                <button onClick={() => setActiveTab('licenses')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Licenses</button>
                <button onClick={() => setActiveTab('technologies')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Technologies</button>
                <button onClick={() => setActiveTab('integration')} className={`text-left px-3.5 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Integration & Consulting</button>
              </div>
            </div>

            {/* Products Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Products <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-[-40px] w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('aim-app')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>AIM App</button>
                <button onClick={() => setActiveTab('org-chart')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Mansharp Org Chart</button>
              </div>
            </div>

            <button onClick={() => setActiveTab('contact')} className={`border px-4 py-2 rounded-xl transition-all ${isDark ? 'bg-rose-900/30 border-rose-700/50 hover:bg-rose-900/50 text-rose-200' : 'bg-rose-50 border-rose-200 hover:bg-rose-100 text-rose-600'}`}>Contact us</button>
          </nav>
        )}

        {/* Theme Toggle & Admin Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
            title="Toggle Light/Dark Theme"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            {activeTab === 'about' ? (
              <div className="space-y-16">
                
                {/* HERO SECTION WITH TEAM BACKGROUND PHOTO */}
                <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center text-center px-4 overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                      alt="Team Background" 
                      className={`w-full h-full object-cover scale-105 transition-all ${isDark ? 'brightness-[0.35]' : 'brightness-[0.55]'}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/40' : 'from-slate-50 via-slate-50/40'} to-transparent`}></div>
                  </div>

                  <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                    <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                      Empowering Innovation & <br /> Possibilities Beyond Boundaries
                    </h1>
                    <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-2 drop-shadow">
                      At Mansharp Technologies, we ignite possibilities through cutting-edge technology. Our journey isn’t just about the past; it’s a roadmap to the future. Join us as we pioneer new horizons — one innovation at a time.
                    </p>
                  </div>
                </div>

                {/* ABOUT CONTENT & TEAM PHOTO */}
                <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                      <h2 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>We're Mansharp Technologies</h2>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Embarking on our journey in 2013, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions. Though our name draws inspiration from space exploration and futuristic vision, our commitment extends far beyond expectations.
                      </p>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        We dream of bringing remarkable individuals together and transforming technology for positive change. We don't just create; we add value. Today, we stand proud at the forefront of the digital revolution.
                      </p>
                    </div>
                    <div className={`rounded-3xl overflow-hidden border shadow-2xl ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                      <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                        alt="Mansharp Team Celebration" 
                        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* CULTURE VALUES */}
                  <div className="space-y-8 pt-6">
                    <div className="text-center space-y-2">
                      <h2 className={`text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Culture</h2>
                      <p className={`text-xs sm:text-sm max-w-xl mx-auto ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        At Mansharp, we foster curiosity, passion, and innovation. At every stage, our team strives to be who you love to work with. Here is how we do it:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { title: 'Client-Centricity', desc: 'Clients are our heartbeat. We forge trust-based relationships, ensuring their sustained success.' },
                        { title: 'Global Mindset', desc: 'We act across cultures, understanding diverse markets and delivering universally adaptable solutions.' },
                        { title: 'Integrity & Data Integrity', desc: 'Transparency, trustworthiness, and data integrity define our actions.' },
                        { title: 'Collaboration', desc: 'Diverse perspectives drive well-rounded solutions.' },
                        { title: 'Innovation', desc: 'Transforming ideas into reality through AI and state-of-the-art tech.' },
                        { title: 'Excellence', desc: 'Unwavering standards drive our quality and client satisfaction.' }
                      ].map((item, idx) => (
                        <div key={idx} className={`border p-6 rounded-3xl space-y-2 transition-all ${isDark ? 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm'}`}>
                          <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                          <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ) : activeTab === 'contact' ? (
              <div className="max-w-xl mx-auto px-4 py-12 space-y-6">
                <h2 className={`text-3xl font-extrabold text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className={`border p-8 rounded-3xl shadow-2xl space-y-4 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <input type="text" placeholder="Your Name" className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                  <input type="email" placeholder="Business Email" className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                  <textarea rows="4" placeholder="Tell us about your challenge..." className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required></textarea>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all shadow-md">Submit Request</button>
                </form>
              </div>
            ) : (
              <div className="max-w-4xl mx-auto px-4 py-16 space-y-6 text-center">
                <h2 className={`text-3xl sm:text-4xl font-extrabold capitalize ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {activeTab.replace(/-/g, ' ')}
                </h2>
                <p className={`text-sm max-w-xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Explore our expert solutions and insights tailored under {activeTab.replace(/-/g, ' ')}. We deliver enterprise-grade transformation designed for modern businesses.
                </p>
                <div className="pt-4">
                  <button onClick={() => setActiveTab('about')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-xs transition-all shadow-md">
                    Back to About
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto py-12 px-4">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className={`border p-8 rounded-3xl space-y-6 shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className={`text-2xl font-bold text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl text-sm shadow-md">Login</button>
              </form>
            ) : (
              <div className={`border p-8 rounded-3xl space-y-6 text-center shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Welcome Admin!</h3>
                <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>You have successfully accessed the admin console.</p>
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-500 px-6 py-2.5 rounded-xl text-xs font-semibold">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className={`border-t text-xs py-12 px-4 sm:px-8 mt-auto transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-900/90 text-slate-400' : 'border-slate-200 bg-white text-slate-600'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-inherit">
          
          <div className="space-y-3">
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-500 font-bold">📞</span> +1-732-668-8002
            </p>
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-500 font-bold">📞</span> +91-62843-00850
            </p>
            <p className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer" onClick={() => setActiveTab('contact')}>
              <span className="text-blue-500 font-bold">✉️</span> info@mansharptech.com
            </p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDark ? 'text-white' : 'text-slate-900'}`}>Licenses</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('technologies')}>Technologies</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('integration')}>Integration & Consulting</p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDark ? 'text-white' : 'text-slate-900'}`}>Industries</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('healthcare')}>Healthcare</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('manufacturing')}>Manufacturing</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('public-sector')}>Public Sector</p>
          </div>

          <div className="space-y-2">
            <h4 className={`font-bold mb-2 uppercase tracking-wider text-[11px] ${isDark ? 'text-white' : 'text-slate-900'}`}>Products</h4>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('org-chart')}>Org Chart</p>
            <p className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('aim-app')}>Asset Management App</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-8 text-[11px]">
            <div>
              <span className={`font-bold block mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>USA</span>
              <p>131 Continental Drive, Suite 205, Newark, Delaware, 19713</p>
            </div>
            <div>
              <span className={`font-bold block mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>India</span>
              <p>SCO 515, Third Floor, Sector 70, Mohali, Punjab, 160055</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('privacy-policy')}>Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-blue-500 cursor-pointer" onClick={() => setActiveTab('terms')}>Terms And Conditions</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center text-slate-400 text-[11px]">
          Copyright © {new Date().getFullYear()} Mansharp Technologies, All rights reserved.
        </div>
      </footer>

    </div>
  );
}