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
    { id: 1, title: 'Cloud Integration & Azure', desc: 'Seamlessly migrate workloads and scale enterprise architecture securely with robust disaster recovery.' },
    { id: 2, title: 'Microsoft 365 & Copilot', desc: 'Empower digital workspaces and productivity with AI-driven workflows and intelligent collaboration.' },
    { id: 3, title: 'Power Platform Automation', desc: 'Build low-code custom apps and transform legacy manual processes into automated cost-saving workflows.' }
  ]);
  
  const [caseStudies, setCaseStudies] = useState([
    { id: 1, title: 'Enhancing Onboarding Process for Auction.com', client: 'US Real Estate Leader', desc: 'Transformed onboarding management and form automation targeting high scalability and seamless UX.' },
    { id: 2, title: 'Streamlining Legacy Approvals for Biotech Corp', client: 'US Biotech Enterprise', desc: 'Automated legacy paper trails into dynamic, real-time cost-saving flows using Power Automate and Teams.' }
  ]);

  const [products, setProducts] = useState([
    { id: 1, title: 'Mansharp Org Chart Suite', price: '$499/mo', desc: 'Interactive organizational charting solution built for modern enterprise teams.' },
    { id: 2, title: 'Cloud Workflow & Asset Engine', price: '$899/mo', desc: 'Centralized asset tracking and automated multi-tier approval management framework.' }
  ]);

  // Form input states
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/25">
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
                <button onClick={() => setActiveTab('caseStudies')} className={`transition-colors hover:text-blue-400 ${activeTab === 'caseStudies' ? 'text-blue-400 font-semibold' : ''}`}>Case Studies</button>
                <button onClick={() => setActiveTab('products')} className={`transition-colors hover:text-blue-400 ${activeTab === 'products' ? 'text-blue-400 font-semibold' : ''}`}>Products</button>
                <button onClick={() => setActiveTab('contact')} className={`transition-colors hover:text-blue-400 ${activeTab === 'contact' ? 'text-blue-400 font-semibold' : ''}`}>Contact</button>
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
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
          <button onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'home' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Home</button>
          <button onClick={() => { setActiveTab('solutions'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'solutions' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Solutions & Pillars</button>
          <button onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'services' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Services</button>
          <button onClick={() => { setActiveTab('caseStudies'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'caseStudies' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Case Studies</button>
          <button onClick={() => { setActiveTab('products'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'products' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Products</button>
          <button onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }} className={`text-left py-2.5 px-3 rounded-xl transition-all ${activeTab === 'contact' ? 'bg-blue-600/20 text-blue-400 font-bold border border-blue-500/30' : 'hover:bg-slate-800'}`}>Contact Us</button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {!isAdmin ? (
          <div className="space-y-16 py-6">
            
            {/* HOME TAB (Hero, Ticker Announcements, Pillars, Industries) */}
            {activeTab === 'home' && (
              <div className="space-y-20">
                {/* Hero Section */}
                <div className="text-center space-y-8 py-10 sm:py-16">
                  <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase shadow-inner">
                    <span>✨ Empowering Global Enterprises with Advanced Solutions</span>
                  </div>
                  <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                    Unify, Secure, & Scale with <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
                      Next-Gen Digital Innovation
                    </span>
                  </h2>
                  <p className="text-slate-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                    We help companies optimize cloud architecture, automate business workflows, secure endpoint infrastructure, and drive higher corporate ROI.
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

                {/* Core Solution Pillars (Penthara style) */}
                <div className="space-y-8">
                  <div className="text-center space-y-3">
                    <h3 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Our Solution Pillars</h3>
                    <h4 className="text-2xl sm:text-4xl font-extrabold text-white">Strategic Enhancements for Organization</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-3xl space-y-3 shadow-xl transition-all">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-lg">01</div>
                      <h5 className="text-lg font-bold text-white">Department Solutions</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Optimize HR, Sales, Finance, and Operations with seamlessly integrated custom digital workflows.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-3xl space-y-3 shadow-xl transition-all">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold text-lg">02</div>
                      <h5 className="text-lg font-bold text-white">Cloud & Tech</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Leverage secure cloud migration, data analytics, AI integration, and robust infrastructure.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-3xl space-y-3 shadow-xl transition-all">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-lg">03</div>
                      <h5 className="text-lg font-bold text-white">Integration & Consulting</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Expert advisory for app development, governance framework, and scalable modern architecture.</p>
                    </div>
                    <div className="bg-slate-900/60 border border-slate-800 hover:border-slate-700 p-6 rounded-3xl space-y-3 shadow-xl transition-all">
                      <div className="w-10 h-10 rounded-xl bg-teal-600/20 text-teal-400 flex items-center justify-center font-bold text-lg">04</div>
                      <h5 className="text-lg font-bold text-white">Licensing Optimization</h5>
                      <p className="text-slate-400 text-xs leading-relaxed">Simplify subscription models and navigate cost-effective cloud licensing options effortlessly.</p>
                    </div>
                  </div>
                </div>

                {/* Industries We Serve Section */}
                <div className="bg-gradient-to-b from-slate-900/80 to-slate-950 border border-slate-800 p-8 sm:p-12 rounded-3xl space-y-8 shadow-2xl">
                  <div className="text-center space-y-2">
                    <h3 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Global Presence</h3>
                    <h4 className="text-2xl sm:text-3xl font-extrabold text-white">Industries We Transform</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    {['Healthcare & Pharma', 'Banking & Finance', 'Retail & Commerce', 'Real Estate & PropTech', 'Manufacturing & Oil', 'Technology & SaaS', 'Insurance & Legal', 'Transportation & Media'].map((ind, idx) => (
                      <div key={idx} className="bg-slate-950/80 border border-slate-800 py-4 px-3 rounded-2xl text-xs sm:text-sm font-semibold text-slate-300 hover:border-blue-500/60 transition-all">
                        {ind}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SOLUTIONS TAB (Department Breakdown) */}
            {activeTab === 'solutions' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Department Solutions & Architecture</h2>
                  <p className="text-slate-400 text-sm">Tailored digital systems designed to address unique departmental challenges across your enterprise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {[
                    { title: 'Human Resources', desc: 'Digitize onboarding flows, employee engagement, and automated compliance tracking.' },
                    { title: 'Sales & Marketing', desc: 'Enhance lead generation, customer behavioral insights, and intelligent pipeline tracking.' },
                    { title: 'Business Operations', desc: 'Improve supply chain transparency, eliminate bottlenecks, and automate routine tasks.' },
                    { title: 'IT & Security Teams', desc: 'Strengthen enterprise security posture, device management, and zero-trust framework enforcement.' }
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
                  <p className="text-slate-400 text-sm">Professional consulting and implementation solutions for high-growth enterprises.</p>
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

            {/* CASE STUDIES TAB (Success Stories component) */}
            {activeTab === 'caseStudies' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Success Stories of Innovation</h2>
                  <p className="text-slate-400 text-sm">Real-world examples of our solutions in action helping major international brands.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {caseStudies.map((cs) => (
                    <div key={cs.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl space-y-3 shadow-xl">
                      <span className="text-[11px] font-bold text-blue-400 tracking-wider uppercase bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">Client: {cs.client}</span>
                      <h3 className="text-xl font-bold text-white pt-2">{cs.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{cs.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCTS TAB */}
            {activeTab === 'products' && (
              <div className="space-y-8 py-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Enterprise Software Products</h2>
                  <p className="text-slate-400 text-sm">Ready-to-deploy suites designed to maximize workplace organization.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {products.map((prod) => (
                    <div key={prod.id} className="bg-slate-900/60 border border-slate-800 p-7 rounded-3xl flex justify-between items-center shadow-xl">
                      <div className="space-y-1">
                        <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                        <p className="text-slate-400 text-xs">{prod.desc}</p>
                      </div>
                      <span className="bg-blue-600/20 border border-blue-500/30 text-blue-400 font-extrabold px-4 py-2.5 rounded-xl text-sm whitespace-nowrap ml-4">
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
                  <h2 className="text-3xl font-extrabold text-white">Talk to Our Enterprise Experts</h2>
                  <p className="text-slate-400 text-sm">Request a personalized consultation, implementation roadmap, and ROI analysis.</p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); alert('Consultation request submitted successfully!'); setContactForm({ name: '', email: '', message: '' }); }} className="space-y-4 bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl backdrop-blur-xl">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Your Full Name</label>
                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Business Email</label>
                    <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Project Details / Requirements</label>
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
                    <p className="text-xs text-slate-400">Manage Services & Products Dynamically</p>
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
                      <div key={prod.id} className="flex justify-files justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/60 text-xs">
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