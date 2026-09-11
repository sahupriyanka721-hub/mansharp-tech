import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown States for Header Navigation (Penthara style)
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Dynamic States for Admin & User Panel
  const [services, setServices] = useState([
    { id: 1, title: 'Cloud Integration & Azure', desc: 'Seamlessly migrate workloads and scale enterprise architecture securely with robust disaster recovery.' },
    { id: 2, title: 'Microsoft 365 & Copilot', desc: 'Empower digital workspaces and productivity with AI-driven workflows and intelligent collaboration.' },
    { id: 3, title: 'Power Platform Automation', desc: 'Build low-code custom apps and transform legacy manual processes into automated cost-saving workflows.' }
  ]);
  
  const [caseStudies, setCaseStudies] = useState([
    { id: 1, title: 'Enhancing Onboarding Process for Auction.com', client: 'US Real Estate Leader', desc: 'Transformed onboarding management and form automation targeting high scalability and seamless UX.' },
    { id: 2, title: 'Streamlining Legacy Approvals for Biotech Corp', client: 'US Biotech Enterprise', desc: 'Automated legacy paper trails into dynamic, real-time cost-saving flows using Power Automate and Teams.' }
  ]);

  const [products, setProducts] = useState([
    { id: 1, title: 'AIM App (Asset & Inventory Management)', price: '$499/mo', desc: 'Effortlessly track and manage all your company assets in one place.' },
    { id: 2, title: 'Penthara Org Chart', price: '$899/mo', desc: 'Instantly view & search your team hierarchy with real-time Org Charts.' }
  ]);

  const [newService, setNewService] = useState({ title: '', desc: '' });
  const [newProduct, setNewProduct] = useState({ title: '', price: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (mobile === '9876543210' && password === 'admin123') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid Mobile Number or Password');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white" onClick={() => setActiveDropdown(null)}>
      {/* Header with Penthara Style Dropdowns */}
      <header className="border-b border-slate-800/80 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-white">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* Desktop Navigation with Dropdowns */}
        {!isAdmin && (
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 relative">
            
            {/* About Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')} 
                className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2"
              >
                About <span className="text-xs">▼</span>
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50">
                  <button onClick={() => { setActiveTab('home'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">About Us</button>
                  <button onClick={() => { setActiveTab('solutions'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Why Choose Us</button>
                  <button onClick={() => { setActiveTab('home'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Leadership</button>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')} 
                className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2"
              >
                Industries <span className="text-xs">▼</span>
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1 z-50">
                  {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => (
                    <button key={idx} onClick={() => { setActiveTab('home'); setActiveDropdown(null); }} className="text-left px-2 py-1.5 rounded-lg text-[11px] hover:bg-slate-800 text-slate-300">{ind}</button>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')} 
                className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2"
              >
                Resources & Insights <span className="text-xs">▼</span>
              </button>
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50">
                  <button onClick={() => { setActiveTab('caseStudies'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Case Studies</button>
                  <button onClick={() => { setActiveTab('services'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Blogs & Articles</button>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')} 
                className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2"
              >
                Solutions <span className="text-xs">▼</span>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50">
                  <button onClick={() => { setActiveTab('solutions'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Department Solutions</button>
                  <button onClick={() => { setActiveTab('services'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Licenses & Tech</button>
                  <button onClick={() => { setActiveTab('services'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300">Integration & Consulting</button>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')} 
                className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2"
              >
                Products <span className="text-xs">▼</span>
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50">
                  <button onClick={() => { setActiveTab('products'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300 font-bold">AIM App (Asset Mgmt)</button>
                  <button onClick={() => { setActiveTab('products'); setActiveDropdown(null); }} className="text-left px-3 py-2 rounded-xl text-xs hover:bg-slate-800 text-slate-300 font-bold">Mansharp Org Chart</button>
                </div>
              )}
            </div>

            <button onClick={() => setActiveTab('contact')} className="hover:text-blue-400 transition-colors">Contact Us</button>
          </nav>
        )}

        {/* Actions & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {!isAdmin && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden bg-slate-800 hover:bg-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <span>{mobileMenuOpen ? '✕' : '☰'}</span>
              <span>Menu</span>
            </button>
          )}

          <button
            onClick={() => {
              setIsAdmin(!isAdmin);
              setIsLoggedIn(false);
              setMobileMenuOpen(false);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/30"
          >
            {isAdmin ? 'User Portal' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {!isAdmin && mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 flex flex-col gap-3 text-sm font-medium text-slate-300 shadow-2xl">
          <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Home / About Us</button>
          <button onClick={() => { setActiveTab('solutions'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Solutions & Departments</button>
          <button onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Services & Insights</button>
          <button onClick={() => { setActiveTab('caseStudies'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Case Studies</button>
          <button onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Products (AIM & Org Chart)</button>
          <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-400">Contact Us</button>
        </div>
      )}

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {!isAdmin ? (
          <div className="space-y-20 py-6">
            
            {activeTab === 'home' && (
              <div className="space-y-20">
                {/* Hero Section */}
                <div className="text-center space-y-8 py-12 sm:py-20">
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase">
                    <span>✨ Strategic Enhancements for Enterprise Solutions</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Empowering Businesses <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                      Through Digital Innovation
                    </span>
                  </h2>
                  <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                    We deliver cutting-edge software solutions, enterprise web development, and robust cloud services tailored to scale your business.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <button onClick={() => setActiveTab('services')} className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all shadow-xl shadow-blue-600/25">
                      Explore Services →
                    </button>
                    <button onClick={() => setActiveTab('contact')} className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all">
                      Contact Us
                    </button>
                  </div>
                </div>

                {/* Core Pillars Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {['Department Solutions', 'Cloud & Tech', 'Integration & Consulting', 'Licensing Optimization'].map((title, i) => (
                    <div key={i} className="bg-slate-900/60 border border-slate-800 p-6 rounded-3xl space-y-3 shadow-xl">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg">0{i+1}</div>
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">Tailored Microsoft and cloud solutions optimized to streamline your organization workflows.</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Solutions & Strategic Enhancements</h2>
                  <p className="text-slate-400 text-sm">Tailored architecture designed for modern enterprise departments.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {['Human Resources Management', 'Sales & CRM Tracking', 'Operations Automation', 'IT Infrastructure & Security'].map((item, idx) => (
                    <div key={idx} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-2">
                      <h3 className="text-xl font-bold text-white">{item}</h3>
                      <p className="text-slate-400 text-sm">Advanced platform integrations to accelerate corporate growth and operational transparency.</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Core Services</h2>
                  <p className="text-slate-400 text-sm">Empowering your team with smart digital services.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {services.map((s) => (
                    <div key={s.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-4 shadow-xl">
                      <h3 className="text-xl font-bold text-white">{s.title}</h3>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'caseStudies' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Success Stories & Case Studies</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {caseStudies.map((cs) => (
                    <div key={cs.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-3">
                      <span className="text-xs font-bold text-blue-400 uppercase bg-blue-500/10 px-3 py-1 rounded-full">{cs.client}</span>
                      <h3 className="text-xl font-bold text-white pt-2">{cs.title}</h3>
                      <p className="text-slate-400 text-sm">{cs.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mansharp Products</h2>
                  <p className="text-slate-400 text-sm">Discover our proprietary enterprise software applications.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {products.map((prod) => (
                    <div key={prod.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                        <p className="text-slate-400 text-xs mt-1">{prod.desc}</p>
                      </div>
                      <span className="bg-blue-600/20 text-blue-400 font-extrabold px-4 py-2.5 rounded-xl text-sm">
                        {prod.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto space-y-6 py-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-extrabold text-white">Contact Us</h2>
                  <p className="text-slate-400 text-sm">Tell us about your challenge or need and we will get back to you soon.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); alert('Query submitted!'); setContactForm({name:'', email:'', message:''}); }} className="space-y-4 bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl">
                  <input type="text" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                  <input type="email" placeholder="Business Email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                  <textarea rows="4" placeholder="Message / Requirements" value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required></textarea>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm">Submit</button>
                </form>
              </div>
            )}
          </div>
        ) : (
          /* Admin Panel */
          <div className="w-full max-w-xl mx-auto py-8">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold text-white">Admin Login</h3>
                  <p className="text-xs text-slate-400">Mobile: 9876543210 | Password: admin123</p>
                </div>
                <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm">Login</button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h3 className="font-bold text-white">Admin Dashboard</h3>
                  <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-400 px-4 py-2 rounded-xl text-xs font-semibold">Logout</button>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-white text-sm">Add New Service</h4>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Title" value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <input type="text" placeholder="Description" value={newService.desc} onChange={(e) => setNewService({...newService, desc: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <button onClick={() => { if(newService.title) { setServices([...services, {id: Date.now(), ...newService}]); setNewService({title:'', desc:''}); }}} className="bg-blue-600 px-4 py-2 rounded-xl text-xs">Add</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Penthara Style Footer */}
      <footer className="border-t border-slate-800/80 py-12 bg-slate-900/70 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-sm">MANSHARP TECHNOLOGIES</h4>
            <p className="leading-relaxed">Empowering enterprises with intelligent solutions and cloud architecture.</p>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Solutions</h5>
            <ul className="space-y-2">
              <li>Department Solutions</li>
              <li>Licenses</li>
              <li>Technologies</li>
              <li>Integration & Consulting</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Industries</h5>
            <ul className="space-y-2">
              <li>Healthcare</li>
              <li>Manufacturing</li>
              <li>Public Sector</li>
              <li>View More →</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-3">Contact</h5>
            <p>Email: info@mansharp.com</p>
            <p className="mt-2">USA & India Offices</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 border-t border-slate-800/60 mt-8 pt-6 text-center">
          © {new Date().getFullYear()} Mansharp Technologies Private Limited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}