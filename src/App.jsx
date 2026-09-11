import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('light'); // Default light rakha hai taaki attractive lage
  const [currentSlide, setCurrentSlide] = useState(0);

  // Click-based AI dropdown state
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
      id: 'healthcare',
      title: 'Transforming Healthcare with Smart Solutions',
      desc: 'Secure, compliant, and advanced digital platforms designed for modern healthcare providers and patient care.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Healthcare Industry',
      contentTitle: 'Next-Gen Patient Care Systems',
      contentText: 'We build HIPAA-compliant, highly secure cloud solutions that streamline clinical workflows and improve patient health outcomes.'
    },
    {
      id: 'education',
      title: 'Smart Education & E-Learning Platforms',
      desc: 'Empowering institutions and learners worldwide with interactive, scalable cloud infrastructures.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Education Industry',
      contentTitle: 'Digital Transformation for Schools & Universities',
      contentText: 'Modernizing classrooms and remote learning frameworks with robust, cloud-enabled educational management systems.'
    },
    {
      id: 'public-sector',
      title: 'Public Sector & Government Digitalization',
      desc: 'Streamlining citizen services through transparent, secure, and highly efficient digital government tech.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Public Sector',
      contentTitle: 'Transparent Citizen Services',
      contentText: 'Empowering government bodies with secure data pipelines, streamlined workflows, and citizen-first digital portals.'
    },
    {
      id: 'financial-services',
      title: 'Financial Services & Banking Tech',
      desc: 'Robust, secure, and high-performance financial systems designed to protect data and accelerate transactions.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Fintech & Banking',
      contentTitle: 'Secure Financial Infrastructures',
      contentText: 'Providing encrypted, low-latency financial software solutions that safeguard sensitive assets and scale with market demands.'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Supply Chain Innovation',
      desc: 'Automating industrial processes, IoT integration, and smart analytics for manufacturing excellence.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Manufacturing Industry',
      contentTitle: 'Smart Factory Automation',
      contentText: 'Connecting factory floors to cloud intelligence for predictive maintenance, optimized supply chains, and reduced downtime.'
    },
    {
      id: 'energy',
      title: 'Energy & Utilities Smart Solutions',
      desc: 'Sustainable technologies and data management systems tailored for modern energy enterprises.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Energy Sector',
      contentTitle: 'Sustainable Energy Management',
      contentText: 'Helping utility providers monitor grid performance, reduce carbon footprints, and analyze resource distribution efficiently.'
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce Digital Growth',
      desc: 'Enhancing customer experiences and backend inventory systems through high-speed cloud solutions.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Retail & Commerce',
      contentTitle: 'Omnichannel Retail Experiences',
      contentText: 'Scaling e-commerce platforms with real-time inventory tracking, AI-driven recommendations, and seamless checkout flows.'
    },
    {
      id: 'software',
      title: 'Software & Technology Product Development',
      desc: 'Building custom software products, scalable architectures, and next-gen enterprise tools.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Software Products',
      contentTitle: 'Custom Engineering & SaaS',
      contentText: 'Turning complex software concepts into market-ready, highly reliable, and cloud-native applications.'
    },
    {
      id: 'blogs',
      title: 'Mansharp Insights & Industry Blogs',
      desc: 'Read expert thoughts on Cloud Computing, Artificial Intelligence, Microsoft Technologies, and more.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Resources & Insights',
      contentTitle: 'Latest Tech Articles & Trends',
      contentText: 'Stay updated with deep dives into emerging cloud patterns, enterprise app strategies, and expert engineering notes.'
    },
    {
      id: 'case-studies',
      title: 'Proven Success Stories & Case Studies',
      desc: 'See how we have helped global organizations overcome complex technological challenges.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Success Stories',
      contentTitle: 'Transforming Challenges Into Triumphs',
      contentText: 'Explore our documented case histories showcasing measurable business value delivered across diverse industry verticals.'
    },
    {
      id: 'workshops',
      title: 'Events & Technical Workshops',
      desc: 'Join our interactive seminars, webinars, and technology skill-building workshops.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Events & Learning',
      contentTitle: 'Connect & Learn With Experts',
      contentText: 'Participate in our live sessions designed to educate tech leaders on leveraging modern cloud architectures and AI.'
    },
    {
      id: 'department-solutions',
      title: 'Enterprise Department Solutions',
      desc: 'Targeted workflow enhancements across HR, Finance, Operations, and Sales departments.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Solutions',
      contentTitle: 'Optimizing Every Business Unit',
      contentText: 'Tailored digital toolsets designed to remove departmental silos, automate repetitive tasks, and boost organizational output.'
    },
    {
      id: 'licenses',
      title: 'Software Licenses & Enterprise Agreements',
      desc: 'Streamline your enterprise licensing needs with certified Microsoft partners.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Enterprise Licensing',
      contentTitle: 'Hassle-Free Software Procurement',
      contentText: 'Expert guidance on procuring, managing, and optimizing Microsoft volume licensing and cloud subscriptions.'
    },
    {
      id: 'technologies',
      title: 'Cutting-Edge Technologies & Azure Cloud',
      desc: 'Empowering your business with state-of-the-art cloud architecture and modern developer tools.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Technology Stack',
      contentTitle: 'Built on Microsoft Azure & AI',
      contentText: 'Leveraging enterprise-grade cloud frameworks, advanced analytics, and robust security protocols for maximum scalability.'
    },
    {
      id: 'integration',
      title: 'System Integration & IT Consulting',
      desc: 'Seamlessly connect disparate legacy apps and systems with modern cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Consulting & Strategy',
      contentTitle: 'Bridging Legacy & Modern Systems',
      contentText: 'Strategic roadmap planning and seamless API integration services to unify your entire IT ecosystem.'
    },
    {
      id: 'aim-app',
      title: 'AIM Asset Management Application',
      desc: 'Track, manage, and optimize your organization assets in real-time with supreme efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Products',
      contentTitle: 'Real-Time Asset Tracking',
      contentText: 'Our flagship AIM application offers end-to-end visibility and lifecycle management for enterprise hardware and software assets.'
    },
    {
      id: 'org-chart',
      title: 'Mansharp Org Chart Solution',
      desc: 'Automate reporting lines and visualize team hierarchies dynamically with our custom app.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Products',
      contentTitle: 'Dynamic Corporate Hierarchy Mapping',
      contentText: 'Effortlessly visualize team structures, manage reporting lines, and sync employee directories in real-time.'
    },
    {
      id: 'contact',
      title: 'Get in Touch With Our Experts',
      desc: 'Let us discuss how we can accelerate your business growth through advanced technology solutions.',
      image: 'https://images.unsplash.com/photo-1423596653951-9b62843232f3?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Contact Us',
      contentTitle: 'We Are Here to Help',
      contentText: 'Reach out to our offices in USA or India, or drop us a message to start building your next big digital initiative.'
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy & Data Security',
      desc: 'Our steadfast commitment to maintaining data security, confidentiality, and your absolute privacy.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Legal',
      contentTitle: 'Your Privacy Matters',
      contentText: 'Read how we protect, collect, and handle your data securely in compliance with international privacy regulations.'
    },
    {
      id: 'terms',
      title: 'Terms And Conditions',
      desc: 'Guidelines and legal agreements governing the use of Mansharp Technologies services and website.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80',
      subtitle: 'Legal',
      contentTitle: 'Terms of Service',
      contentText: 'Important legal terms and conditions outlining user responsibilities and service agreements with Mansharp Technologies.'
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
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white' : 'bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/40 text-slate-900 selection:bg-blue-500 selection:text-white'}`}>
      
      {/* HEADER */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center shadow-xl transition-colors duration-300 ${isDark ? 'border-slate-800/80 bg-slate-900/95 text-white' : 'border-slate-200/80 bg-white/90 text-slate-900'}`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('about')}>
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-bold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* NAVIGATION MENUS */}
        {!isAdmin && (
          <nav className={`hidden lg:flex items-center gap-8 text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            
            {/* About Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                About <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('about')} className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>About Us</button>
                <button onClick={() => setActiveTab('why-choose-us')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Why Choose Us</button>
                <button onClick={() => setActiveTab('life-at-mansharp')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Life At Mansharp</button>
                <button onClick={() => setActiveTab('leadership')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Leadership</button>
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
                <div className={`absolute top-full left-0 mt-2 w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <button 
                    onClick={() => { setActiveTab('ai-transformation'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-200' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-800'}`}
                  >
                    AI Transformation
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-copilot-pricing'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}
                  >
                    Microsoft Copilot Pricing
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-services'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}
                  >
                    AI Services
                  </button>
                  <button 
                    onClick={() => { setActiveTab('ai-business-leaders'); setIsAiDropdownOpen(false); }} 
                    className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}
                  >
                    AI for Business Leaders
                  </button>
                </div>
              )}
            </div>

            {/* Industries Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Industries <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 border rounded-2xl shadow-2xl p-3 grid grid-cols-2 gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => {
                  const slug = ind.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <button key={idx} onClick={() => setActiveTab(slug)} className={`text-left px-2 py-1.5 rounded-lg text-[11px] transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>{ind}</button>
                  );
                })}
              </div>
            </div>

            {/* Resources & Insights Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Resources & Insights <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-48 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('blogs')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Blogs</button>
                <button onClick={() => setActiveTab('case-studies')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Case Studies</button>
                <button onClick={() => setActiveTab('workshops')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Events & Workshops</button>
              </div>
            </div>

            {/* Solutions Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Solutions <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-0 w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('department-solutions')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Department Solutions</button>
                <button onClick={() => setActiveTab('licenses')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Licenses</button>
                <button onClick={() => setActiveTab('technologies')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Technologies</button>
                <button onClick={() => setActiveTab('integration')} className={`text-left px-3.5 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Integration & Consulting</button>
              </div>
            </div>

            {/* Products Menu */}
            <div className="relative group py-2 cursor-pointer">
              <span className="hover:text-blue-500 flex items-center gap-1 transition-colors">
                Products <span className="text-[10px]">▼</span>
              </span>
              <div className={`absolute top-full left-[-40px] w-56 border rounded-2xl shadow-2xl p-2 flex flex-col gap-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <button onClick={() => setActiveTab('aim-app')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>AIM App</button>
                <button onClick={() => setActiveTab('org-chart')} className={`text-left px-3 py-2 rounded-xl text-xs transition-colors ${isDark ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-blue-50 hover:text-blue-600 text-slate-700'}`}>Mansharp Org Chart</button>
              </div>
            </div>

            <button onClick={() => setActiveTab('contact')} className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-md transition-all">Contact Us</button>
          </nav>
        )}

        {/* Theme Toggle & Admin Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center shadow-sm ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            title="Toggle Light/Dark Theme"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); }} className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full">
        {!isAdmin ? (
          <div className="space-y-16 pb-20">
            
            {/* DYNAMIC BANNER & IMAGE SLIDER SECTION */}
            <div className="relative w-full h-[480px] sm:h-[580px] flex items-center justify-center text-center px-4 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 z-0">
                <img 
                  key={activeBanner.image}
                  src={activeBanner.image} 
                  alt="Banner" 
                  className={`w-full h-full object-cover scale-105 transition-all duration-700 ${isDark ? 'brightness-[0.35]' : 'brightness-[0.55]'}`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-slate-950 via-slate-950/40' : 'from-slate-950/70 via-slate-950/20'} to-transparent`}></div>
              </div>

              {/* Slider Content */}
              <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fadeIn">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                  {activeBanner.subtitle}
                </span>
                <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
                  {activeBanner.title}
                </h1>
                <p className="text-slate-100 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
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

            {/* SCROLLABLE DETAILED CONTENT SECTION */}
            <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
              <div className={`p-8 sm:p-12 rounded-3xl border shadow-xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-blue-100/80'}`}>
                <div className="space-y-4">
                  <span className="bg-blue-100 text-blue-700 font-bold uppercase text-[10px] tracking-wider px-3 py-1 rounded-md">{activeBanner.subtitle}</span>
                  <h2 className={`text-2xl sm:text-4xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>{activeBanner.contentTitle}</h2>
                  <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {activeBanner.contentText}
                  </p>
                  <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md">
                    Speak With Expert
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img src={activeBanner.image} alt="Feature" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="w-full max-w-xl mx-auto py-12 px-4">
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className={`border p-8 rounded-3xl space-y-6 shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className={`text-2xl font-bold text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Admin Login</h3>
                <input type="text" placeholder="Mobile Number (9876543210)" value={mobile} onChange={(e) => setMobile(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <input type="password" placeholder="Password (admin123)" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-blue-500 ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`} required />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3.5 rounded-xl text-sm shadow-md">Login</button>
              </form>
            ) : (
              <div className={`border p-8 rounded-3xl space-y-6 text-center shadow-xl ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Welcome Admin!</h3>
                <p className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>You have successfully accessed the admin console.</p>
                <button onClick={() => setIsLoggedIn(false)} className="bg-rose-50 text-rose-600 px-6 py-2.5 rounded-xl text-xs font-semibold border border-rose-100">Logout</button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-300 pt-16 pb-8 px-4 sm:px-8 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
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
            <button onClick={() => setActiveTab('privacy-policy')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => setActiveTab('terms')} className="hover:text-slate-300">Terms of Service</button>
          </div>
        </div>
      </footer>
    </div>
  );
}