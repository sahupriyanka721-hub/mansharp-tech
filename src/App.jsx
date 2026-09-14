{/* MOBILE DRAWER MENU */}
      {!isAdmin && isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-[73px] z-40 overflow-y-auto p-6 space-y-6 shadow-2xl transition-all ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
          <button onClick={() => { setActiveTab('about'); setViewMode('home'); setIsMobileMenuOpen(false); }} className="w-full text-left py-2 font-bold text-sm border-b border-slate-700/50">Home</button>
          
          {/* COMPANY SECTION */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">Company</p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              <button onClick={() => goToDetail('ai-copilot-pricing')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Microsoft Copilot Pricing</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Services</button>
              <button onClick={() => goToDetail('ai-business-leaders')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">AI for Business Leaders</button>
              <button onClick={() => goToDetail('blogs')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Blog</button>
              <button onClick={() => goToDetail('contact')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Contact Us</button>
            </div>
          </div>

          {/* INSIGHTS SECTION */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">Insights</p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              <button onClick={() => goToDetail('case-studies')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Customer Stories</button>
              <button onClick={() => goToDetail('blogs')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Blog</button>
            </div>
          </div>

          {/* SERVICES SECTION */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-blue-500 uppercase tracking-wider">Services</p>
            <div className="grid grid-cols-1 gap-2 pl-2">
              <button onClick={() => goToDetail('ai-transformation')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Microsoft 365 Copilot</button>
              <button onClick={() => goToDetail('ai-transformation')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Copilot for Organisation</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Copilot Studio</button>
              <button onClick={() => goToDetail('technologies')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Azure AI</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left py-1 text-xs opacity-80 hover:opacity-100">Azure AI Services</button>
            </div>
          </div>

          <button onClick={() => goToDetail('contact')} className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white p-3 rounded-xl text-center font-bold text-sm shadow-md mt-4">Contact Us</button>
        </div>
      )}