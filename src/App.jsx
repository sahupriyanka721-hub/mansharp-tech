import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');
  const [currentSlide, setCurrentSlide] = useState(0);

  // AI Dropdown state (Click karne par hi open hoga)
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);

  const bannerSlides = [
    {
      id: 'about',
      title: 'Empowering Innovation & Possibilities Beyond Boundaries',
      desc: 'At Mansharp Technologies, we ignite possibilities through cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'About Us',
      contentTitle: 'We Are Mansharp Technologies',
      contentText: 'Embarking on our journey in 2013, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions.'
    },
    {
      id: 'ai-solutions',
      title: 'Shape the Future of Your Enterprise with AI Solutions',
      desc: 'Unlock limitless growth with custom AI models, Microsoft Copilot integration, and smart cloud architectures.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Mansharp AI',
      contentTitle: 'Transforming Business With Artificial Intelligence',
      contentText: 'Empower every individual, team, and industry with next-gen automated workflows, intelligent data pipelines, and secure enterprise AI.'
    },
    {
      id: 'ai-copilot-pricing',
      title: 'Microsoft Copilot Pricing & Plans',
      desc: 'Enterprise-grade security and privacy. Trusted by companies around the world.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'AI Pricing',
      contentTitle: 'Flexible Plans for Your Scale',
      contentText: 'Explore Microsoft Copilot pricing models tailored for individual productivity and organization-wide transformation.'
    },
    {
      id: 'ai-services',
      title: 'Explore Our Range of AI Powered Services',
      desc: 'Curated AI services for successful AI adoption and implementation across your enterprise.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'AI Services',
      contentTitle: 'Curated AI Adoption Services',
      contentText: 'From custom Copilot studio integrations to building your own Azure AI services, we guide you at every step.'
    },
    {
      id: 'ai-business-leaders',
      title: 'AI for Business Leaders',
      desc: 'Strategic insights and executive frameworks to leverage artificial intelligence effectively.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Executive AI',
      contentTitle: 'Leading With Intelligence',
      contentText: 'Empower leadership teams with data-driven decision tools and secure enterprise AI guidelines.'
    },
    {
      id: 'contact',
      title: 'Get in Touch With Our Experts',
      desc: 'Let us discuss how we can accelerate your business growth through advanced technology solutions.',
      image: 'https://images.unsplash.com/photo-1423596653951-9b62843232f3?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Contact Us',
      contentTitle: 'We Are Here to Help',
      contentText: 'Reach out to our offices or drop us a message to start building your next big digital initiative.'
    }
  ];

  useEffect(() => {
    const foundIndex = bannerSlides.findIndex(slide => slide.id === activeTab);
    if (foundIndex !== -1) {
      setCurrentSlide(foundIndex);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

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

  const isDark = theme === 'dark';
  const activeBanner = bannerSlides[currentSlide] || bannerSlides[0];

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' : 'bg-slate-50 text-slate-900 selection:bg-blue-500 selection:text-white'}`}>
      
      {/* HEADER */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl transition-colors duration-300 ${isDark ? 'border-slate-800/80 bg-slate-900/95' : 'border-slate-200 bg-white/95'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg">
            M
          </div>
          <div>
            <h1 className={`font-extrabold text-base sm:text-lg leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* NAVIGATION MENUS WITH CLICK-BASED AI DROPDOWN */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            <button onClick={() => setActiveTab('about')} className="hover:text-blue-500 transition-colors">About</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-blue-500 transition-colors">Industries</button>
            
            {/* AI Menu Option - Click karne par hi open hoga */}
            <div className="relative">
              <button 
                onClick={() => setIsAiDropdownOpen(!isAiDropdownOpen)}
                className="hover:text-blue-500 flex items-center gap-1 transition-colors text-blue-400 font-bold"
              >
                ✨ AI Solutions {isAiDropdownOpen ? '▲' : '▼'}
              </button>

              {isAiDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <button 
                    onClick={() => { setActiveTab('ai-solutions'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-slate-100 text-slate-800'}`}
                  >
                    AI Transformation
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-copilot-pricing'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}
                  >
                    Microsoft Copilot Pricing
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-services'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}
                  >
                    Services
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-business-leaders'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}
                  >
                    AI for Business Leaders
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setActiveTab('contact')} className={`border px-4 py-2 rounded-xl transition-all ${isDark ? 'bg-rose-900/30 border-rose-700/50 hover:bg-rose-900/50 text-rose-200' : 'bg-rose-50 border-rose-200 hover:bg-rose-100 text-rose-600'}`}>Contact us</button>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className={`p-2.5 rounded-xl border text-sm font-semibold ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN BANNER SECTION */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            <div className="relative w-full h-[480px] sm:h-[580px] flex items-center justify-center text-center px-4 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <img src={activeBanner.image} alt="Banner" className={`w-full h-full object-cover scale-105 ${isDark ? 'brightness-[0.35]' : 'brightness-[0.55]'}`} />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/40' : 'from-slate-900/60 via-slate-900/20'} to-transparent`}></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto space-y-6">
                <span className="bg-blue-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                  {activeBanner.subtitle}
                </span>
                <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                  {activeBanner.title}
                </h1>
                <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
                  {activeBanner.desc}
                </p>
                <div className="flex justify-center gap-4 pt-2">
                  <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-xl">
                    Get Started Today
                  </button>
                </div>
              </div>
            </div>
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
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-500 px-6 py-2.5 rounded-xl text-xs font-semibold">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className={`border-t text-xs py-8 px-4 text-center mt-auto ${isDark ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-200 bg-white text-slate-600'}`}>
        Copyright © {new Date().getFullYear()} Mansharp Technologies, All rights reserved.
      </footer>
    </div>
  );
}