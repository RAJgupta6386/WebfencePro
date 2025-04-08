
import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  BookOpen, 
  Code, 
  Server, 
  Settings, 
  FileText, 
  ChevronDown, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface DocNavItem {
  title: string;
  href: string;
  icon?: React.ElementType;
  children?: DocNavItem[];
}

interface DocLayoutProps {
  children: ReactNode;
}

function NavItem({ item, depth = 0, isOpen = false, toggleOpen }: { 
  item: DocNavItem; 
  depth?: number;
  isOpen?: boolean;
  toggleOpen?: () => void;
}) {
  const { pathname } = useLocation();
  const isActive = pathname === item.href;
  const hasChildren = !!item.children?.length;
  
  return (
    <div className={cn("text-sm", depth === 0 ? "my-3" : "my-1")}>
      <div className="flex items-center">
        {hasChildren && toggleOpen && (
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-5 w-5 p-0 mr-1 hover:bg-transparent" 
            onClick={(e) => {
              e.preventDefault();
              toggleOpen();
            }}
          >
            {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        )}
        
        <Link 
          to={item.href}
          className={cn(
            "flex items-center py-1 px-2 rounded-md w-full",
            isActive 
              ? "bg-cyber-purple/10 text-cyber-purple" 
              : "text-gray-400 hover:text-white hover:bg-white/5",
            depth > 0 && "text-sm"
          )}
        >
          {item.icon && <item.icon className={cn("mr-2 h-4 w-4", depth > 0 && "h-3 w-3")} />}
          <span>{item.title}</span>
        </Link>
      </div>
      
      {hasChildren && isOpen && (
        <div className={cn("pl-4 border-l border-white/10 ml-2 mt-1")}>
          {item.children?.map((child) => (
            <NavItem key={child.href} item={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function DocLayout({ children }: DocLayoutProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "/docs/getting-started": true,
    "/docs/configurations": true,
    "/docs/attacks": true,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleOpen = (href: string) => {
    setOpenItems(prev => ({
      ...prev,
      [href]: !prev[href]
    }));
  };
  
  const docNavItems: DocNavItem[] = [
    {
      title: "Introduction",
      href: "/docs",
      icon: BookOpen,
    },
    {
      title: "Getting Started",
      href: "/docs/getting-started",
      icon: Server,
      children: [
        { title: "Installation", href: "/docs/getting-started/installation" },
        { title: "Quick Start", href: "/docs/getting-started/quick-start" },
        { title: "Configuration", href: "/docs/getting-started/configuration" },
      ]
    },
    {
      title: "Configuration Options",
      href: "/docs/configurations",
      icon: Settings,
      children: [
        { title: "Rate Limiting", href: "/docs/configurations/rate-limiting" },
        { title: "HTML Obfuscation", href: "/docs/configurations/html-obfuscation" },
        { title: "Bot Detection", href: "/docs/configurations/bot-detection" },
      ]
    },
    {
      title: "Attack Protection",
      href: "/docs/attacks",
      icon: Shield,
      children: [
        { title: "SQL Injection", href: "/docs/attacks/sql-injection" },
        { title: "XSS Protection", href: "/docs/attacks/xss" },
        { title: "Path Traversal", href: "/docs/attacks/path-traversal" },
        { title: "Code Injection", href: "/docs/attacks/code-injection" },
      ]
    },
    {
      title: "API Reference",
      href: "/docs/api",
      icon: Code,
    },
    {
      title: "FAQs",
      href: "/docs/faqs",
      icon: FileText,
    },
  ];
  
  return (
    <div className="min-h-screen bg-cyber-dark flex flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-10 bg-cyber-charcoal border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-6 w-6 text-cyber-purple" />
              <span className="ml-2 text-lg font-semibold text-white">WebFencePro</span>
            </Link>
            <div className="hidden md:flex ml-8 items-center space-x-4">
              <Link to="/docs" className="text-white font-medium">
                Documentation
              </Link>
              <span className="text-gray-500">/</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-cyber-purple hover:bg-cyber-purple-light hidden md:inline-flex">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden">
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside 
          className={cn(
            "bg-cyber-charcoal w-64 border-r border-white/10 flex-shrink-0 transition-all overflow-hidden",
            sidebarOpen ? "max-md:w-full max-md:fixed max-md:inset-0 max-md:z-50" : "max-md:w-0 max-md:hidden"
          )}
        >
          <div className="p-4 md:hidden flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Shield className="h-6 w-6 text-cyber-purple" />
              <span className="ml-2 text-lg font-semibold text-white">WebFencePro</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <Separator className="bg-white/10 md:hidden" />
          
          <ScrollArea className="h-[calc(100vh-4rem)]">
            <div className="px-4 py-6">
              <div className="mb-4">
                <Link to="/docs" className="text-xl font-semibold text-white">
                  Documentation
                </Link>
                <p className="text-sm text-gray-400 mt-1">
                  Learn how to install, configure and use WebFencePro.
                </p>
              </div>
              
              <Separator className="bg-white/10 my-4" />
              
              <nav>
                {docNavItems.map((item) => (
                  <NavItem 
                    key={item.href} 
                    item={item} 
                    isOpen={openItems[item.href]} 
                    toggleOpen={() => toggleOpen(item.href)} 
                  />
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-4xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
