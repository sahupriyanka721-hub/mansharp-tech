import React, { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminPhone, setAdminPhone] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminTab, setAdminTab] = useState('services');

  const [services, setServices] = useState([
    { id: 1, title: 'Web Development', desc: 'High-performance custom web applications built with modern frameworks.' },
    { id: 2, title: 'Mobile App Development', desc: 'Cross-platform iOS and Android apps tailored for business growth.' }
  ]);

  const [portfolios, setPortfolios] = useState([
    { id: 1, title: 'E-Commerce Platform', client: 'Retail Giant', category: 'Web App' },
    { id: 2, title: 'Fintech Mobile App', client: 'Bank Corp', category: 'Mobile App' }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: 'CloudERP Suite', price: '₹49,999', status: 'Available' },
    { id: 2, name: 'AI Chatbot Gateway', price: '₹19,999', status: 'Available' }
  ]);

  const [newServiceTitle, setNewServiceTitle] = useState('');
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newPortTitle, setNewPortTitle] = useState('');
  const [newPortClient, setNewPortClient] = useState('');
  const [newPortCat, setNewPortCat] = useState('');
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState('');
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPhone === '9876543210' && adminPassword === 'admin123') {
      setIsAdminLoggedIn(true);
      alert('Admin Logged In Successfully!');
    } else {
      alert('Invalid Credentials! (Use Mobile: 9876543210 | Password: admin123)');
    }
  };

  const handleCreateService = (e) => {
    e.preventDefault();
    if (!newServiceTitle || !newServiceDesc) return;
    setServices([...services, { id: Date.now(), title: newServiceTitle, desc: newServiceDesc }]);
    setNewServiceTitle(''); setNewServiceDesc('');
    alert('Service created successfully!');
  };

  const handleCreatePortfolio = (e) => {
    e.preventDefault();
    if (!newPortTitle || !newPortClient || !newPortCat) return;
    setPortfolios([...portfolios, { id: Date.now(), title: newPortTitle, client: newPortClient, category: newPortCat }]);
    setNewPortTitle(''); setNewPortClient(''); setNewPortCat('');
    alert('Portfolio created successfully!');
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();
    if (!newProdName || !newProdPrice) return;
    setProducts([...products, { id: Date.now(), name: newProdName, price: newProdPrice, status: 'Available' }]);
    setNewProdName(''); setNewProdPrice('');
    alert('Product created successfully!');
  };

  const handleDeleteService = (id) => setServices(services.filter(s => s.id !== id));
  const handleDeletePortfolio = (id) => setPortfolios(portfolios.filter(p => p.id !== id));
  const handleDeleteProduct = (id) => setProducts(products.filter(pr => pr.id !== id));

  return (
    <div className="min-h-screen bg-[#060913] text-gray-100 font-sans selection:bg-blue-600 selection:text-white">
      <nav className="border-b border-gray-800 bg-[#060913]/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center font-black text-xl shadow-lg shadow-blue-600/30">M</div>
            <div>
              <h1 className="text-lg font-black tracking-wider bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">Mansharp Technologies</h1>
              <p className="text-[10px] text-gray-400 font-semibold tracking-widest uppercase">Private Limited</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <button onClick={() => setCurrentView('home')} className={`transition hover:text-blue-400 ${currentView === 'home' ? 'text-blue-400' : 'text-gray-300'}`}>Home</button>
            <button onClick={() => setCurrentView('about')} className={`transition hover:text-blue-400 ${currentView === 'about' ? 'text-blue-400' : 'text-gray-300'}`}>About Us</button>
            <button onClick={() => setCurrentView('services')} className={`transition hover:text-blue-400 ${currentView === 'services' ? 'text-blue-400' : 'text-gray-300'}`}>Services</button>
            <button onClick={() => setCurrentView('portfolio')} className={`transition hover:text-blue-400 ${currentView === 'portfolio' ? 'text-blue-400' : 'text-gray-300'}`}>Portfolio</button>
            <button onClick={() => setCurrentView('products')} className={`transition hover:text-blue-400 ${currentView === 'products' ? 'text-blue-400' : 'text-gray-300'}`}>Products</button>
            <button onClick={() => setCurrentView('contact')} className={`transition hover:text-blue-400 ${currentView === 'contact' ? 'text-blue-400' : 'text-gray-300'}`}>Contact Us</button>
          </div>
          <div>
            <button onClick={() => setCurrentView('admin')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg">Admin Panel 🛡️</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentView === 'home' && (
          <div className="py-16 text-center max-w-3xl mx-auto space-y-6">
            <span className="text-xs bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/20 font-bold uppercase tracking-widest">Next-Gen Tech Solutions</span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">Empowering Businesses Through Digital Innovation</h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">At Mansharp Technologies Pvt Ltd, we engineer robust software, scalable web applications, and enterprise products.</p>
            <div className="flex justify-center gap-4 pt-4">
              <button onClick={() => setCurrentView('services')} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg">Explore Services</button>
              <button onClick={() => setCurrentView('contact')} className="bg-gray-900 hover:bg-gray-800 border border-gray-800 text-white px-8 py-3.5 rounded-xl font-bold text-sm">Get in Touch</button>
            </div>
          </div>
        )}

        {currentView === 'about' && (
          <div className="max-w-3xl mx-auto space-y-8 py-8">
            <div className="border border-gray-800 bg-gray-950/60 p-8 rounded-3xl shadow-xl space-y-4">
              <h2 className="text-3xl font-black text-blue-400">About Mansharp Technologies</h2>
              <p className="text-gray-300 text-sm leading-relaxed">Mansharp Technologies Private Limited is a premier technology consulting and software development firm specializing in digital transformation.</p>
            </div>
          </div>
        )}

        {currentView === 'services' && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto"><h2 className="text-3xl font-black">Our Services</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(s => (
                <div key={s.id} className="border border-gray-800 bg-gray-950/80 p-6 rounded-2xl shadow-lg space-y-3">
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="text-xs text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'portfolio' && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto"><h2 className="text-3xl font-black">Our Portfolio</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolios.map(p => (
                <div key={p.id} className="border border-gray-800 bg-gray-950/80 p-6 rounded-2xl shadow-lg space-y-2">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-xs text-gray-400">Client: {p.client}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'products' && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto"><h2 className="text-3xl font-black">Our Products</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map(pr => (
                <div key={pr.id} className="border border-gray-800 bg-gray-950/80 p-6 rounded-2xl shadow-lg flex justify-between items-center">
                  <div><h3 className="text-lg font-bold">{pr.name}</h3></div>
                  <div className="text-right"><span className="text-sm font-black text-blue-400">{pr.price}</span></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentView === 'contact' && (
          <div className="max-w-md mx-auto border border-gray-800 bg-gray-950 p-8 rounded-3xl shadow-2xl space-y-6">
            <h2 className="text-2xl font-black">Contact Us</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }} className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
              <input type="email" placeholder="Email" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
              <textarea placeholder="Message" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white h-24" required />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-bold">Send</button>
            </form>
          </div>
        )}

        {currentView === 'admin' && (
          <div>
            {!isAdminLoggedIn ? (
              <div className="max-w-md mx-auto border border-gray-800 bg-gray-950 p-8 rounded-3xl shadow-2xl space-y-6">
                <h2 className="text-2xl font-black">Admin Login</h2>
                <p className="text-xs text-blue-400">Mobile: 9876543210 | Password: admin123</p>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <input type="text" value={adminPhone} onChange={e => setAdminPhone(e.target.value)} placeholder="Mobile Number" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                  <input type="password" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} placeholder="Password" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-bold">Login</button>
                </form>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="border border-gray-800 bg-gray-950 p-6 rounded-3xl flex justify-between items-center">
                  <h2 className="text-2xl font-black">Admin Dashboard</h2>
                  <button onClick={() => setIsAdminLoggedIn(false)} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs">Logout</button>
                </div>
                <div className="flex gap-3 border-b border-gray-800 pb-4">
                  <button onClick={() => setAdminTab('services')} className={`px-4 py-2 rounded-xl text-xs font-bold ${adminTab === 'services' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400'}`}>Services</button>
                  <button onClick={() => setAdminTab('portfolio')} className={`px-4 py-2 rounded-xl text-xs font-bold ${adminTab === 'portfolio' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400'}`}>Portfolio</button>
                  <button onClick={() => setAdminTab('products')} className={`px-4 py-2 rounded-xl text-xs font-bold ${adminTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-900 text-gray-400'}`}>Products</button>
                </div>

                {adminTab === 'services' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleCreateService} className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">Add Service</h3>
                      <input type="text" value={newServiceTitle} onChange={e => setNewServiceTitle(e.target.value)} placeholder="Title" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <textarea value={newServiceDesc} onChange={e => setNewServiceDesc(e.target.value)} placeholder="Desc" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white h-20" required />
                      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold">Create</button>
                    </form>
                    <div className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">List</h3>
                      {services.map(s => (
                        <div key={s.id} className="border border-gray-800 bg-gray-900 p-3 rounded-xl flex justify-between items-center text-xs">
                          <span>{s.title}</span>
                          <button onClick={() => handleDeleteService(s.id)} className="text-red-400">Delete</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {adminTab === 'portfolio' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleCreatePortfolio} className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">Add Portfolio</h3>
                      <input type="text" value={newPortTitle} onChange={e => setNewPortTitle(e.target.value)} placeholder="Title" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <input type="text" value={newPortClient} onChange={e => setNewPortClient(e.target.value)} placeholder="Client" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <input type="text" value={newPortCat} onChange={e => setNewPortCat(e.target.value)} placeholder="Category" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold">Create</button>
                    </form>
                    <div className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">List</h3>
                      {portfolios.map(p => (
                        <div key={p.id} className="border border-gray-800 bg-gray-900 p-3 rounded-xl flex justify-between items-center text-xs">
                          <span>{p.title}</span>
                          <button onClick={() => handleDeletePortfolio(p.id)} className="text-red-400">Delete</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {adminTab === 'products' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <form onSubmit={handleCreateProduct} className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">Add Product</h3>
                      <input type="text" value={newProdName} onChange={e => setNewProdName(e.target.value)} placeholder="Name" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <input type="text" value={newProdPrice} onChange={e => setNewProdPrice(e.target.value)} placeholder="Price" className="w-full bg-gray-900 border border-gray-800 rounded-xl p-3 text-sm text-white" required />
                      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl text-xs font-bold">Create</button>
                    </form>
                    <div className="border border-gray-800 bg-gray-950 p-6 rounded-3xl space-y-3">
                      <h3 className="font-bold">List</h3>
                      {products.map(pr => (
                        <div key={pr.id} className="border border-gray-800 bg-gray-900 p-3 rounded-xl flex justify-between items-center text-xs">
                          <span>{pr.name}</span>
                          <button onClick={() => handleDeleteProduct(pr.id)} className="text-red-400">Delete</button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}