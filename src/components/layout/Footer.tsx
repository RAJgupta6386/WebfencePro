
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Shield className="h-6 w-6 text-cyber-purple" />
              <span className="ml-2 text-lg font-bold text-white">WebFencePro</span>
            </Link>
            <p className="text-sm text-gray-400">
              Advanced Web Application Firewall for modern applications. Protect your web apps from common cyber threats.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyber-purple transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/#features" className="text-gray-400 hover:text-white text-sm">Features</a></li>
              <li><a href="/#pricing" className="text-gray-400 hover:text-white text-sm">Pricing</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
              <li><a href="/#solutions" className="text-gray-400 hover:text-white text-sm">Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-gray-400 hover:text-white text-sm">Documentation</a></li>
              <li><a href="/docs/api" className="text-gray-400 hover:text-white text-sm">API Reference</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm">GitHub Repository</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} WebFencePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
