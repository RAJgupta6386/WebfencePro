
import { Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-cyber-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-radial-gradient"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-cyber-purple/10 rounded-full px-4 py-1.5 mb-6">
            <Shield className="h-4 w-4 text-cyber-purple" />
            <span className="text-sm font-medium text-cyber-purple">Web Application Firewall</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-gradient-primary">
            Protect Your Web Apps From Advanced Threats
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            WebFencePro is a lightweight, self-hosted Web Application Firewall that defends against SQL injection, XSS, and other common cyber attacks.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-cyber-purple hover:bg-cyber-purple-light text-white px-6 py-6 h-auto">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/5 px-6 py-6 h-auto">
              <a href="/docs">View Documentation</a>
            </Button>
          </div>
          
          <div className="mt-12 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-purple to-cyber-blue rounded-xl blur opacity-30"></div>
            <div className="relative bg-cyber-charcoal rounded-lg overflow-hidden border border-white/10">
              <div className="bg-cyber-dark/80 p-2 border-b border-white/10 flex items-center">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-sm text-gray-400">WebFencePro Dashboard</div>
              </div>
              <div className="p-4 md:p-6">
                <img 
                  src="https://placehold.co/1200x600/1A1F2C/9b87f5?text=WebFencePro+Dashboard+Preview" 
                  alt="WebFencePro Dashboard" 
                  className="rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
