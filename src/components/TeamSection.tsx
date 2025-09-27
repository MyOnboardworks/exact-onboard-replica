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
          <div className="text-sm uppercase tracking-wider text-accent mb-2 font-semibold">
            The people behind the growth
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet The Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A mix of creators, developers, and marketers - working together to build digital experiences that drive real results.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-pink to-neon-orange hover:from-neon-orange hover:to-neon-pink text-white px-8 py-6 rounded-lg glow-secondary transition-all duration-300"
          >
            Contact Now
          </Button>
        </div>

        {/* Team Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-6 bg-gradient-to-br from-neon-purple/10 to-neon-pink/10 rounded-2xl group-hover:from-neon-purple/20 group-hover:to-neon-pink/20 transition-all duration-300">
                    <Icon className="w-12 h-12 text-neon-purple group-hover:text-neon-pink transition-colors duration-300" />
                  </div>
                </div>
                
                <div className="text-5xl md:text-6xl font-bold text-gradient-hero mb-4">
                  {stat.number}
                </div>
                
                <h3 className="text-xl font-bold mb-4">
                  {stat.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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