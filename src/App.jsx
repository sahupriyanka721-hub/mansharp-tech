import React, { useState, useEffect } from 'react';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('light');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Click-based AI dropdown state
  const [isAiDropdownOpen, setIsAiDropdownOpen] = useState(false);

  // Mobile Menu Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const bannerSlides = [
    {
      id: 'about',
      title: 'Empowering Innovation & Possibilities Beyond Boundaries',
      desc: 'At Mansharp Technologies, we ignite possibilities through cutting-edge technology. Our journey is a roadmap to the future.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-and-data-31918-large.mp4',
      subtitle: 'About Us',
      contentTitle: 'We Are Mansharp Technologies',
      contentText: 'Embarking on our journey, our team of Microsoft Certified Professionals strives to deliver extraordinary solutions. We dream of bringing remarkable individuals together and transforming technology for positive change.'
    },
    {
      id: 'ai-transformation',
      title: 'Shape the Future of Your Enterprise with AI Solutions',
      desc: 'Unlock limitless growth with custom AI models, Microsoft Copilot integration, and smart cloud architectures.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-artificial-intelligence-plexus-background-animation-41584-large.mp4',
      subtitle: 'Mansharp AI',
      contentTitle: 'Transforming Business With Artificial Intelligence',
      contentText: 'Empower every individual, team, and industry with next-gen automated workflows, intelligent data pipelines, and secure enterprise AI.'
    },
    {
      id: 'ai-copilot-pricing',
      title: 'Microsoft Copilot Plans & Pricing',
      desc: 'Enterprise-grade security and privacy. Trusted by companies around the world.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-close-up-42861-large.mp4',
      subtitle: 'AI Pricing',
      contentTitle: 'Flexible Plans for Your Scale',
      contentText: 'Explore Microsoft Copilot pricing models tailored for individual productivity and organization-wide transformation.'
    },
    {
      id: 'ai-services',
      title: 'Explore Our Range of AI Powered Services',
      desc: 'Curated AI services for successful AI adoption and implementation across your enterprise.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-data-center-with-blue-lights-32431-large.mp4',
      subtitle: 'AI Services',
      contentTitle: 'Curated AI Adoption Services',
      contentText: 'From custom Copilot studio integrations to building your own Azure AI services, we guide you at every step.'
    },
    {
      id: 'ai-business-leaders',
      title: 'AI for Business Leaders',
      desc: 'Strategic insights and executive frameworks to leverage artificial intelligence effectively.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-business-team-working-in-an-office-41585-large.mp4',
      subtitle: 'Executive AI',
      contentTitle: 'Leading With Intelligence',
      contentText: 'Empower leadership teams with data-driven decision tools and secure enterprise AI guidelines.'
    },
    {
      id: 'why-choose-us',
      title: 'Why Choose Mansharp Technologies',
      desc: 'Discover why leading enterprises trust our professionals for unmatched digital evolution.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-team-of-coworkers-brainstorming-in-an-office-41583-large.mp4',
      subtitle: 'Excellence & Trust',
      contentTitle: 'Solutions Expertise',
      contentText: 'We deliver innovative, growth-focused solutions that help businesses thrive and stay ahead in today’s fast-changing digital landscape.'
    },
    {
      id: 'life-at-mansharp',
      title: 'Life At Mansharp',
      desc: 'A culture built on collaboration, continuous learning, celebration, and pushing boundaries together.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-happy-colleagues-celebrating-in-an-office-42865-large.mp4',
      subtitle: 'Our Culture',
      contentTitle: 'Where Passion Meets Innovation',
      contentText: 'Our workplace thrives on diverse perspectives, continuous learning, and celebrating every success together as one unified family.'
    },
    {
      id: 'leadership',
      title: 'Together We Lead!',
      desc: 'Guiding the path of digital transformation with decades of core technological and strategic expertise.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-conference-room-41582-large.mp4',
      subtitle: 'Visionary Leadership',
      contentTitle: 'Guiding With Vision & Integrity',
      contentText: 'Our leaders foster an environment of accountability, continuous growth, and long-term strategic success for global clients.'
    },
    {
      id: 'healthcare',
      title: 'Transforming Healthcare with Smart Solutions',
      desc: 'Secure, compliant, and advanced digital platforms designed for modern healthcare providers.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-medical-research-laboratory-with-advanced-equipment-43093-large.mp4',
      subtitle: 'Healthcare Industry',
      contentTitle: 'Next-Gen Patient Care Systems',
      contentText: 'We build HIPAA-compliant, highly secure cloud solutions that streamline clinical workflows and improve patient health outcomes.'
    },
    {
      id: 'education',
      title: 'Smart Education & E-Learning Platforms',
      desc: 'Empowering institutions and learners worldwide with interactive, scalable cloud infrastructures.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-students-working-together-in-a-classroom-43100-large.mp4',
      subtitle: 'Education Industry',
      contentTitle: 'Digital Transformation for Schools & Universities',
      contentText: 'Modernizing classrooms and remote learning frameworks with robust, cloud-enabled educational management systems.'
    },
    {
      id: 'public-sector',
      title: 'Public Sector & Government Digitalization',
      desc: 'Streamlining citizen services through transparent, secure, and highly efficient digital government tech.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-modern-city-with-traffic-at-night-aerial-view-41586-large.mp4',
      subtitle: 'Public Sector',
      contentTitle: 'Transparent Citizen Services',
      contentText: 'Empowering government bodies with secure data pipelines, streamlined workflows, and citizen-first digital portals.'
    },
    {
      id: 'financial-services',
      title: 'Financial Services & Banking Tech',
      desc: 'Robust, secure, and high-performance financial systems designed to protect data and accelerate transactions.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-financial-stock-market-trading-screen-background-41588-large.mp4',
      subtitle: 'Fintech & Banking',
      contentTitle: 'Secure Financial Infrastructures',
      contentText: 'Providing encrypted, low-latency financial software solutions that safeguard sensitive assets and scale with market demands.'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Supply Chain Innovation',
      desc: 'Automating industrial processes, IoT integration, and smart analytics for manufacturing excellence.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-automated-industrial-robotic-arm-working-in-a-factory-42999-large.mp4',
      subtitle: 'Manufacturing Industry',
      contentTitle: 'Smart Factory Automation',
      contentText: 'Connecting factory floors to cloud intelligence for predictive maintenance, optimized supply chains, and reduced downtime.'
    },
    {
      id: 'energy',
      title: 'Energy & Utilities Smart Solutions',
      desc: 'Sustainable technologies and data management systems tailored for modern energy enterprises.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-wind-turbines-in-a-green-field-43044-large.mp4',
      subtitle: 'Energy Sector',
      contentTitle: 'Sustainable Energy Management',
      contentText: 'Helping utility providers monitor grid performance, reduce carbon footprints, and analyze resource distribution efficiently.'
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce Digital Growth',
      desc: 'Enhancing customer experiences and backend inventory systems through high-speed cloud solutions.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-shopping-mall-interior-with-escalators-43075-large.mp4',
      subtitle: 'Retail & Commerce',
      contentTitle: 'Omnichannel Retail Experiences',
      contentText: 'Scaling e-commerce platforms with real-time inventory tracking, AI-driven recommendations, and seamless checkout flows.'
    },
    {
      id: 'software',
      title: 'Software & Technology Product Development',
      desc: 'Building custom software products, scalable architectures, and next-gen enterprise tools.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-codes-in-a-computer-43088-large.mp4',
      subtitle: 'Software Products',
      contentTitle: 'Custom Engineering & SaaS',
      contentText: 'Turning complex software concepts into market-ready, highly reliable, and cloud-native applications.'
    },
    {
      id: 'blogs',
      title: 'Mansharp Insights & Industry Blogs',
      desc: 'Read expert thoughts on Cloud Computing, Artificial Intelligence, and more.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-typing-on-a-laptop-43091-large.mp4',
      subtitle: 'Resources & Insights',
      contentTitle: 'Latest Tech Articles & Trends',
      contentText: 'Stay updated with deep dives into emerging cloud patterns, enterprise app strategies, and expert engineering notes.'
    },
    {
      id: 'case-studies',
      title: 'Proven Success Stories & Case Studies',
      desc: 'See how we have helped global organizations overcome complex technological challenges.',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-business-colleagues-analyzing-graphs-in-a-meeting-41581-large.mp4',
      subtitle: 'Success Stories',
      contentTitle: 'Transforming Challenges Into Triumphs',
      contentText: 'Explore our documented case histories showcasing measurable business value delivered across diverse industry verticals.'
    },
    {
      id: 'workshops',
      title: 'Events & Technical Workshops',
      desc: 'Join our interactive seminars, webinars, and technology skill-building workshops.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-speaker-at-a-conference-presenting-to-an-audience-42867-large.mp4',
      subtitle: 'Events & Learning',
      contentTitle: 'Connect & Learn With Experts',
      contentText: 'Participate in our live sessions designed to educate tech leaders on leveraging modern cloud architectures and AI.'
    },
    {
      id: 'department-solutions',
      title: 'Enterprise Department Solutions',
      desc: 'Targeted workflow enhancements across HR, Finance, Operations, and Sales departments.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-business-team-working-together-in-an-office-41585-large.mp4',
      subtitle: 'Solutions',
      contentTitle: 'Optimizing Every Business Unit',
      contentText: 'Tailored digital toolsets designed to remove departmental silos, automate repetitive tasks, and boost organizational output.'
    },
    {
      id: 'licenses',
      title: 'Software Licenses & Enterprise Agreements',
      desc: 'Streamline your enterprise licensing needs with certified partners.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-and-data-31918-large.mp4',
      subtitle: 'Enterprise Licensing',
      contentTitle: 'Hassle-Free Software Procurement',
      contentText: 'Expert guidance on procuring, managing, and optimizing volume licensing and cloud subscriptions.'
    },
    {
      id: 'technologies',
      title: 'Cutting-Edge Technologies & Cloud',
      desc: 'Empowering your business with state-of-the-art cloud architecture and modern developer tools.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-data-center-with-blue-lights-32431-large.mp4',
      subtitle: 'Technology Stack',
      contentTitle: 'Built on Cloud & AI',
      contentText: 'Leveraging enterprise-grade cloud frameworks, advanced analytics, and robust security protocols for maximum scalability.'
    },
    {
      id: 'integration',
      title: 'System Integration & IT Consulting',
      desc: 'Seamlessly connect disparate legacy apps and systems with modern cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-server-room-with-blue-lights-32430-large.mp4',
      subtitle: 'Consulting & Strategy',
      contentTitle: 'Bridging Legacy & Modern Systems',
      contentText: 'Strategic roadmap planning and seamless API integration services to unify your entire IT ecosystem.'
    },
    {
      id: 'aim-app',
      title: 'AIM Asset Management Application',
      desc: 'Track, manage, and optimize your organization assets in real-time with supreme efficiency.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-close-up-42861-large.mp4',
      subtitle: 'Products',
      contentTitle: 'Real-Time Asset Tracking',
      contentText: 'Our flagship AIM application offers end-to-end visibility and lifecycle management for enterprise hardware and software assets.'
    },
    {
      id: 'org-chart',
      title: 'Mansharp Org Chart Solution',
      desc: 'Automate reporting lines and visualize team hierarchies dynamically with our custom app.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-in-a-conference-room-41582-large.mp4',
      subtitle: 'Products',
      contentTitle: 'Dynamic Corporate Hierarchy Mapping',
      contentText: 'Effortlessly visualize team structures, manage reporting lines, and sync employee directories in real-time.'
    },
    {
      id: 'contact',
      title: 'Get in Touch With Our Experts',
      desc: 'Let us discuss how we can accelerate your business growth through advanced technology solutions.',
      image: 'https://images.unsplash.com/photo-1423596653951-9b62843232f3?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-customer-service-representative-working-on-a-laptop-42866-large.mp4',
      subtitle: 'Contact Us',
      contentTitle: 'We Are Here to Help',
      contentText: 'Reach out to us or drop us a message to start building your next big digital initiative.'
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy & Data Security',
      desc: 'Our steadfast commitment to maintaining data security, confidentiality, and your absolute privacy.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-code-and-data-31918-large.mp4',
      subtitle: 'Legal',
      contentTitle: 'Your Privacy Matters',
      contentText: 'Read how we protect, collect, and handle your data securely in compliance with international privacy regulations.'
    },
    {
      id: 'terms',
      title: 'Terms And Conditions',
      desc: 'Guidelines and legal agreements governing the use of Mansharp Technologies services and website.',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80',
      video: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-codes-in-a-computer-43088-large.mp4',
      subtitle: 'Legal',
      contentTitle: 'Terms of Service',
      contentText: 'Important legal terms and conditions outlining user responsibilities and service agreements.'
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
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setActiveTab('about'); setIsMobileMenuOpen(false); }}>
          <div className="bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold h-10 w-10 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="font-extrabold text-base sm:text-lg leading-tight tracking-tight">MANSHARP</h1>
            <p className="text-[10px] tracking-widest text-blue-500 font-bold uppercase">TECHNOLOGIES</p>
          </div>
        </div>

        {/* DESKTOP NAVIGATION MENUS */}
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

        {/* Theme Toggle, Admin Buttons & Mobile Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={toggleTheme} 
            className={`p-2 sm:px-3 sm:py-2.5 rounded-xl border text-xs font-semibold transition-all flex items-center justify-center shadow-sm ${isDark ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
            title="Toggle Light/Dark Theme"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <button onClick={() => { setIsAdmin(!isAdmin); setIsLoggedIn(false); setIsMobileMenuOpen(false); }} className="bg-slate-900 hover:bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-md">
            {isAdmin ? 'Website View' : 'Admin Panel 🛡️'}
          </button>

          {!isAdmin && (
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className={`lg:hidden p-2 rounded-xl border text-base font-bold ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>
      </header>

      {/* MOBILE FULLSCREEN DRAWER MENU */}
      {!isAdmin && isMobileMenuOpen && (
        <div className={`lg:hidden fixed inset-0 top-[73px] z-40 overflow-y-auto p-4 space-y-4 shadow-2xl transition-all ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')} className="w-full flex justify-between items-center py-2 font-bold text-sm">
              <span>About Us</span>
              <span>{mobileDropdown === 'about' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'about' && (
              <div className="pl-4 flex flex-col gap-2 pt-2 text-xs">
                <button onClick={() => { setActiveTab('about'); setIsMobileMenuOpen(false); }} className="text-left py-1">About Us</button>
                <button onClick={() => { setActiveTab('why-choose-us'); setIsMobileMenuOpen(false); }} className="text-left py-1">Why Choose Us</button>
                <button onClick={() => { setActiveTab('life-at-mansharp'); setIsMobileMenuOpen(false); }} className="text-left py-1">Life At Mansharp</button>
                <button onClick={() => { setActiveTab('leadership'); setIsMobileMenuOpen(false); }} className="text-left py-1">Leadership</button>
              </div>
            )}
          </div>

          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'ai' ? null : 'ai')} className="w-full flex justify-between items-center py-2 font-bold text-sm text-blue-500">
              <span>✨ AI Solutions</span>
              <span>{mobileDropdown === 'ai' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'ai' && (
              <div className="pl-4 flex flex-col gap-2 pt-2 text-xs">
                <button onClick={() => { setActiveTab('ai-transformation'); setIsMobileMenuOpen(false); }} className="text-left py-1">AI Transformation</button>
                <button onClick={() => { setActiveTab('ai-copilot-pricing'); setIsMobileMenuOpen(false); }} className="text-left py-1">Microsoft Copilot Pricing</button>
                <button onClick={() => { setActiveTab('ai-services'); setIsMobileMenuOpen(false); }} className="text-left py-1">AI Services</button>
                <button onClick={() => { setActiveTab('ai-business-leaders'); setIsMobileMenuOpen(false); }} className="text-left py-1">AI for Business Leaders</button>
              </div>
            )}
          </div>

          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'industries' ? null : 'industries')} className="w-full flex justify-between items-center py-2 font-bold text-sm">
              <span>Industries</span>
              <span>{mobileDropdown === 'industries' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'industries' && (
              <div className="pl-4 grid grid-cols-2 gap-2 pt-2 text-xs">
                {['Healthcare', 'Education', 'Public Sector', 'Financial Services', 'Manufacturing', 'Energy', 'Retail', 'Software'].map((ind, idx) => {
                  const slug = ind.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <button key={idx} onClick={() => { setActiveTab(slug); setIsMobileMenuOpen(false); }} className="text-left py-1">{ind}</button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'resources' ? null : 'resources')} className="w-full flex justify-between items-center py-2 font-bold text-sm">
              <span>Resources & Insights</span>
              <span>{mobileDropdown === 'resources' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'resources' && (
              <div className="pl-4 flex flex-col gap-2 pt-2 text-xs">
                <button onClick={() => { setActiveTab('blogs'); setIsMobileMenuOpen(false); }} className="text-left py-1">Blogs</button>
                <button onClick={() => { setActiveTab('case-studies'); setIsMobileMenuOpen(false); }} className="text-left py-1">Case Studies</button>
                <button onClick={() => { setActiveTab('workshops'); setIsMobileMenuOpen(false); }} className="text-left py-1">Events & Workshops</button>
              </div>
            )}
          </div>

          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'solutions' ? null : 'solutions')} className="w-full flex justify-between items-center py-2 font-bold text-sm">
              <span>Solutions</span>
              <span>{mobileDropdown === 'solutions' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'solutions' && (
              <div className="pl-4 flex flex-col gap-2 pt-2 text-xs">
                <button onClick={() => { setActiveTab('department-solutions'); setIsMobileMenuOpen(false); }} className="text-left py-1">Department Solutions</button>
                <button onClick={() => { setActiveTab('licenses'); setIsMobileMenuOpen(false); }} className="text-left py-1">Licenses</button>
                <button onClick={() => { setActiveTab('technologies'); setIsMobileMenuOpen(false); }} className="text-left py-1">Technologies</button>
                <button onClick={() => { setActiveTab('integration'); setIsMobileMenuOpen(false); }} className="text-left py-1">Integration & Consulting</button>
              </div>
            )}
          </div>

          <div className="border-b pb-2 border-slate-700/50">
            <button onClick={() => setMobileDropdown(mobileDropdown === 'products' ? null : 'products')} className="w-full flex justify-between items-center py-2 font-bold text-sm">
              <span>Products</span>
              <span>{mobileDropdown === 'products' ? '▲' : '▼'}</span>
            </button>
            {mobileDropdown === 'products' && (
              <div className="pl-4 flex flex-col gap-2 pt-2 text-xs">
                <button onClick={() => { setActiveTab('aim-app'); setIsMobileMenuOpen(false); }} className="text-left py-1">AIM App</button>
                <button onClick={() => { setActiveTab('org-chart'); setIsMobileMenuOpen(false); }} className="text-left py-1">Mansharp Org Chart</button>
              </div>
            )}
          </div>

          <button onClick={() => { setActiveTab('contact'); setIsMobileMenuOpen(false); }} className="w-full py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold text-sm">Contact Us</button>
        </div>
      )}

      {/* MAIN CONTENT AREA WITH RUNNING VIDEO BANNER */}
      {!isAdmin ? (
        <main className="flex-1">
          {/* Running Video & Image Banner Section */}
          <div className="relative w-full h-[450px] sm:h-[550px] overflow-hidden flex items-center justify-center">
            {/* Background Running Video */}
            <video 
              key={activeBanner.video}
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-50"
            >
              <source src={activeBanner.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Tint */}
            <div className="absolute inset-0 bg-slate-950/40 z-10"></div>

            {/* Banner Text Content */}
            <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
              <span className="bg-blue-600/80 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-blue-400/30 shadow-lg">
                {activeBanner.subtitle}
              </span>
              <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight leading-tight drop-shadow-md">
                {activeBanner.title}
              </h1>
              <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-medium drop-shadow">
                {activeBanner.desc}
              </p>
            </div>
          </div>

          {/* Dynamic Content Section Based on Clicked Tab */}
          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-wider">Mansharp Excellence</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {activeBanner.contentTitle}
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {activeBanner.contentText}
              </p>
              <button onClick={() => setActiveTab('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 transition-all">
                Connect With Our Team
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${isDark ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-white'}`}>
                <img 
                  src={activeBanner.image} 
                  alt={activeBanner.contentTitle} 
                  className="w-full h-80 object-cover transform hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* ADMIN PANEL VIEW */
        <div className="flex-1 max-w-md mx-auto p-6 w-full flex flex-col justify-center items-center">
          {!isLoggedIn ? (
            <div className={`w-full p-8 border rounded-3xl shadow-2xl space-y-6 ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-extrabold">Admin Login</h2>
                <p className="text-xs text-slate-400">Enter credentials to access admin controls.</p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold mb-1">Mobile Number</label>
                  <input 
                    type="text" 
                    value={mobile} 
                    onChange={(e) => setMobile(e.target.value)} 
                    placeholder="9876543210" 
                    className={`w-full p-3 rounded-xl border text-sm outline-none focus:border-blue-500 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Password</label>
                  <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="admin123" 
                    className={`w-full p-3 rounded-xl border text-sm outline-none focus:border-blue-500 ${isDark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}
                    required 
                  />
                </div>
                <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 transition-all">
                  Login to Dashboard
                </button>
              </form>
            </div>
          ) : (
            <div className={`w-full p-8 border rounded-3xl shadow-2xl space-y-6 text-center ${isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
              <h2 className="text-2xl font-extrabold">Welcome, Admin! 🎉</h2>
              <p className="text-sm text-slate-400">You are successfully logged into the Mansharp Technologies secure portal.</p>
              <button onClick={() => setIsLoggedIn(false)} className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold text-xs shadow-md">
                Logout
              </button>
            </div>
          )}
        </div>
      )}

      {/* FOOTER */}
      <footer className={`border-t py-8 px-4 text-center text-xs ${isDark ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <p>© {new Date().getFullYear()} Mansharp Technologies Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}