
import { 
  ShieldCheck, 
  Code, 
  Bot, 
  Activity, 
  Database, 
  Lock, 
  ServerCrash,
  FileCode
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card className="bg-cyber-charcoal border-white/10 hover:border-cyber-purple/50 transition-colors">
      <CardHeader className="pb-2">
        <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
          <Icon size={24} />
        </div>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400 text-sm">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Web Attack Defense',
      description: 'Protect against SQL injections, XSS, code injections, and path traversal attacks with advanced pattern matching and filtering.',
    },
    {
      icon: Code,
      title: 'Dynamic Obfuscation',
      description: 'Automatically encrypt or obfuscate HTML and JavaScript to deter scraping, reverse engineering, and injection attempts.',
    },
    {
      icon: Activity,
      title: 'IP-based Rate Limiting',
      description: 'Prevent DoS attacks by limiting the number of requests per IP address and automatically blocking suspicious traffic patterns.',
    },
    {
      icon: Bot,
      title: 'Bot Detection',
      description: 'Identify and challenge bots using sophisticated CAPTCHAs or JavaScript challenges to prevent automated attacks.',
    },
    {
      icon: Lock,
      title: 'Authentication Challenges',
      description: 'Add multi-layered verification before allowing sensitive actions to prevent credential stuffing and account takeovers.',
    },
    {
      icon: Database,
      title: 'Comprehensive Logging',
      description: 'Detailed logs of all suspicious activities with advanced filtering and search capabilities for quick incident response.',
    },
    {
      icon: ServerCrash,
      title: 'Self-hosted & Lightweight',
      description: 'Deploy on your own infrastructure with minimal resources, perfect for local servers or small-scale VPS deployments.',
    },
    {
      icon: FileCode,
      title: 'Custom Rule Engine',
      description: 'Create and customize security rules to match your specific application requirements and threat model.',
    },
  ];

  return (
    <section id="features" className="relative py-20 bg-cyber-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Comprehensive Protection Features
          </h2>
          <p className="text-gray-400 text-lg">
            WebFencePro provides a complete suite of protection mechanisms to defend your web applications against modern threats.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
