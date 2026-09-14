{/* PENTHARA.AI FOOTER CONTENT & WORKING LINKS */}
      <footer className={`border-t py-12 px-4 sm:px-8 transition-colors duration-300 ${isDark ? 'border-slate-800 bg-slate-900 text-slate-300' : 'border-slate-200 bg-slate-900 text-slate-300'}`}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Company & Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Company</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <button onClick={() => goToDetail('ai-copilot-pricing')} className="text-left hover:text-white transition-colors">Microsoft Copilot Pricing</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left hover:text-white transition-colors">Services</button>
              <button onClick={() => goToDetail('ai-business-leaders')} className="text-left hover:text-white transition-colors">AI for Business Leaders</button>
              <button onClick={() => goToDetail('blogs')} className="text-left hover:text-white transition-colors">Blog</button>
              <button onClick={() => goToDetail('contact')} className="text-left hover:text-white transition-colors">Contact Us</button>
            </div>
          </div>

          {/* Column 2: Insights */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Insights</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <button onClick={() => goToDetail('case-studies')} className="text-left hover:text-white transition-colors">Customer Stories</button>
              <button onClick={() => goToDetail('blogs')} className="text-left hover:text-white transition-colors">Blog</button>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Services</h4>
            <div className="flex flex-col gap-1.5 text-xs">
              <button onClick={() => goToDetail('ai-transformation')} className="text-left hover:text-white transition-colors">Microsoft 365 Copilot</button>
              <button onClick={() => goToDetail('ai-transformation')} className="text-left hover:text-white transition-colors">Copilot for Organisation</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left hover:text-white transition-colors">Copilot Studio</button>
              <button onClick={() => goToDetail('technologies')} className="text-left hover:text-white transition-colors">Azure AI</button>
              <button onClick={() => goToDetail('ai-services')} className="text-left hover:text-white transition-colors">Azure AI Services</button>
            </div>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">Contact</h4>
            <p className="text-xs text-slate-400">Get the latest updates from Penthara.AI!</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter email" className="p-2 rounded-lg text-xs bg-slate-800 border border-slate-700 text-white w-full" />
              <button onClick={() => alert('Subscribed successfully!')} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold">→</button>
            </div>
            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <p>📞 +1-732-668-8002</p>
              <p>📞 +91-62843-00850</p>
              <p>✉️ info@penthara.ai</p>
            </div>
          </div>

        </div>

        {/* Addresses Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-t border-slate-800 text-xs text-slate-400">
          <div>
            <strong className="text-white">USA Office:</strong>
            <p>131 Continental Drive, Suite 305, Newark, Delaware, 19713</p>
          </div>
          <div>
            <strong className="text-white">India Office:</strong>
            <p>SCO 515, Third Floor, Sector 70, Mohali, Punjab, 160055</p>
          </div>
        </div>

        {/* Bottom Copyright & Privacy */}
        <div className="max-w-6xl mx-auto pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>Copyright 2026 Penthara Technologies, All rights reserved.</p>
          <button onClick={() => goToDetail('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
        </div>
      </footer>