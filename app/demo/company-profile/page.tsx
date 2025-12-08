import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Users, Zap, Shield, Star, Globe, TrendingUp, Award, Clock, Sparkles, Play, ChevronRight, BarChart3, Lock, Smartphone } from 'lucide-react';

export default function CompanyLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counts, setCounts] = useState({ users: 0, projects: 0, satisfaction: 0, countries: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateCount = (target, key, duration = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounts(prev => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(50000, 'users');
          animateCount(12000, 'projects');
          animateCount(99, 'satisfaction');
          animateCount(150, 'countries');
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Lightning Performance",
      description: "Optimized for speed with sub-100ms response times. Your users will feel the difference.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Military-Grade Security",
      description: "End-to-end encryption with SOC 2 Type II compliance. Your data is always protected.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Team Collaboration",
      description: "Real-time sync across devices. Work together seamlessly from anywhere in the world.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-7 h-7" />,
      title: "Global Infrastructure",
      description: "Deployed across 25+ regions worldwide. Low latency guaranteed wherever you are.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Advanced Analytics",
      description: "Deep insights with AI-powered analytics. Make data-driven decisions with confidence.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile First",
      description: "Native apps for iOS and Android. Full functionality on the go, anytime, anywhere.",
      color: "from-rose-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechVision Inc.",
      content: "Velocity transformed how our team collaborates. We've seen a 300% increase in productivity and deployment frequency. The platform is intuitive, powerful, and simply works.",
      rating: 5,
      image: "SC",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Product",
      company: "InnovateNow",
      content: "The best investment we've made this year. Our customers love the speed and reliability. Support team is incredible - always there when we need them.",
      rating: 5,
      image: "MT",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Lisa Rodriguez",
      role: "CTO",
      company: "FutureLabs",
      content: "We migrated from three different tools to Velocity. The consolidation saved us $50K annually and our team is happier than ever. Couldn't recommend it more.",
      rating: 5,
      image: "LR",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "19",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 5 team members",
        "10GB storage space",
        "Basic analytics dashboard",
        "Email support (24h response)",
        "Core features included",
        "Mobile app access"
      ],
      highlighted: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "49",
      period: "month",
      description: "Best for growing businesses",
      features: [
        "Up to 25 team members",
        "100GB storage space",
        "Advanced analytics & reports",
        "Priority support (2h response)",
        "All features unlocked",
        "API access & webhooks",
        "Custom integrations",
        "SSO authentication"
      ],
      highlighted: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large-scale operations",
      features: [
        "Unlimited team members",
        "Unlimited storage",
        "Custom analytics & BI tools",
        "24/7 dedicated support",
        "White-label options",
        "Advanced security features",
        "Custom SLA agreements",
        "Dedicated account manager"
      ],
      highlighted: false,
      cta: "Contact Sales"
    }
  ];

  const trustedCompanies = ["Google", "Microsoft", "Stripe", "Airbnb", "Uber", "Netflix"];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Cursor Glow Effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/70 backdrop-blur-2xl shadow-sm border-b border-slate-200/50' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  Velocity
                </span>
                <span className="text-xs text-slate-500 font-medium -mt-1">by Innovate</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {['Features', 'Pricing', 'Reviews', 'Resources'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium rounded-xl hover:bg-slate-50 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-1/2 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="px-6 py-2.5 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all">
                Sign In
              </button>
              <button className="group relative px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105">
                <span className="relative z-10 flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-slate-100">
              <div className="space-y-2">
                {['Features', 'Pricing', 'Reviews', 'Resources'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <button className="w-full px-6 py-3 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all">
                    Sign In
                  </button>
                  <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all">
                    Get Started Free
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-blue-100 rounded-full shadow-lg shadow-blue-100/50 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Trusted by 50,000+ teams worldwide
              </span>
              <ChevronRight className="w-4 h-4 text-blue-600" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
              Build the future of
              <span className="block mt-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                your business
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
              The modern platform that empowers teams to collaborate, innovate, and scale with confidence. Experience the future of work today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <button className="group relative px-10 py-5 bg-blue-600 text-white text-lg rounded-2xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-600/50 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group px-10 py-5 bg-white text-slate-700 text-lg rounded-2xl font-bold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all hover:shadow-xl w-full sm:w-auto flex items-center justify-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col items-center gap-6 pt-8">
              <div className="flex items-center gap-10">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-white flex items-center justify-center text-white text-sm font-bold shadow-lg transform hover:scale-110 hover:z-10 transition-all">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 font-semibold">4.9/5 from 3,200+ reviews</p>
                </div>
              </div>

              {/* Trusted Companies */}
              <div className="w-full max-w-4xl">
                <p className="text-sm text-slate-500 font-medium mb-6">TRUSTED BY INDUSTRY LEADERS</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
                  {trustedCompanies.map((company, i) => (
                    <div key={i} className="text-center text-slate-400 font-bold text-lg hover:text-slate-600 transition-colors">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-20 lg:mt-28 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none h-32 bottom-0"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 lg:p-12">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-slate-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 ml-4 h-7 bg-slate-100 rounded-lg flex items-center px-4">
                    <Lock className="w-3 h-3 text-slate-400 mr-2" />
                    <span className="text-xs text-slate-500">velocity.app/dashboard</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-6">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[
                      { icon: TrendingUp, label: "Revenue", value: "+32.5%", color: "from-green-500 to-emerald-500" },
                      { icon: Users, label: "Active Users", value: "24.8K", color: "from-blue-500 to-cyan-500" },
                      { icon: BarChart3, label: "Conversion", value: "18.2%", color: "from-purple-500 to-pink-500" },
                      { icon: Clock, label: "Avg. Time", value: "12m 34s", color: "from-orange-500 to-red-500" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white rounded-xl p-5 shadow-lg border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-sm text-slate-500 font-medium mb-1">{stat.label}</div>
                        <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Performance Analytics</h3>
                        <p className="text-sm text-slate-500">Last 30 days overview</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-semibold">Day</button>
                        <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-semibold">Week</button>
                        <button className="px-4 py-2 bg-slate-50 text-slate-600 rounded-lg text-sm font-semibold">Month</button>
                      </div>
                    </div>
                    <div className="h-48 bg-gradient-to-t from-blue-50 to-transparent rounded-xl relative overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d="M 0 120 Q 100 80, 200 100 T 400 60 T 600 80 T 800 40 L 800 200 L 0 200 Z" fill="url(#chartGradient)"/>
                        <path d="M 0 120 Q 100 80, 200 100 T 400 60 T 600 80 T 800 40" stroke="rgb(59, 130, 246)" strokeWidth="3" fill="none"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-24 lg:py-32 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {[
              { value: counts.users, suffix: '+', label: 'Active Users' },
              { value: counts.projects, suffix: '+', label: 'Projects Delivered' },
              { value: counts.satisfaction, suffix: '%', label: 'Satisfaction Rate' },
              { value: counts.countries, suffix: '+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-3 group">
                <div className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-slate-300 font-semibold text-lg">{stat.label}</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-36 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">POWERFUL FEATURES</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Everything you need,
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                nothing you don't
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Built for modern teams who demand performance, security, and scalability without compromise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative p-8 lg:p-10 bg-white rounded-3xl border-2 border-slate-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{feature.description}</p>
                  <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 lg:py-36 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full">
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-700">SIMPLE PRICING</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Plans that scale
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                with your business
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              Start free, upgrade when you're ready. No hidden fees, cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 lg:p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-2 border-blue-400' 
                    : 'bg-white border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 text-sm font-bold rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-3xl font-bold mb-3 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-base ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                      {plan.description}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    {plan.price !== "Custom" ? (
                      <>
                        <span className={`text-6xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                          ${plan.price}
                        </span>
                        <span className={`text-lg ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                          /{plan.period}
                        </span>
                      </>
                    ) : (
                      <span className={`text-6xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        {plan.price}
                      </span>
                    )}
                  </div>
                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 hover:shadow-xl ${
                    plan.highlighted 
                      ? 'bg-white text-blue-600 hover:bg-blue-50' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}>
                    {plan.cta}
                  </button>
                  <div className="space-y-4 pt-6 border-t border-slate-200/20">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'}`} />
                        <span className={`text-base ${plan.highlighted ? 'text-blue-50' : 'text-slate-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 lg:py-36 px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 border border-blue-100 rounded-full">
              <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
              <span className="text-sm font-bold text-blue-700">CUSTOMER REVIEWS</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Loved by thousands
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                of teams worldwide
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto font-light">
              See what our customers have to say about their experience with Velocity.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 lg:p-16 border border-slate-200">
              <div className="absolute top-10 left-10 text-blue-600 opacity-10">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-2.2 1.8-4 4-4V8z"/>
                </svg>
              </div>
              
              <div className="relative space-y-8">
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-2xl lg:text-4xl text-slate-700 text-center leading-relaxed font-medium">
                  "{testimonials[activeTestimonial].content}"
                </p>
                
                <div className="flex flex-col items-center space-y-5">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${testimonials[activeTestimonial].gradient} flex items-center justify-center text-white text-2xl font-bold shadow-xl`}>
                    {testimonials[activeTestimonial].image}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-xl mb-1">{testimonials[activeTestimonial].name}</div>
                    <div className="text-slate-600 text-lg">{testimonials[activeTestimonial].role}</div>
                    <div className="text-blue-600 font-semibold mt-1">{testimonials[activeTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeTestimonial 
                      ? 'bg-blue-600 w-12 h-4' 
                      : 'bg-slate-300 w-4 h-4 hover:bg-slate-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-36 px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <h2 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Ready to transform
            <span className="block mt-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              your workflow?
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Join 50,000+ companies already using Velocity to build the future. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
            <button className="group relative px-10 py-5 bg-white text-blue-600 text-lg rounded-2xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:scale-105 w-full sm:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white text-lg rounded-2xl font-bold hover:bg-white hover:text-slate-900 transition-all w-full sm:w-auto">
              Contact Sales
            </button>
          </div>
          <p className="text-slate-400 text-base">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">Velocity</span>
                  <span className="text-xs text-slate-400 font-medium -mt-1">by Innovate</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Building the future of work with innovative solutions that empower teams to achieve more together.
              </p>
              <div className="flex gap-4">
                {['twitter', 'github', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-11 h-11 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110">
                    <div className="w-5 h-5 bg-current rounded"></div>
                  </a>
                ))}
              </div>
            </div>
            
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Roadmap', 'Changelog'] },
              { title: 'Company', links: ['About Us', 'Blog', 'Careers', 'Press', 'Partners'] },
              { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'API Status', 'Contact'] }
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-5 text-lg">{section.title}</h4>
                <div className="space-y-3">
                  {section.links.map((link, j) => (
                    <a key={j} href="#" className="block text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2024 Velocity. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}