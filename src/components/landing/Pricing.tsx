
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

function PricingTier({ name, price, description, features, cta, popular = false }: PricingTierProps) {
  return (
    <div className={cn(
      "rounded-lg p-6 h-full flex flex-col relative",
      popular ? "bg-gradient-to-b from-cyber-purple/20 to-cyber-charcoal border border-cyber-purple/30" : "bg-cyber-charcoal border border-white/10"
    )}>
      {popular && (
        <div className="absolute top-0 right-0 bg-cyber-purple text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
          POPULAR
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-white">{price}</span>
      </div>
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className={cn(
              "h-5 w-5 mt-0.5",
              popular ? "text-cyber-purple" : "text-cyber-blue"
            )} />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        asChild
        className={cn(
          "mt-auto", 
          popular 
            ? "bg-cyber-purple hover:bg-cyber-purple-light text-white" 
            : "bg-cyber-dark hover:bg-cyber-dark/80 text-white"
        )}
      >
        <Link to="/signup">{cta}</Link>
      </Button>
    </div>
  );
}

export function Pricing() {
  const tiers = [
    {
      name: 'Community',
      price: 'Free',
      description: 'Perfect for personal projects and small websites.',
      features: [
        'Basic WAF protection',
        'IP-based rate limiting',
        'Simple bot detection',
        'Community support',
        'GitHub repository access',
      ],
      cta: 'Download Now',
    },
    {
      name: 'Professional',
      price: '$0',
      description: 'Ideal for small to medium businesses and e-commerce sites.',
      features: [
        'Advanced WAF protection',
        'Dynamic HTML/JS obfuscation',
        'Advanced bot detection',
        'Log exporting and analysis',
        'Email support',
        'Extended rule sets',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$0',
      description: 'For large applications with high security requirements.',
      features: [
        'All Professional features',
        'Custom rule development',
        'Multi-server deployment',
        'Advanced analytics dashboard',
        'Priority support',
        'Compliance reporting',
        'Dedicated security consultant',
      ],
      cta: 'Contact Sales',
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-cyber-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the plan that fits your security needs. All plans include self-hosted deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              cta={tier.cta}
              popular={tier.popular}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            All prices are in USD and billed monthly. Need a custom plan? <a href="/contact" className="text-cyber-purple hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
