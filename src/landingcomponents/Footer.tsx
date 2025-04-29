
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-typhon-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center">
              <Image src="/logo.png" width={130} height={130} alt='Logo'/>
            </a>
            <p className="mt-4 text-gray-400">
              AI-powered crypto intelligence platform revolutionizing blockchain investments through advanced analytics.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Pricing</a></li>
                <li><a href="#security" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Security</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Documentation</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#5ca9d6] transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Typhon AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-typhon-highlight transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-typhon-highlight transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-typhon-highlight transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;