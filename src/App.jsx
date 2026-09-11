import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');
  const [currentSlide, setCurrentSlide] = useState(0);

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
      id: 'why-choose-us',
      title: 'Why Choose Mansharp Technologies',
      desc: 'Discover why leading enterprises trust our Microsoft Certified Professionals for unmatched digital evolution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Excellence & Trust',
      contentTitle: 'Microsoft Solutions Expertise',
      contentText: 'We deliver innovative, growth-focused solutions that help businesses thrive and stay ahead.'
    },
    {
      id: 'leadership',
      title: 'Together We Lead!',
      desc: 'Guiding the path of digital transformation with decades of core technological and strategic expertise.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Visionary Leadership',
      contentTitle: 'Guiding With Vision & Integrity',
      contentText: 'Our leaders foster an environment of accountability, continuous growth, and long-term strategic success.'
    },
    {
      id: 'healthcare',
      title: 'Transforming Healthcare with Smart Solutions',
      desc: 'Secure, compliant, and advanced digital platforms designed for modern healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Healthcare Industry',
      contentTitle: 'Next-Gen Patient Care Systems',
      contentText: 'We build HIPAA-compliant, highly secure cloud solutions that streamline clinical workflows.'
    },
    {
      id: 'education',
      title: 'Smart Education & E-Learning Platforms',
      desc: 'Empowering institutions and learners worldwide with interactive, scalable cloud infrastructures.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Education Industry',
      contentTitle: 'Digital Transformation for Schools',
      contentText: 'Modernizing classrooms and remote learning frameworks with robust educational management systems.'
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
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            M
          </div>
          <div>
            <h1 className={`font-extrabold text-base sm:text-lg leading-tight tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* NAVIGATION MENUS WITH AI OPTIONS */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            
            {/* AI Solutions Direct Links (Jaise video mein upar dikhta hai) */}
            <button onClick={() => setActiveTab('ai-copilot-pricing')} className="hover:text-blue-500 transition-colors">
              Microsoft Copilot Pricing
            </button>
            <button onClick={() => setActiveTab('ai-services')} className="hover:text-blue-500 transition-colors">
              Services
            </button>
            <button onClick={() => setActiveTab('ai-business-leaders')} className="hover:text-blue-500 transition-colors">
              AI for Business Leaders
            </button>

            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                About <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('about')} className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>About Us</button>
                <button onClick={() => setActiveTab('why-choose-us')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Why Choose Us</button>
                <button onClick={() => setActiveTab('leadership')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Leadership</button>
              </div>
            </div>

            {/* Solutions Menu with nested AI options */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Solutions <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-60 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('ai-solutions')} className={`text-left px-3 py-2 rounded-xl text-xs font-bold text-blue-400 transition-colors ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>✨ Explore AI Solutions</button>
                <button onClick={() => setActiveTab('healthcare')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Healthcare Solutions</button>
                <button onClick={() => setActiveTab('education')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-700'}`}>Education Solutions</button>
              </div>
            </div>

            <button onClick={() => setActiveTab('contact')} className={`border px-4 py-2 rounded-xl transition-all ${isDark ? 'bg-rose-900/30 border-rose-700/50 hover:bg-rose-900/50 text-rose-200' : 'bg-rose-50 border-rose-200 hover:bg-rose-100 text-rose-600'}`}>Contact us</button>
          </nav>
        )}

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2.5 rounded-xl border text-sm font-semibold transition-all flex items-center justify-center ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* BANNER & CONTENT SECTION */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            <div className="relative w-full h-[480px] sm:h-[580px] flex items-center justify-center text-center px-4 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <img 
                  key={activeBanner.image}
                  src={activeBanner.image} 
                  alt="Banner" 
                  className={`w-full h-full object-cover scale-105 transition-all duration-700 ${isDark ? 'brightness-[0.35]' : 'brightness-[0.55]'}`}
                />
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
                  <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-xl">
                    Get Started Today
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 z-20 flex gap-2 overflow-x-auto max-w-[90%] px-2 py-1">
                {bannerSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setActiveTab(slide.id);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-6 bg-blue-500' : 'w-2 bg-white/50 hover:bg-white'}`}
                    title={slide.title}
                  />
                ))}
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                  <span className="text-blue-500 font-bold uppercase text-xs tracking-widest">{activeBanner.subtitle}</span>
                  <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeBanner.contentTitle}</h2>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {activeBanner.contentText}
                  </p>
                </div>
                <div className={`rounded-3xl overflow-hidden border shadow-2xl ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                  <img 
                    src={activeBanner.image} 
                    alt="Detail Feature" 
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
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