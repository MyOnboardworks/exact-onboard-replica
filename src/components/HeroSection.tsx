import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/20" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-gradient-hero">Build Skills Today, Get</span>
            <br />
            <span className="text-gradient-hero">Hired Tomorrow</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Get certified, build a portfolio, and connect directly with recruiters – all in one platform
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-neon-green to-emerald hover:from-emerald hover:to-lime text-black px-6 py-4 text-base rounded-lg glow-primary transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/9882287863?text=I%20want%20to%20learn%20and%20build%20future" target="_blank" rel="noopener noreferrer">
              Get Started Today
            </a>
          </Button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-neon-green/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-emerald/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-lime/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default HeroSection;