
import { ReactNode, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Shield, Home, BarChart3, Settings, Lock, Database, AlertTriangle, 
  FileText, LogOut, Menu, X, ChevronRight, ChevronLeft, User
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface SidebarItemProps {
  icon: React.ElementType;
  title: string;
  active?: boolean;
  to: string;
}

const SidebarItem = ({ icon: Icon, title, active, to }: SidebarItemProps) => (
  <Link to={to} className="w-full">
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2",
        active 
          ? "bg-cyber-purple/10 text-cyber-purple" 
          : "text-gray-400 hover:text-white hover:bg-white/5"
      )}
    >
      <Icon size={18} />
      <span>{title}</span>
    </Button>
  </Link>
);

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    // In a real app, we would clear the authentication state here
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/login');
  };

  const sidebarItems = [
    { icon: Home, title: 'Dashboard', to: '/dashboard' },
    { icon: AlertTriangle, title: 'Threats', to: '/dashboard/threats' },
    { icon: BarChart3, title: 'Analytics', to: '/dashboard/analytics' },
    { icon: Lock, title: 'Security Rules', to: '/dashboard/rules' },
    { icon: Database, title: 'Logs', to: '/dashboard/logs' },
    { icon: FileText, title: 'Reports', to: '/dashboard/reports' },
    { icon: Settings, title: 'Settings', to: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-cyber-dark overflow-hidden">
      {/* Sidebar */}
      <div 
        className={cn(
          "bg-cyber-charcoal border-r border-white/10 h-full transition-all duration-300 ease-in-out relative",
          sidebarOpen ? "w-64" : "w-20"
        )}
      >
        <div className="flex items-center justify-between p-4">
          <Link to="/dashboard" className="flex items-center">
            <Shield className="h-6 w-6 text-cyber-purple" />
            {sidebarOpen && <span className="ml-2 text-lg font-bold text-white truncate">WebFencePro</span>}
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white"
          >
            {sidebarOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </Button>
        </div>
        
        <Separator className="bg-white/10" />
        
        <div className="mt-6 space-y-1 px-3">
          {sidebarItems.map((item) => (
            <SidebarItem 
              key={item.title}
              icon={item.icon}
              title={item.title}
              to={item.to}
              active={window.location.pathname === item.to}
            />
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Separator className="bg-white/10 mb-4" />
          <div className="flex items-center justify-between">
            <div className={cn("flex items-center", !sidebarOpen && "justify-center w-full")}>
              <div className="h-8 w-8 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple">
                <User size={16} />
              </div>
              {sidebarOpen && (
                <div className="ml-2">
                  <p className="text-sm font-medium text-white">Admin User</p>
                  <p className="text-xs text-gray-400">admin@example.com</p>
                </div>
              )}
            </div>
            {sidebarOpen && (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleLogout}
                className="text-gray-400 hover:text-white"
              >
                <LogOut size={18} />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-cyber-charcoal border-b border-white/10 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-semibold text-white">{title}</h1>
              {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleLogout} className="hidden md:flex gap-2">
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-cyber-dark p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
