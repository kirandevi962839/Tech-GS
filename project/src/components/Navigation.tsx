import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] backdrop-blur-sm border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] rounded-lg blur-sm opacity-75"></div>
              <div className="relative bg-gradient-to-r from-[#a259ff] to-[#5e2ccf] p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">Tech GS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#a259ff]'
                      : 'text-[#d0d0d0] hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/lets-talk"
                className="btn-primary px-4 py-2 rounded-lg text-sm font-medium text-white"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-[#a259ff]'
                    : 'text-[#d0d0d0] hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/lets-talk"
              className="block px-3 py-2 btn-primary rounded-lg text-base font-medium text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;