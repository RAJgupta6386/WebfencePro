
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      // Simulate login - replace with actual authentication logic
      // For demo, we'll accept any email with a password of 'password'
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (password !== 'password') {
        throw new Error('Invalid credentials');
      }
      
      // Success - show toast and redirect to dashboard
      toast({
        title: "Login successful",
        description: "Welcome back to WebFencePro!",
      });
      
      navigate('/dashboard');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // For demo - handle admin demo login
  const handleDemoLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    setEmail('admin@example.com');
    setPassword('password');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-900/20 border border-red-800 rounded-md p-3 flex items-start">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-2" />
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}
      
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-500" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 bg-cyber-dark border-white/10 focus:border-cyber-purple focus:ring-0"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="/forgot-password" className="text-sm font-medium text-cyber-purple hover:text-cyber-purple-light">
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10 bg-cyber-dark border-white/10 focus:border-cyber-purple focus:ring-0"
              required
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className="text-sm">Remember me</Label>
          </div>
          
          <Button type="button" variant="link" className="text-cyber-purple hover:text-cyber-purple-light p-0 h-auto" onClick={handleDemoLogin}>
            Use demo account
          </Button>
        </div>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-cyber-purple hover:bg-cyber-purple-light"
        disabled={isLoading}
      >
        {isLoading ? 'Signing in...' : 'Sign in'}
      </Button>
      
      <div className="text-center mt-4">
        <p className="text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-cyber-purple hover:text-cyber-purple-light">
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
