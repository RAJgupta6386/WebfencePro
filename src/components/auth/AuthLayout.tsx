
import { ReactNode } from 'react';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-radial-gradient"></div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-10 w-10 text-cyber-purple" />
            <span className="ml-2 text-2xl font-bold text-white">WebFencePro</span>
          </Link>
        </div>
        
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
        </div>
      </div>
      
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="bg-cyber-charcoal py-8 px-6 shadow rounded-lg border border-white/10">
          {children}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} WebFencePro. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
