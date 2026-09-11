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
  
  // Mobile Menu Drawer State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Mobile Accordion States for Dropdowns inside Drawer
  const [mobileSubMenu, setMobileSubMenu] = useState(null);

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

        {/* DESKTOP NAVIGATION MENUS */}
        {!isAdmin && (
          <nav className={