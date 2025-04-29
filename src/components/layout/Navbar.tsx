
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Features', path: '/#features' },
  { name: 'Solutions', path: '/#solutions' },
  { name: 'Documentation', path: '/docs' },
  { name: 'Pricing', path: '/#pricing' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboard = location.pathname.startsWith('/dashboard');

  // Don't show navbar on auth pages or dashboard
  if (isAuthPage || isDashboard) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-background/80 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-cyber-purple animate-shield-glow" />
              <span className="ml-2 text-xl font-bold text-white">WebFencePro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost" className="text-gray-300 hover:text-white">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-cyber-purple hover:bg-cyber-purple-light text-white">
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden bg-cyber-dark w-full pb-4 px-4",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-4 pt-2 pb-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">
            <Button asChild variant="ghost" className="justify-center">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild className="bg-cyber-purple hover:bg-cyber-purple-light justify-center">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
