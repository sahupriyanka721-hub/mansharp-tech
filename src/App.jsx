import React, { useState } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  // Dynamic States for Admin & User Panel
  const [services, setServices] = useState([
    { id: 1, title: 'Enterprise Software', desc: 'Custom scalable software solutions.' },
    { id: 2, title: 'Cloud Integration', desc: 'Secure and reliable cloud migration.' }
  ]);
  const [portfolios, setPortfolios] = useState([
    { id: 1, title: 'Fintech Mobile App', client: 'Global Bank' },
    { id: 2, title: 'E-Commerce Suite', client: 'Retail Giants' }
  ]);
  const [products, setProducts] = useState([
    { id: 1, title: 'Mansharp CRM', price: '$499/mo' },
    { id: 2, title: 'CloudERP Suite', price: '$899/mo' }
  ]);

  // Form input states for adding items
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold h-10 w-10 rounded-xl flex items-center justify-center text-xl shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="font-bold text-lg leading-tight tracking-tight text-white">Mansharp</h1>
            <p className="text-xs tracking-widest text-blue-400 font-semibold uppercase">Technologies Private Limited</p>
          </div>
        </div>

        {/* Navigation / Toggle */}
        <div className="flex items-center gap-4">
          {!isAdmin && (
            <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-300">
              <button onClick={() => setActiveTab('home')} className="hover:text-blue-400 transition-colors">Home</button>
              <button onClick={() => setActiveTab('about')} className="hover:text-blue-400 transition-colors">About Us</button>
              <button onClick={() => setActiveTab('services')} className="hover:text-blue-400 transition-colors">Services</button>
              <button onClick={() => setActiveTab('portfolio')} className="hover:text-blue-400 transition-colors">Portfolio</button>
              <button onClick={() => setActiveTab('products')} className="hover:text-blue-400 transition-colors">Products</button>
              <button onClick={() => setActiveTab('contact')} className="hover:text-blue-400 transition-colors">Contact Us</button>
            </nav>
          )}

          <button
            onClick={() => {
              setIsAdmin(!isAdmin);
              setIsLoggedIn(false);
            }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center gap-2"
          >
            {isAdmin ? 'User Portal' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {!isAdmin ? (
          /* USER PORTAL */
          <div className="py-8">
            {activeTab === 'home' && (
              <div className="text-center space-y-8 py-16">
                <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase">
                  Welcome to Mansharp Technologies
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                  Empowering Businesses <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                    Through Digital Innovation
                  </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
                  We deliver cutting-edge software solutions, enterprise web development, and robust cloud services tailored to scale your business.
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <button onClick={() => setActiveTab('services')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/30">
                    Explore Services
                  </button>
                  <button onClick={() => setActiveTab('contact')} className="bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-xl font-semibold transition-all">
                    Contact Us
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'about' && (
              <div className="max-w-3xl mx-auto space-y-6 py-8">
                <h2 className="text-3xl font-bold text-white">About Us</h2>
                <p className="text-slate-300 leading-relaxed">
                  Mansharp Technologies Private Limited is a premier technology solutions provider dedicated to transforming enterprise operations through innovative digital strategies. Our team of expert developers, designers, and strategists push technological boundaries to deliver excellence.
                </p>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="space-y-8 py-6">
                <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((s) => (
                    <div key={s.id} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl">
                      <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'portfolio' && (
              <div className="space-y-8 py-6">
                <h2 className="text-3xl font-bold text-white text-center">Our Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolios.map((p) => (
                    <div key={p.id} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl">
                      <h3 className="text-xl font-semibold text-white mb-1">{p.title}</h3>
                      <p className="text-blue-400 text-xs font-semibold">Client: {p.client}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div className="space-y-8 py-6">
                <h2 className="text-3xl font-bold text-white text-center">Our Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {products.map((prod) => (
                    <div key={prod.id} className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{prod.title}</h3>
                        <p className="text-slate-400 text-xs mt-1">Enterprise Grade Software</p>
                      </div>
                      <span className="bg-blue-600/10 border border-blue-500/20 text-blue-400 font-bold px-4 py-2 rounded-xl text-sm">
                        {prod.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="max-w-xl mx-auto space-y-6 py-8">
                <h2 className="text-3xl font-bold text-white text-center">Contact Us</h2>
                <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); setContactForm({ name: '', email: '', message: '' }); }} className="space-y-4 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl shadow-xl">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Your Name</label>
                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm({...contactForm, name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                    <input type="email" value={contactForm.email} onChange={(e) => setContactForm({...contactForm, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Message</label>
                    <textarea rows="4" value={contactForm.message} onChange={(e) => setContactForm({...contactForm, message: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-semibold transition-all">Send Message</button>
                </form>
              </div>
            )}
          </div>
        ) : (
          /* ADMIN PANEL */
          <div className="w-full max-w-xl mx-auto py-8">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">Admin Login</h3>
                  <p className="text-xs text-slate-400">Enter mobile number and password</p>
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
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-xl transition-all shadow-lg text-sm">Login</button>
              </form>
            ) : (
              <div className="space-y-8">
                <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                  <div>
                    <h3 className="font-bold text-lg text-white">Admin Dashboard</h3>
                    <p className="text-xs text-slate-400">Manage Services, Portfolio, and Products</p>
                  </div>
                  <button onClick={() => setIsLoggedIn(false)} className="bg-rose-600/10 border border-rose-500/20 text-rose-400 hover:bg-rose-600/20 px-4 py-2 rounded-xl text-xs font-semibold transition-all">
                    Logout
                  </button>
                </div>

                {/* Manage Services */}
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h4 className="font-bold text-white text-md">Create & Manage Services</h4>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Service Title" value={newService.title} onChange={(e) => setNewService({...newService, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <input type="text" placeholder="Description" value={newService.desc} onChange={(e) => setNewService({...newService, desc: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <button onClick={() => { if(newService.title) { setServices([...services, {id: Date.now(), ...newService}]); setNewService({title:'', desc:''}); }}} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-xs font-semibold">Add</button>
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

                {/* Manage Portfolio */}
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h4 className="font-bold text-white text-md">Create & Manage Portfolio</h4>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Portfolio Title" value={newPortfolio.title} onChange={(e) => setNewPortfolio({...newPortfolio, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <input type="text" placeholder="Client Name" value={newPortfolio.client} onChange={(e) => setNewPortfolio({...newPortfolio, client: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <button onClick={() => { if(newPortfolio.title) { setPortfolios([...portfolios, {id: Date.now(), ...newPortfolio}]); setNewPortfolio({title:'', client:''}); }}} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-xs font-semibold">Add</button>
                  </div>
                  <div className="space-y-2 pt-2">
                    {portfolios.map(p => (
                      <div key={p.id} className="flex justify-between items-center bg-slate-950 p-3 rounded-xl border border-slate-800/60 text-xs">
                        <span>{p.title} ({p.client})</span>
                        <button onClick={() => setPortfolios(portfolios.filter(x => x.id !== p.id))} className="text-rose-400 hover:text-rose-300 font-semibold">Delete</button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Manage Products */}
                <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <h4 className="font-bold text-white text-md">Create & Manage Products</h4>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Product Name" value={newProduct.title} onChange={(e) => setNewProduct({...newProduct, title: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white" />
                    <button onClick={() => { if(newProduct.title) { setProducts([...products, {id: Date.now(), ...newProduct}]); setNewProduct({title:'', price:''}); }}} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl text-xs font-semibold">Add</button>
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
      <footer className="border-t border-slate-800/60 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Mansharp Technologies Private Limited. All rights reserved.
      </footer>
    </div>
  );
}