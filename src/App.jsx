import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('light'); // Default ab light/attractive rakha hai
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);

  const bannerSlides = [
    {
      id: 'about',
      title: 'Empowering Innovation & Possibilities Beyond Boundaries',
      desc: 'At Mansharp Technologies, we ignite possibilities through cutting-edge technology. Our journey is a roadmap to the future.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'About Us',
      contentTitle: 'We Are Mansharp Technologies',
      contentText: 'Embarking on our journey in 2013, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions. We dream of bringing remarkable individuals together and transforming technology for positive change.'
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
      id: 'why-choose-us',
      title: 'Why Choose Mansharp Technologies',
      desc: 'Discover why leading enterprises trust our Microsoft Certified Professionals for unmatched digital evolution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Excellence & Trust',
      contentTitle: 'Microsoft Solutions Expertise',
      contentText: 'We deliver innovative, growth-focused solutions that help businesses thrive and stay ahead in today’s fast-changing digital landscape.'
    },
    {
      id: 'life-at-mansharp',
      title: 'Life At Mansharp',
      desc: 'A culture built on collaboration, continuous learning, celebration, and pushing boundaries together.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Our Starfleet Culture',
      contentTitle: 'Where Passion Meets Innovation',
      contentText: 'Our workplace thrives on diverse perspectives, continuous learning, and celebrating every success together as one unified family.'
    },
    {
      id: 'leadership',
      title: 'Together We Lead!',
      desc: 'Guiding the path of digital transformation with decades of core technological and strategic expertise.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Visionary Leadership',
      contentTitle: 'Guiding With Vision & Integrity',
      contentText: 'Our leaders foster an environment of accountability, continuous growth, and long-term strategic success for global clients.'
    },
    {
      id: 'contact',
      title: 'Get in Touch With Our Experts',
      desc: 'Let us discuss how we can accelerate your business growth through advanced technology solutions.',
      image: 'https://images.unsplash.com/photo-1423596653951-9b62843232f3?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Contact Us',
      contentTitle: 'We Are Here to Help',
      contentText: 'Reach out to our offices in USA or India, or drop us a message to start building your next big digital initiative.'
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
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-gradient-to-br from-slate-50 via-indigo-50/20 to-blue-50/30 text-slate-900'}`}>
      
      {/* HEADER - Light/Dark Sleek Combo */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-md transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-900/95 text-white' : 'border-slate-200/80 bg-white/90 text-slate-900'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-600 font-bold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* NAVIGATION MENUS */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            
            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-600 flex items-center gap-1 transition-colors">
                About <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                <button onClick={() => setActiveTab('about')} className="text-left px-3 py-2 rounded-xl text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">About Us</button>
                <button onClick={() => setActiveTab('why-choose-us')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors">Why Choose Us</button>
                <button onClick={() => setActiveTab('life-at-mansharp')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors">Life At Mansharp</button>
                <button onClick={() => setActiveTab('leadership')} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors">Leadership</button>
              </div>
            </div>

            {/* AI Solutions Click-Based Dropdown Menu */}
            <div className="relative py-2">
              <button 
                onClick={() => setIsAiDropdownOpen(!isAiDropdownOpen)}
                className="hover:text-blue-600 flex items-center gap-1 transition-colors text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm"
              >
                ✨ AI Solutions <span className="text-[10px]">{isAiDropdownOpen ? '▲' : '▼'}</span>
              </button>

              {isAiDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                  <button 
                    onClick={() => { setActiveTab('ai-transformation'); setIsAiDropdownOpen(false); }} 
                    className="text-left px-3 py-2 rounded-xl text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    AI Transformation
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-copilot-pricing'); setIsAiDropdownOpen(false); }} 
                    className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Microsoft Copilot Pricing
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-services'); setIsAiDropdownOpen(false); }} 
                    className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    AI Services
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-business-leaders'); setIsAiDropdownOpen(false); }} 
                    className="text-left px-3 py-2 rounded-xl text-xs hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    AI for Business Leaders
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => setActiveTab('contact')} className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all">Contact Us</button>
          </nav>
        )}

        {/* Theme Toggle & Admin Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center shadow-sm ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
          >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Accents'}
          </button>

          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-semibold transition-all shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            {/* DYNAMIC BANNER & IMAGE SLIDER SECTION */}
            <div className="relative w-full h-[480px] sm:h-[580px] flex items-center justify-center text-center px-4 overflow-hidden shadow-xl">
              <div className="absolute inset-0 z-0">
                <img 
                  key={activeBanner.image}
                  src={activeBanner.image} 
                  alt="Banner" 
                  className="w-full h-full object-cover scale-105 brightness-[0.55] transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
              </div>

              {/* Slider Content */}
              <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fadeIn">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {activeBanner.subtitle}
                </span>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                  {activeBanner.title}
                </h1>
                <p className="text-slate-200 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
                  {activeBanner.desc}
                </p>
                <div className="flex justify-center gap-4 pt-2">
                  <button onClick={() => setActiveTab('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold px-7 py-3.5 rounded-2xl text-xs sm:text-sm transition-all shadow-xl shadow-blue-600/30">
                    Get Started Today 🚀
                  </button>
                </div>
              </div>

              {/* Slider Navigation Dots */}
              <div className="absolute bottom-6 z-20 flex gap-2 overflow-x-auto max-w-[90%] px-2 py-1">
                {bannerSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setActiveTab(slide.id);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-blue-500 shadow-md' : 'w-2 bg-white/50 hover:bg-white'}`}
                    title={slide.title}
                  />
                ))}
              </div>
            </div>

            {/* LIGHT AND DARK MIXED CARDS SECTION FOR ATTRACTIVE LOOK */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
              
              {/* Highlight Info Box */}
              <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100/80'}`}>
                <div className="space-y-4">
                  <span className="bg-blue-100 text-blue-700 font-bold uppercase text-[10px] tracking-wider px-3 py-1 rounded-md">{activeBanner.subtitle}</span>
                  <h2 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeBanner.contentTitle}</h2>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeBanner.contentText}
                  </p>
                  <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md">
                    Speak With Expert
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img src={activeBanner.image} alt="Feature" className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>

              {/* Colorful Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                {[
                  { title: '⚡ Fast Performance', desc: 'Optimized cloud execution with ultra-low latency frameworks.', color: 'from-amber-500/10 to-orange-500/10 border-orange-200 text-orange-600' },
                  { title: '🔒 High Security', desc: 'Enterprise-grade encryption and secure access controls.', color: 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-600' },
                  { title: '💡 Smart AI Ready', desc: 'Integrated seamlessly with modern Microsoft Copilot systems.', color: 'from-purple-500/10 to-pink-500/10 border-purple-200 text-purple-600' }
                ].map((item, i) => (
                  <div key={i} className={`p-6 rounded-2xl border bg-gradient-to-br ${item.color} shadow-sm space-y-2 hover:shadow-md transition-all`}>
                    <h3 className="font-bold text-sm">{item.title}</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto py-12 px-4">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="border bg-white border-slate-200 p-8 rounded-3xl space-y-6 shadow-xl">
                <h3 className="text-2xl font-bold text-center text-slate-900">Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full border rounded-xl px-4 py-3 text-sm bg-slate-50 border-slate-200 text-slate-900 focus:outline-blue-500" required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded-xl px-4 py-3 text-sm bg-slate-50 border-slate-200 text-slate-900 focus:outline-blue-500" required />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm shadow-md">Login</button>
              </form>
            ) : (
              <div className="border bg-white border-slate-200 p-8 rounded-3xl space-y-6 text-center shadow-xl">
                <h3 className="text-xl font-bold text-slate-900">Welcome Admin!</h3>
                <p className="text-xs text-slate-600">You have successfully accessed the admin console.</p>
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-50 text-rose-600 px-6 py-2.5 rounded-xl text-xs font-semibold border border-rose-100">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pt-16 pb-8 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
              <div className="bg-blue-600 text-white font-extrabold h-9 w-9 rounded-xl flex items-center justify-center text-base shadow-lg">M</div>
              <div>
                <h2 className="font-extrabold text-base leading-tight text-white">MANSHARP</h2>
                <p className="text-[9px] tracking-widest text-blue-400 font-semibold uppercase">TECHNOLOGIES</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Igniting possibilities through cutting-edge Microsoft solutions and enterprise AI integration.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveTab('why-choose-us')} className="hover:text-white transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => setActiveTab('ai-transformation')} className="hover:text-white transition-colors">AI Solutions</button></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Support & Contact</h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors">Contact Us</button></li>
              <li><span className="text-slate-400">📞 +1 (987) 654-3210</span></li>
              <li><span className="text-slate-400">✉️ contact@mansharptech.com</span></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Offices</h3>
            <p className="text-xs text-slate-400">USA & India Global Development Centers.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>Copyright © {new Date().getFullYear()} Mansharp Technologies, All rights reserved.</p>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-slate-300">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}