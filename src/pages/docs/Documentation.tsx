
import { DocLayout } from '@/components/docs/DocLayout';

const Documentation = () => {
  return (
    <DocLayout>
      <div className="prose prose-invert max-w-none">
        <h1>WebFencePro Documentation</h1>
        
        <p className="lead">
          Welcome to the WebFencePro documentation. Here you'll find comprehensive guides and documentation to help you start working with WebFencePro as quickly as possible.
        </p>
        
        <div className="my-8 p-6 bg-cyber-charcoal rounded-lg border border-white/10">
          <h2 className="text-xl font-semibold mb-4 text-cyber-purple">Getting Started</h2>
          <p>
            Get up and running with WebFencePro in just a few minutes by following our quick start guide.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/docs/getting-started/installation" className="text-cyber-purple hover:text-cyber-purple-light font-medium">
                Installation Guide
              </a>
              <span className="text-gray-400 text-sm ml-2">- How to install WebFencePro on your server</span>
            </li>
            <li>
              <a href="/docs/getting-started/quick-start" className="text-cyber-purple hover:text-cyber-purple-light font-medium">
                Quick Start
              </a>
              <span className="text-gray-400 text-sm ml-2">- Set up basic protection in 5 minutes</span>
            </li>
            <li>
              <a href="/docs/getting-started/configuration" className="text-cyber-purple hover:text-cyber-purple-light font-medium">
                Basic Configuration
              </a>
              <span className="text-gray-400 text-sm ml-2">- Configure WebFencePro for your environment</span>
            </li>
          </ul>
        </div>
        
        <h2>Key Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="p-6 bg-cyber-charcoal rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Web Attack Defense</h3>
            <p className="text-gray-300 text-sm">
              Protect against SQL injections, XSS, code injections, and path traversal attacks with advanced pattern matching and filtering.
            </p>
            <a href="/docs/attacks" className="inline-block mt-4 text-cyber-purple hover:text-cyber-purple-light text-sm font-medium">
              Learn more →
            </a>
          </div>
          
          <div className="p-6 bg-cyber-charcoal rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Dynamic HTML Obfuscation</h3>
            <p className="text-gray-300 text-sm">
              Automatically encrypt or obfuscate HTML and JavaScript to deter scraping, reverse engineering, and injection attempts.
            </p>
            <a href="/docs/configurations/html-obfuscation" className="inline-block mt-4 text-cyber-purple hover:text-cyber-purple-light text-sm font-medium">
              Learn more →
            </a>
          </div>
          
          <div className="p-6 bg-cyber-charcoal rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-2">IP-based Rate Limiting</h3>
            <p className="text-gray-300 text-sm">
              Prevent DoS attacks by limiting the number of requests per IP address and automatically blocking suspicious traffic patterns.
            </p>
            <a href="/docs/configurations/rate-limiting" className="inline-block mt-4 text-cyber-purple hover:text-cyber-purple-light text-sm font-medium">
              Learn more →
            </a>
          </div>
          
          <div className="p-6 bg-cyber-charcoal rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Bot Detection</h3>
            <p className="text-gray-300 text-sm">
              Identify and challenge bots using sophisticated CAPTCHAs or JavaScript challenges to prevent automated attacks.
            </p>
            <a href="/docs/configurations/bot-detection" className="inline-block mt-4 text-cyber-purple hover:text-cyber-purple-light text-sm font-medium">
              Learn more →
            </a>
          </div>
        </div>
        
        <h2>Support</h2>
        
        <p>
          If you're having trouble with WebFencePro, you can find help in the following places:
        </p>
        
        <ul>
          <li>Check out the <a href="/docs/faqs" className="text-cyber-purple hover:text-cyber-purple-light">FAQs</a> for common questions and answers</li>
          <li>Visit our <a href="https://github.com" className="text-cyber-purple hover:text-cyber-purple-light">GitHub repository</a> to report issues or contribute</li>
          <li>Join our <a href="#" className="text-cyber-purple hover:text-cyber-purple-light">Community Discord</a> for real-time help</li>
          <li>Contact <a href="mailto:support@webfencepro.example.com" className="text-cyber-purple hover:text-cyber-purple-light">support@webfencepro.example.com</a> for professional support (paid plans only)</li>
        </ul>
      </div>
    </DocLayout>
  );
};

export default Documentation;
