import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Dynamic States
  const [services, setServices] = useState([
    { id: 1, title: 'Cloud Integration & Azure', desc: 'Seamlessly migrate workloads and scale enterprise architecture securely.' },
    { id: 2, title: 'Microsoft 365 & Copilot', desc: 'Empower digital workspaces and productivity with AI-driven workflows.' },
    { id: 3, title: 'Power Platform Automation', desc: 'Build low-code custom apps and transform manual processes into automated flows.' }
  ]);
  
  const [products, setProducts] = useState([
    { 
      id: 1, 
      title: 'AIM App (Asset & Inventory Management)', 
      price: '$499/mo', 
      desc: 'Effortlessly track and manage all your company assets in one centralized place with high precision.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 2, 
      title: 'Mansharp Org Chart Suite', 
      price: '$899/mo', 
      desc: 'Instantly view & search your team hierarchy with real-time interactive organization charts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const [newService, setNewService] = useState({ title: '', desc: '' });
  const [newProduct, setNewProduct] = useState({ title: '', price: '', desc: '', image: '' });
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
      {/* Header with Interactive Penthara-style Dropdowns */}
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

        {/* Desktop Navigation */}
        {!isAdmin && (
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 relative">
            
            {/* About Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')} className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2">
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
              <button onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')} className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2">
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
              <button onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')} className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2">
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
              <button onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')} className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2">
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
              <button onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')} className="hover:text-blue-400 flex items-center gap-1 transition-colors py-2">
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

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {!isAdmin && (
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden bg-slate-800 text-slate-200 px-3 py-2 rounded-xl text-xs font-semibold">
              {mobileMenuOpen ? '✕' : '☰'} Menu
            </button>
          )}
          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); setMobileMenuOpen(false); }} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all">
            {isAdmin ? 'User Portal' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
        {!isAdmin ? (
          <div className="space-y-16 py-6">
            
            {activeTab === 'home' && (
              <div className="space-y-16">
                <div className="text-center space-y-6 py-12">
                  <h2 className="text-4xl sm:text-6xl font-extrabold text-white">Empowering Businesses Through Innovation</h2>
                  <p className="text-slate-400 max-w-2xl mx-auto text-base">Select any menu item above or explore our enterprise products and solutions below.</p>
                  <button onClick={() => setActiveTab('products')} className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-2xl text-sm font-semibold shadow-lg">View Products With Images →</button>
                </div>
              </div>
            )}

            {activeTab === 'solutions' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-white text-center">Solutions & Department Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['Human Resources', 'Sales & CRM', 'Operations Automation', 'IT & Security'].map((item, idx) => (
                    <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-2">
                      <h3 className="text-xl font-bold text-white">{item}</h3>
                      <p className="text-slate-400 text-sm">Targeted optimization workflows tailored for enterprise scaling.</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-extrabold text-white text-center">Our Core Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {services.map((s) => (
                    <div key={s.id} className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
                      <h3 className="text-lg font-bold text-white">{s.title}</h3>
                      <p className="text-slate-400 text-xs">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PRODUCTS WITH IMAGES AND DETAILED NAMES */}
            {activeTab === 'products' && (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Mansharp Products</h2>
                  <p className="text-slate-400 text-sm">Interactive software suites equipped with dashboard previews and management tools.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  {products.map((prod) => (
                    <div key={prod.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                      <div className="h-48 w-full overflow-hidden bg-slate-950 relative">
                        <img src={prod.image} alt={prod.title} className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-3 right-3 bg-blue-600 text-white font-bold px-3 py-1 rounded-xl text-xs shadow-md">
                          {prod.price}
                        </span>
                      </div>
                      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{prod.title}</h3>
                          <p className="text-slate-400 text-xs mt-2 leading-relaxed">{prod.desc}</p>
                        </div>
                        <button onClick={() => setActiveTab('contact')} className="w-full bg-slate-800 hover:bg-slate-700 text-blue-400 font-semibold py-2.5 rounded-xl text-xs transition-all">
                          Request Live Demo
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl font-extrabold text-white text-center">Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Submitted successfully!'); }} className="space-y-4 bg-slate-900 border border-slate-800 p-8 rounded-3xl">
                  <input type="text" placeholder="Your Name" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                  <input type="email" placeholder="Business Email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                  <textarea rows="4" placeholder="Message" value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required></textarea>
                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl text-sm">Submit Request</button>
                </form>
              </div>
            )}
          </div>
        ) : (
          /* Admin Panel to Add Products with Images */
          <div className="w-full max-w-xl mx-auto py-8">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white" required />
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3.5 rounded-xl text-sm">Login</button>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <h3 className="font-bold text-white">Admin Dashboard</h3>
                  <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/20 text-rose-400 px-4 py-2 rounded-xl text-xs font-semibold">Logout</button>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-white text-sm">Add New Product (with Image & Name)</h4>
                  <input type="text" placeholder="Product Title" value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                  <input type="text" placeholder="Price ($499/mo)" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                  <input type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white" />
                  <textarea placeholder="Description" value={newProduct.desc} onChange={(e) => setNewProduct({...newProduct, desc: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white"></textarea>
                  <button onClick={() => { if(newProduct.title) { setProducts([...products, {id: Date.now(), ...newProduct}]); setNewProduct({title:'', price:'', desc:'', image:''}); }}} className="w-full bg-blue-600 text-white py-2.5 rounded-xl text-xs font-semibold">Add Product</button>
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