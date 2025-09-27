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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            <strong>Our learning process is simple, structured, and effective. Here's how we take you from beginner to job-ready.</strong>
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-white px-8 py-6 rounded-lg glow-primary transition-all duration-300"
          >
            Schedule a consultation
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
                  <div className="text-6xl md:text-8xl font-bold text-gradient-hero mb-4 opacity-20">
                    {step.number}
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className="p-4 bg-neon-purple/10 rounded-2xl mr-4">
                      <Icon className="w-8 h-8 text-neon-purple" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Image Placeholder */}
                <div className="flex-1 max-w-md">
                  <div className="aspect-square bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 rounded-2xl border border-border flex items-center justify-center">
                    <Icon className="w-24 h-24 text-neon-blue/50" />
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