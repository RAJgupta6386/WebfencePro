
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Solutions } from '@/components/landing/Solutions';
import { Pricing } from '@/components/landing/Pricing';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-dark text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Solutions />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
