
import { Shield, Server, Globe, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SolutionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color?: string;
}

function Solution({ icon: Icon, title, description, features, color = "cyber-purple" }: SolutionProps) {
  return (
    <div className="bg-cyber-charcoal rounded-lg border border-white/10 p-6 h-full flex flex-col">
      <div className={cn(`h-12 w-12 rounded-lg bg-${color}/10 flex items-center justify-center text-${color} mb-4`)}>
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <ul className="space-y-2 mb-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className={cn(`min-w-4 h-4 mt-1 mr-2 rounded-full bg-${color}/20 flex items-center justify-center`)}>
              <div className={cn(`h-1.5 w-1.5 rounded-full bg-${color}`)}></div>
            </div>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="mt-auto border-white/20 hover:bg-white/5">
        <Link to="/docs">Learn More</Link>
      </Button>
    </div>
  );
}

export function Solutions() {
  const solutions = [
    {
      icon: Server,
      title: 'Small Business Websites',
      description: 'Protect your small business website from common threats without breaking the bank.',
      features: [
        'Easy setup with minimal configuration',
        'Protection against common web attacks',
        'Affordable self-hosted solution',
        'Low resource requirements',
      ],
      color: 'cyber-blue',
    },
    {
      icon: Shield,
      title: 'E-Commerce Applications',
      description: 'Secure customer data and transactions with advanced protection features.',
      features: [
        'PCI DSS compliance assistance',
        'Protection against payment fraud',
        'Bot prevention for inventory hoarding',
        'Advanced rate limiting for checkout pages',
      ],
    },
    {
      icon: Globe,
      title: 'API Services',
      description: 'Defend your APIs against abuse, scraping, and unauthorized access.',
      features: [
        'API-specific protection rules',
        'Schema validation integration',
        'Token-based authentication enforcement',
        'Rate limiting and quota management',
      ],
      color: 'green-500',
    },
    {
      icon: Database,
      title: 'Content Management Systems',
      description: 'Keep your CMS secure against the latest vulnerabilities and exploits.',
      features: [
        'WordPress, Drupal, and Joomla protection',
        'Plugin vulnerability mitigation',
        'Admin panel brute force prevention',
        'Content scraping protection',
      ],
      color: 'amber-500',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Solutions For Every Use Case
          </h2>
          <p className="text-gray-400 text-lg">
            WebFencePro adapts to different application types and security requirements, providing tailored protection for various scenarios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Solution
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              color={solution.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
