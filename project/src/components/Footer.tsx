import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Tech GS */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#5e2ccf] to-[#a259ff] rounded-lg flex items-center justify-center mr-3 glow-effect">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Tech GS</span>
            </div>
            <p className="text-[#d0d0d0] leading-relaxed">
              We build high-quality websites that help businesses grow online. Transform your digital presence with our expert web development services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Let\'s Talk', path: '/lets-talk' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#d0d0d0] hover:text-[#a259ff] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors duration-300 glow-effect-hover"
              >
                <Linkedin className="h-5 w-5 text-[#d0d0d0]" />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors duration-300 glow-effect-hover"
              >
                <Instagram className="h-5 w-5 text-[#d0d0d0]" />
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#a259ff] transition-colors duration-300 glow-effect-hover"
              >
                <Twitter className="h-5 w-5 text-[#d0d0d0]" />
              </a>
            </div>
            <div className="text-[#d0d0d0] text-sm">
              <p>Email: gaurishankarbajpai9565@gmail.com</p>
              <p>Phone: +91 9628399841</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[#d0d0d0]">
            © 2025 Tech GS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;