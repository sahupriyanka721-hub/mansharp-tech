import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('light');
  const [currentSlide, setCurrentSlide] = useState(0);

  // View Mode
  const [viewMode, setViewMode] = useState('home');
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Interactive ROI Calculator State
  const [teamSize, setTeamSize] = useState(50);
  const [cloudSpend, setCloudSpend] = useState(5000);

  const bannerSlides = [
    {
      id: 'about',
      title: 'Empowering Innovation & Possibilities Beyond Boundaries',
      desc: 'At Mansharp Technologies, we ignite possibilities through cutting-edge technology. Our journey is a roadmap to the future.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'About Us',
      contentTitle: 'We Are Mansharp Technologies',
      contentText: 'Embarking on our journey in 2013, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions.'
    },
    {
      id: 'ai-transformation',
      title: 'Shape the Future of Your Enterprise with AI Solutions',
      desc: 'Unlock limitless growth with custom AI models, Microsoft Copilot integration, and smart cloud architectures.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Mansharp AI',
      contentTitle: 'Transforming Business With Artificial Intelligence',
      contentText: 'Empower every individual, team, and industry with next-gen automated workflows, intelligent data pipelines, and secure enterprise AI.'
    },
    {
      id: 'ai-copilot-pricing',
      title: 'Microsoft Copilot Plans & Pricing',
      desc: 'Enterprise-grade security and privacy. Trusted by companies around the world.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'AI Pricing',
      contentTitle: 'Flexible Plans for Your Scale',
      contentText: 'Explore Microsoft Copilot pricing models tailored for individual productivity and organization-wide transformation.'
    }
  ];

  // Auto-sliding effect for carousel banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [bannerSlides.length]);

  useEffect(() => {
    const foundIndex = bannerSlides.findIndex(slide => slide.id === activeTab);
    if (foundIndex !== -1) {
      setCurrentSlide(foundIndex);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const isDark = theme === 'dark';
  const activeBanner = bannerSlides[currentSlide] || bannerSlides[0];

  const goToDetail = (tabId) => {
    setActiveTab(tabId);
    setViewMode('detail');
    setIsMobileMenuOpen(false);
    setIsAiDropdownOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/40 text-slate-900'}`}>
      
      {/* HEADER WITH SMOOTH GLASSMORPHISM */}
      <header className={`border-b backdrop-blur-xl sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-lg transition-all duration-300 ${isDark ? 'border-slate-800/80 bg-slate-900/90 text-white' : 'border-slate-200/80 bg-white/80 text-slate-900'}`}>
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => { setActiveTab('about'); setViewMode('home'); }}>
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold h-10 w-10 rounded-2xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/40 transform group-hover:scale-105 transition-transform">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg tracking-tight">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-bold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <button onClick={() => { setActiveTab('about'); setViewMode('home'); }} className="hover:text-blue-500 transition-colors py-2">Home</button>
            <button onClick={() => goToDetail('about')} className="hover:text-blue-500 transition-colors py-2">About Us</button>
            <button onClick={() => goToDetail('ai-transformation')} className="hover:text-blue-600 transition-colors text-blue-600 font-bold bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-900 shadow-sm">✨ AI Solutions</button>
            <button onClick={() => goToDetail('ai-copilot-pricing')} className="hover:text-blue-500 transition-colors py-2">Pricing</button>
            <button onClick={() => goToDetail('contact')} className="bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all transform hover:-translate-y-0.5">Contact Us</button>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className={`p-2 rounded-xl border text-xs font-semibold transition-all shadow-sm ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'}`}>
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button onClick={() => { setIsAdmin(!isAdmin); setViewMode('home'); }} className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white px-3 py-2 rounded-xl text-xs font-semibold shadow-md transition-all">
            {isAdmin ? 'Website View' : 'Admin 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow">
        {isAdmin ? (
          <div className="max-w-md mx-auto mt-20 p-8 border rounded-3xl shadow-2xl bg-white text-slate-900 transform animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Admin Portal</h2>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
              <input type="text" placeholder="Mobile" className="w-full p-3 border rounded-xl text-sm" required />
              <input type="password" placeholder="Password" className="w-full p-3 border rounded-xl text-sm" required />
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg">Login</button>
            </form>
          </div>
        ) : viewMode === 'detail' ? (
          /* DETAILED PAGE WITH SLIDE-IN ANIMATION */
          <div className="py-12 px-4 sm:px-8 max-w-4xl mx-auto space-y-6 animate-fade-in">
            <button onClick={() => setViewMode('home')} className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all transform hover:-translate-x-1">
              ← Back to Home
            </button>
            <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl">
              <img src={activeBanner.image} alt="" className="w-full h-full object-cover filter brightness-75 transform hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent flex flex-col justify-end p-6 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase w-max mb-2">{activeBanner.subtitle}</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold">{activeBanner.title}</h2>
              </div>
            </div>
            <div className={`p-8 rounded-3xl border shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xl font-extrabold text-blue-600 mb-3">{activeBanner.contentTitle}</h3>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{activeBanner.contentText}</p>
            </div>
          </div>
        ) : (
          /* HOME PAGE WITH SMOOTH SLIDING BANNER CAROUSEL */
          <div>
            <section className="relative h-[500px] sm:h-[580px] flex items-center justify-center text-center px-4 overflow-hidden">
              {bannerSlides.map((slide, idx) => (
                <div 
                  key={slide.id} 
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                >
                  <img src={slide.image} alt="" className="w-full h-full object-cover filter brightness-[0.45]" />
                </div>
              ))}
              
              <div className="relative z-10 max-w-4xl mx-auto space-y-4 text-white animate-fade-in">
                <span className="bg-blue-600/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  {activeBanner.subtitle}
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                  {activeBanner.title}
                </h2>
                <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto drop-shadow">
                  {activeBanner.desc}
                </p>
                <div className="pt-4 flex justify-center gap-2">
                  {bannerSlides.map((_, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* INTERACTIVE ROI CALCULATOR SECTION */}
            <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
              <div className={`p-8 sm:p-12 rounded-3xl border shadow-2xl transition-all duration-300 transform hover:shadow-blue-500/10 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase">Interactive Tool</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold mt-3">Calculate Your Enterprise ROI & Savings</h3>
                  <p className={`text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Slide to check your estimated annual cost savings with our cloud automation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-blue-500">Team Members: {teamSize}</label>
                      <input type="range" min="10" max="500" value={teamSize} onChange={(e) => setTeamSize(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 uppercase tracking-wider text-blue-500">Monthly Cloud Spend: ${cloudSpend}</label>
                      <input type="range" min="500" max="50000" step="500" value={cloudSpend} onChange={(e) => setCloudSpend(Number(e.target.value))} className="w-full accent-blue-600 cursor-pointer" />
                    </div>
                  </div>

                  <div className={`p-6 rounded-2xl border flex flex-col justify-between text-center md:text-left shadow-inner ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-blue-50/60 border-blue-100'}`}>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Estimated Annual Savings</h4>
                      <div className="text-3xl sm:text-4xl font-extrabold text-emerald-500 mt-2">
                        ${(cloudSpend * 12 * 0.35 + teamSize * 120).toLocaleString()}
                      </div>
                      <p className={`text-xs mt-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Based on ~35% efficiency boost via advanced cloud workflows.</p>
                    </div>
                    <button onClick={() => goToDetail('contact')} className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-xs font-bold shadow-lg transition-all transform hover:-translate-y-0.5">
                      Get Custom Audit ↗
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className={`border-t py-8 px-4 text-center text-xs ${isDark ? 'border-slate-800 bg-slate-900 text-slate-400' : 'border-slate-200 bg-slate-900 text-slate-400'}`}>
        <p>© 2026 Mansharp Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}