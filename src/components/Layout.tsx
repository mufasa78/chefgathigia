import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play, Instagram, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-orange-900">
      {/* Animated Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-out ${
        scrollY > 50 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-amber-500/20 transform translate-y-0' 
          : 'bg-transparent transform translate-y-0'
      }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-2 h-2 bg-amber-400 rounded-full transition-all duration-1000 ${
            scrollY > 50 ? 'opacity-30 animate-pulse' : 'opacity-0'
          }`}></div>
          <div className={`absolute top-2 right-1/3 w-1 h-1 bg-orange-400 rounded-full transition-all duration-1000 delay-300 ${
            scrollY > 50 ? 'opacity-40 animate-pulse' : 'opacity-0'
          }`}></div>
          <div className={`absolute top-4 left-2/3 w-1.5 h-1.5 bg-red-400 rounded-full transition-all duration-1000 delay-600 ${
            scrollY > 50 ? 'opacity-35 animate-pulse' : 'opacity-0'
          }`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Animated Logo */}
            <Link to="/" className="flex items-center space-x-4 group relative">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg group-hover:shadow-amber-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <img 
                    src="/gathigia-logo.jpeg" 
                    alt="Chef GATHIGIA Logo" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition-all duration-500 group-hover:scale-110"></div>
                {/* Floating particles around logo */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 group-hover:animate-bounce"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent transition-all duration-500 group-hover:from-amber-200 group-hover:to-orange-300">
                  Chef GATHIGIA
                </div>
                <div className="text-xs text-amber-300/80 font-medium tracking-wider uppercase transition-all duration-500 group-hover:text-amber-200">
                  Culinary Excellence
                </div>
              </div>
            </Link>
            
            {/* Animated Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-500 ease-out transform hover:scale-105 ${
                      location.pathname === item.href
                        ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg shadow-amber-500/25'
                        : 'text-amber-100 hover:text-white hover:bg-white/10 hover:shadow-lg hover:shadow-amber-500/10'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Animated underline for active item */}
                    {location.pathname === item.href && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-400 animate-pulse"></div>
                    )}
                    {/* Hover effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                  {/* Floating indicator */}
                  <div className={`absolute -top-1 left-1/2 w-1 h-1 bg-amber-400 rounded-full transition-all duration-500 ${
                    location.pathname === item.href ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}></div>
                </div>
              ))}
              
              {/* Animated TikTok Button */}
              <div className="relative group ml-4">
                <a 
                  href="https://www.tiktok.com/@gathigia.rico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30 hover:from-pink-600 hover:to-red-700"
                >
                  <Play className="inline w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                  Follow on TikTok
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-400 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                </a>
                {/* Floating particles */}
                <div className="absolute -top-2 -right-2 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-1 h-1 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 animate-ping"></div>
              </div>
            </div>

            {/* Animated Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl text-amber-100 hover:text-white hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="transition-all duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu size={24} className="transition-all duration-300 group-hover:scale-110" />
                )}
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </button>
          </div>

          {/* Animated Mobile Menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 py-6 space-y-3">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-500 transform hover:scale-105 ${
                    location.pathname === item.href
                      ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                      : 'text-amber-100 hover:text-white hover:bg-white/10 hover:shadow-lg'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://www.tiktok.com/@gathigia.rico"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-pink-500 to-red-600 text-white px-4 py-3 rounded-xl font-medium text-center mt-4 transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                style={{
                  animationDelay: `${navigation.length * 100}ms`,
                  transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMenuOpen ? 1 : 0
                }}
              >
                <Play className="inline w-4 h-4 mr-2" />
                Follow on TikTok
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/90 backdrop-blur-xl border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/gathigia-logo.jpeg" 
                    alt="Chef GATHIGIA Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Chef GATHIGIA
                  </div>
                  <div className="text-sm text-amber-300/80 font-medium">
                    Culinary Excellence
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-md">
                Bringing authentic flavors and culinary expertise to your kitchen. Specializing in private chef services, cooking lessons, and exclusive culinary experiences.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.tiktok.com/@gathigia.rico" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Play size={18} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Instagram size={18} className="text-white" />
                </a>
                <a href="mailto:chef@gathigia.com" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Mail size={18} className="text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-slate-300 hover:text-amber-400 transition-colors duration-300">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
              <ul className="space-y-3 text-slate-300">
                <li>Private Chef Services</li>
                <li>Cooking Lessons</li>
                <li>Exclusive Cooking Club</li>
                <li>Culinary Consulting</li>
                <li>Event Catering</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 text-sm">
              © 2025 Chef GATHIGIA. All rights reserved. • All things food 🍳
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;