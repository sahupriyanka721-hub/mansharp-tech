import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about'); // Default to About page like video

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile === '9876543210' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Mobile Number or Password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* HEADER (Exact video style with Fenthara/Mansharp branding & hover menus) */}
      <header className="border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-white">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* Navigation Dropdowns */}
        {!isAdmin && (
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            
            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                About <span className="text-[10px]">▼</span>
              </span>
              <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300 font-bold">About Us</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Why Choose Us</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Life At Mansharp</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Leadership</button>
              </div>
            </div>

            {/* Industries Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                Industries <span className="text-[10px]">▼</span>
              </span>
              <div className="absolute top-full left-0 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => (
                  <button key={idx} onClick={() => setActiveTab('about')} className="text-left px-2 py-1.5 rounded-lg text-[11px] hover:bg-slate-800 text-slate-300">{ind}</button>
                ))}
              </div>
            </div>

            {/* Resources & Insights Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                Resources & Insights <span className="text-[10px]">▼</span>
              </span>
              <div className="absolute top-full left-0 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Blogs</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Case Studies</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Events & Workshops</button>
              </div>
            </div>

            {/* Solutions Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                Solutions <span className="text-[10px]">▼</span>
              </span>
              <div className="absolute top-full left-0 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Department Solutions</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Licenses</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Technologies</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3.5 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Integration & Consulting</button>
              </div>
            </div>

            {/* Products Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="group-hover:text-blue-400 flex items-center gap-1 transition-colors">
                Products <span className="text-[10px]">▼</span>
              </span>
              <div className="absolute top-full left-[-40px] w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">AIM App</button>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Mansharp Org Chart</button>
              </div>
            </div>

            <button onClick={() => setActiveTab('contact')} className="bg-rose-900/30 border border-rose-700/50 hover:bg-rose-900/50 text-rose-200 px-4 py-2 rounded-xl transition-all">Contact us</button>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN BODY CONTENT (Matching video's About Us layout with photos) */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            {activeTab === 'about' && (
              <div className="space-y-16">
                
                {/* HERO SECTION WITH TEAM BACKGROUND PHOTO */}
                <div className="relative w-full h-[450px] sm:h-[550px] flex items-center justify-center text-center px-4 overflow-hidden">
                  {/* Background Photo Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80" 
                      alt="Team Background" 
                      className="w-full h-full object-cover brightness-[0.35] scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                  </div>

                  {/* Hero Text */}
                  <div className="relative z-10 max-w-4xl mx-auto space-y-4">
                    <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
                      Empowering Innovation & <br /> Possibilities Beyond Boundaries
                    </h1>
                    <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed pt-2">
                      At Mansharp Technologies, we ignite possibilities through cutting-edge technology. Our journey isn’t just about the past; it’s a roadmap to the future. Join us as we pioneer new horizons — one innovation at a time.
                    </p>
                  </div>
                </div>

                {/* SECOND SECTION: WE'RE MANSHARP TECHNOLOGIES & TEAM PHOTO GRID */}
                <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white">We're Mansharp Technologies</h2>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        Embarking on our journey in 2013, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions. Though our name draws inspiration from the planet "Pentahara" IV of the Star Trek universe, our vision extends far beyond the cosmos.
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        We dream of bringing remarkable individualized together and transforming technology for positive transformation. We don't just create; we add value. Today, we stand proud at the forefront of digital revolution.
                      </p>
                    </div>
                    {/* Team Photo Card */}
                    <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                      <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                        alt="Mansharp Team Celebration" 
                        className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* OUR CULTURE SECTION */}
                  <div className="space-y-8 pt-6">
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-extrabold text-white">Our Culture</h2>
                      <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
                        At Mansharp, we foster curiosity, passion, and innovation. At every stage, our team strives to be who you love to work with. Here is how we do it:
                      </p>
                    </div>

                    {/* Culture Value Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { title: 'Client-Centricity', desc: 'Clients are our heartbeat. We forge trust-based relationships, ensuring their sustained success.' },
                        { title: 'Global Mindset', desc: 'We act across cultures, understanding diverse markets and delivering universally adaptable solutions.' },
                        { title: 'Integrity & Data Integrity', desc: 'Transparency, trustworthiness, and data integrity define our actions.' },
                        { title: 'Collaboration', desc: 'Diverse perspectives drive well-rounded solutions.' },
                        { title: 'Innovation', desc: 'Transforming ideas into reality through AI and state-of-the-art tech.' },
                        { title: 'Excellence', desc: 'Unwavering standards drive our quality and client satisfaction.' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl space-y-2 hover:border-blue-500/50 transition-all">
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                          <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto px-4 py-12 space-y-6">
                <h2 className="text-3xl font-extrabold text-white text-center">Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }} className="space-y-4 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  <input type="email" placeholder="Business Email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  <textarea rows="4" placeholder="Tell us about your challenge..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required></textarea>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm transition-all">Submit Request</button>
                </form>
              </div>
            )}

          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto py-12 px-4">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl text-sm">Login</button>
              </form>
            ) : (
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 text-center">
                <h3 className="text-xl font-bold text-white">Welcome Admin!</h3>
                <p className="text-xs text-slate-400">You have successfully accessed the admin console.</p>
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-400 px-6 py-2.5 rounded-xl text-xs font-semibold">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER (Exact video style with Contact info, Addresses and Links) */}
      <footer className="border-t border-slate-800 bg-slate-900/90 text-slate-400 text-xs py-12 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-800">
          
          {/* Contact Details */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span className="text-blue-400 font-bold">📞</span> +1-732-668-8002
            </p>
            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span className="text-blue-400 font-bold">📞</span> +91-62843-00850
            </p>
            <p className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <span className="text-blue-400 font-bold">✉️</span> info@pentahara.com
            </p>
          </div>

          {/* Licenses & Tech */}
          <div className="space-y-2">
            <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-[11px]">Licenses</h4>
            <p className="hover:text-white cursor-pointer">Technologies</p>
            <p className="hover:text-white cursor-pointer">Integration & Consulting</p>
          </div>

          {/* Industries */}
          <div className="space-y-2">
            <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-[11px]">Industries</h4>
            <p className="hover:text-white cursor-pointer">Healthcare</p>
            <p className="hover:text-white cursor-pointer">Manufacturing</p>
            <p className="hover:text-white cursor-pointer">Public Sector</p>
            <p className="hover:text-white cursor-pointer">View More →</p>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-[11px]">Products</h4>
            <p className="hover:text-white cursor-pointer">Org Chart</p>
            <p className="hover:text-white cursor-pointer">Asset Management App</p>
            <p className="hover:text-white cursor-pointer">Expense Management App</p>
          </div>

        </div>

        {/* Addresses & Copyright Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-8 text-[11px]">
            <div>
              <span className="text-white font-bold block mb-1">USA</span>
              <p>131 Continental Drive, Suite 205, Newark, Delaware, 19713</p>
            </div>
            <div>
              <span className="text-white font-bold block mb-1">India</span>
              <p>SCO 515, Third Floor, Sector 70, Mohali, Punjab, 160055</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-500">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms And Conditions</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 text-center text-slate-500 text-[11px]">
          Copyright © {new Date().getFullYear()} Mansharp Technologies, All rights reserved.
        </div>
      </footer>

    </div>
  );
}