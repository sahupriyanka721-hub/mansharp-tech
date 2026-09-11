import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Dynamic States for Admin & User Panel
  const [services, setServices] = useState([
    { id: 1, title: 'Cloud Integration & Azure', desc: 'Seamlessly migrate workloads and scale enterprise architecture securely.' },
    { id: 2, title: 'Microsoft 365 & Copilot', desc: 'Empower productivity with AI-driven workflows and modern workspace tools.' },
    { id: 3, title: 'Power Platform Automation', desc: 'Build low-code apps and automate complex business processes.' }
  ]);
  const [portfolios, setPortfolios] = useState([
    { id: 1, title: 'Global Real Estate Onboarding', client: 'Auction.com' },
    { id: 2, title: 'Biotech Process Automation', client: 'US Biotech Corp' }
  ]);
  const [products, setProducts] = useState([
    { id: 1, title: 'Mansharp Org Chart Suite', price: '$499/mo' },
    { id: 2, title: 'Cloud Workflow Engine', price: '$899/mo' }
  ]);

  // Form input states
  const [newService, setNewService] = useState({ title: '', desc: '' });
  const [newPortfolio, setNewPortfolio] = useState({ title: '', client: '' });
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-white">Mansharp</h1>
            <p className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">Technologies</p>
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {!isAdmin && (
            <>
              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
                <button onClick={() => setActiveTab('home')} className={`transition-colors hover:text-blue-400 ${activeTab === 'home' ? 'text-blue-400 font-semibold' : ''}`}>Home</button>
                <button onClick={() => setActiveTab('solutions')} className={`transition-colors hover:text-blue-400 ${activeTab === 'solutions' ? 'text-blue-400 font-semibold' : ''}`}>Solutions</button>
                <button onClick={() => setActiveTab('services')} className={`transition-colors hover:text-blue-400 ${activeTab === 'services' ? 'text-blue-400 font-semibold' : ''}`}>Services</button>
                <button onClick={() => setActiveTab('industries')} className={`transition-colors hover:text-blue-400 ${activeTab === 'industries' ? 'text-blue-400 font-semibold' : ''}`}>Industries</button>
                <button onClick={() => setActiveTab('products')} className={`transition-colors hover:text-blue-400 ${activeTab === 'products' ? 'text-blue-400 font-semibold' : ''}`}>Products</button>
                <button onClick={() => setActiveTab('contact')} className={`transition-colors hover:text-blue-400 ${activeTab === 'contact' ? 'text-blue-400 font-semibold' : ''}`}>Contact</button>
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
              >
                <span className="text-base">{mobileMenuOpen ? '✕' : '☰'}</span>
                <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
              </button>
            </>
          )}

          <button
            onClick={() => {
              setIsAdmin(!isAdmin);
              setIsLoggedIn(false);
              setMobileMenuOpen(false);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-600/30 flex items-center gap-1.5"
          >
            {isAdmin ? 'User Portal' : 'Admin 🛡️'}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {!isAdmin && mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 border-b border-slate-800 px-6 py-5 flex flex-col gap-3 text-sm font-medium text-slate-300 backdrop-blur-2xl shadow-2xl animate-fadeIn">
          <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'home' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Home</button>
          <button onClick={() => { setActiveTab('solutions'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'solutions' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Solutions & Pillars</button>
          <button onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'services' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Services</button>
          <button onClick={() => { setActiveTab('industries'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'industries' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Industries We Serve</button>
          <button onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Products</button>
          <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'contact' ? 'bg-blue-600/15 text-blue-400 font-bold border border-blue-500/20' : 'hover:bg-slate-800/60'}`}>Contact Us</button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {!isAdmin ? (
          <div className="space-y-16 py-6">
            
            {/* HOME TAB */}
            {activeTab === 'home' && (
              <div className="space-y-20">
                {/* Hero Section */}
                <div className="text-center space-y-8 py-10 sm:py-16">
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase shadow-inner">
                    <span>✨ Your Trusted Enterprise Solutions Partner</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Unify, Secure, & Scale with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                      Next-Gen Digital Innovation
                    </span>
                  </h2>
                  <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                    Empowering global enterprises with custom cloud architecture, process automation, advanced analytics, and secure workspace environments.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <button onClick={() => setActiveTab('solutions')} className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all shadow-xl shadow-blue-600/25">
                      Explore Solutions →
                    </button>
                    <button onClick={() => setActiveTab('contact')} className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-7 py-3.5 rounded-2xl text-sm font-semibold transition-all">
                      Schedule Consultation
                    </button>
                  </div>
                </div>

                {/* Core Solution Pillars (Like Penthara) */}
                <div className="space-y-8">
                  <div className="text-center space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Our Solution Pillars</h3>
                    <h4 className="text-2xl sm:text-4xl font-extrabold text-white">Strategic Enhancements for Enterprise</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-8 rounded-3xl space-y-4 shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xl">01</div>
                      <h5 className="text-xl font-bold text-white">Department Solutions</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Optimize workflows across HR, Sales, Finance, and Operations with custom integrated tech frameworks.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-8 rounded-3xl space-y-4 shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-xl">02</div>
                      <h5 className="text-xl font-bold text-white">Cloud & AI Integration</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Deploy secure cloud environments, enterprise security posture, and AI-powered automation solutions.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 p-8 rounded-3xl space-y-4 shadow-xl transition-all">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-xl">03</div>
                      <h5 className="text-xl font-bold text-white">Advisory & Licensing</h5>
                      <p className="text-slate-400 text-sm leading-relaxed">Navigate complex enterprise licensing optimization and expert roadmap consulting to reduce overhead costs.</p>
                    </div>
                  </div>
                </div>

                {/* Industries Section */}
                <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800/80 p-8 sm:p-12 rounded-3xl space-y-8">
                  <div className="text-center space-y-2">
                    <h3 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Global Reach</h3>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white">Industries We Transform</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {['Healthcare & Pharma', 'Banking & Finance', 'Retail & Commerce', 'Real Estate & PropTech', 'Manufacturing & Oil', 'Technology & SaaS', 'Insurance & Legal', 'Transportation & Media'].map((ind, idx) => (
                      <div key={idx} className="bg-slate-950/60 border border-slate-800/60 py-4 px-3 rounded-2xl text-sm font-semibold text-slate-300 hover:border-blue-500/50 transition-all">
                        {ind}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SOLUTIONS TAB */}
            {activeTab === 'solutions' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Department Solutions & Architecture</h2>
                  <p className="text-slate-400 text-sm sm:text-base">Tailored digital architecture designed to address unique departmental challenges across your enterprise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: 'Human Resources', desc: 'Digitize onboarding flows, employee engagement, and automated compliance tracking.' },
                    { title: 'Sales & Marketing', desc: 'Enhance lead generation, customer behavioral insights, and intelligent pipeline tracking.' },
                    { title: 'Business Operations', desc: 'Improve supply chain transparency, eliminate bottlenecks, and automate routine operational tasks.' },
                    { title: 'IT & Engineering', desc: 'Strengthen enterprise security posture, device management, and zero-trust framework enforcement.' }
                  ].map((sol, i) => (
                    <div key={i} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-3 shadow-xl">
                      <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SERVICES TAB */}
            {activeTab === 'services' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Services That Transform Work</h2>
                  <p className="text-slate-400 text-sm">Professional consulting and implementation services for modern enterprises.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {services.map((s) => (
                    <div key={s.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-4 shadow-xl">
                      <h3 className="text-xl font-bold text-white">{s.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* INDUSTRIES TAB */}
            {activeTab === 'industries' && (
              <div className="space-y-8 py-6 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Clients Across Global Industries</h2>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                  From high-growth startups to multinational corporations, we deliver scalable digital transformation solutions that optimize ROI and future-proof operations.
                </p>
                <div className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl text-left space-y-4">
                  <h3 className="text-xl font-bold text-white">What Leaders Say</h3>
                  <p className="text-slate-300 italic text-sm leading-relaxed">
                    "Mansharp Technologies delivers work with exceptional quality. Their ability to implement complex cloud and software solutions with ease sets them apart from the competition."
                  </p>
                  <p className="text-blue-400 text-xs font-semibold">— Enterprise Technology Director</p>
                </div>
              </div>
            )}

            {/* PRODUCTS TAB */}
            {activeTab === 'products' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enterprise Software Products</h2>
                  <p className="text-slate-400 text-sm">Ready-to-deploy suites designed to maximize productivity.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {products.map((prod) => (
                    <div key={prod.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl flex justify-between items-center shadow-xl">
                      <div>
                        <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                        <p className="text-slate-400 text-xs mt-1">Enterprise-Grade Solution</p>
                      </div>
                      <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 font-extrabold px-4 py-2 rounded-xl text-sm">
                        {prod.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CONTACT TAB */}
            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto space-y-6 py-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-extrabold text-white">Get in Touch With Our Experts</h2>
                  <p className="text-slate-400 text-sm">Request a personalized consultation and implementation roadmap.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); alert('Consultation request sent successfully!'); setContactForm({ name: '', email: '', message: '' }); }} className="space-y-4 bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Full Name</label>
                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Business Email</label>
                    <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Project Details / Message</label>
                    <textarea rows="4" value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/25 text-sm">Submit Request</button>
                </form>
              </div>
            )}
          </div>
        ) : (
          /* ADMIN PANEL */
          <div className="w-full max-w-xl mx-auto py-8">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6 backdrop-blur-xl">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">Admin Portal Login</h3>
                  <p className="text-xs text-slate-400">Enter authorized credentials to manage platform</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Mobile Number</label>
                    <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg text-sm">Authenticate</button>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-md">
                  <div>
                    <h3 className="font-bold text-lg text-white">Admin Dashboard</h3>
                    <p className="text-xs text-slate-400">Manage Services, Portfolios, and Products</p>
                  </div>
                  <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/10 border border-rose-500/20 text-rose-400 hover:bg-rose-600/20 px-4 py-2 rounded-xl text-xs font-semibold transition-all">
                    Logout
                  </button>
                </div>

                {/* Manage Services */}
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-md">
                  <h4 className="font-bold text-white text-md">Manage Services</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="text" placeholder="Service Title" value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                    <input type="text" placeholder="Description" value={newService.desc} onChange={(e) => setNewService({...newService, desc: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                    <button onClick={() => { if(newService.title) { setServices([...services, {id: Date.now(), ...newService}]); setNewService({title:'', desc:''}); }}} className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-xs font-semibold">Add</button>
                  </div>
                  <div className="space-y-2 pt-2">
                    {services.map(s => (
                      <div key={s.id} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/60 text-xs">
                        <span>{s.title}</span>
                        <button onClick={() => setServices(services.filter(x => x.id !== s.id))} className="text-rose-400 hover:text-rose-300 font-semibold">Delete</button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manage Products */}
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4 shadow-md">
                  <h4 className="font-bold text-white text-md">Manage Products</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="text" placeholder="Product Name" value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                    <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                    <button onClick={() => { if(newProduct.title) { setProducts([...products, {id: Date.now(), ...newProduct}]); setNewProduct({title:'', price:''}); }}} className="bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl text-xs font-semibold">Add</button>
                  </div>
                  <div className="space-y-2 pt-2">
                    {products.map(prod => (
                      <div key={prod.id} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/60 text-xs">
                        <span>{prod.title} - {prod.price}</span>
                        <button onClick={() => setProducts(products.filter(x => x.id !== prod.id))} className="text-rose-400 hover:text-rose-300 font-semibold">Delete</button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500 bg-slate-900/50">
        © {new Date().getFullYear()} Mansharp Technologies Private Limited. All rights reserved.
      </footer>
    </div>
  );
}