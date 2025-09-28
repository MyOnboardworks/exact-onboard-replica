import { Button } from "@/components/ui/button";
import { Users, Code, Megaphone } from "lucide-react";

const TeamSection = () => {
  const teamStats = [
    {
      icon: Users,
      number: "24+",
      title: "Creative Thinkers & Strategists",
      description: "Big ideas, clear plans, and thinking solutions."
    },
    {
      icon: Code,
      number: "20+", 
      title: "Skilled Developers",
      description: "Clean code, reliable builds, and scalable solutions."
    },
    {
      icon: Megaphone,
      number: "10+",
      title: "Marketing Experts", 
      description: "Smart campaigns, results, and ideas that connect."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            The people behind the growth
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Meet The Team
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto mb-6">
            A mix of creators, developers, and marketers - working together to build digital experiences that drive real results.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-emerald to-lime hover:from-lime hover:to-emerald text-black px-6 py-4 rounded-lg glow-secondary transition-all duration-300"
            asChild
          >
            <a href="https://wa.me/9882287863?text=I%20want%20to%20learn%20and%20build%20future" target="_blank" rel="noopener noreferrer">
              Contact Now
            </a>
          </Button>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-emerald/10 to-mint/10 rounded-xl group-hover:from-emerald/20 group-hover:to-mint/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-emerald group-hover:text-mint transition-colors duration-300" />
                  </div>
                </div>
                
                <div className="text-3xl md:text-4xl font-bold text-gradient-hero mb-4">
                  {stat.number}
                </div>
                
                <h3 className="text-base font-bold mb-4">
                  {stat.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;