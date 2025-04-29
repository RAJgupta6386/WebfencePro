
import { ArrowRight, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-20 bg-cyber-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-primary">
            Ready to Secure Your Web Applications?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Join developers, DevOps teams, and security professionals who trust WebFencePro to protect their applications from cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-cyber-purple hover:bg-cyber-purple-light text-white">
              <Link to="/signup">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 hover:bg-white/5">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="bg-cyber-dark rounded-full h-8 w-8 flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-cyber-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Open Source Core</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-cyber-dark rounded-full h-8 w-8 flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-cyber-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Self-hosted Solution</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-cyber-dark rounded-full h-8 w-8 flex items-center justify-center mr-2">
                <svg className="h-4 w-4 text-cyber-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span>Active Community Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
