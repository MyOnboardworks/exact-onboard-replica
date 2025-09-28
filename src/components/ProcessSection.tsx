import { Button } from "@/components/ui/button";
import { Target, Laptop, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Orientation & Goal Setting",
      description: "We start by understanding your career goals and aligning them with the right course path. Personalized roadmaps, clear milestones, and structured learning."
    },
    {
      number: "02", 
      icon: Laptop,
      title: "Hands-On Learning",
      description: "No boring theory. You'll learn through projects, case studies, and real-world examples. Our mentors guide you step by step, ensuring you build practical, job-ready skills."
    },
    {
      number: "03",
      icon: TrendingUp, 
      title: "Growth & Career Support",
      description: "Once you're skilled, we help you scale. From resume building to interview prep and job assistance, we make sure you're industry-ready and confident."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto mb-6">
            <strong>Our learning process is simple, structured, and effective. Here's how we take you from beginner to job-ready.</strong>
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-green to-mint hover:from-mint hover:to-neon-green text-black px-6 py-4 rounded-lg glow-primary transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/9882287863?text=I%20want%20to%20learn%20and%20build%20future" target="_blank" rel="noopener noreferrer">
              Schedule a consultation
            </a>
          </Button>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-hero mb-4 opacity-20">
                    {step.number}
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="p-3 bg-emerald/10 rounded-xl mr-4">
                      <Icon className="w-6 h-6 text-emerald" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-neon-green/10 to-emerald/10 rounded-xl border border-border flex items-center justify-center">
                    <Icon className="w-16 h-16 text-neon-green/50" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;