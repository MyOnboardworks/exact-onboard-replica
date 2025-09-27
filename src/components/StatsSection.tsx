import { Button } from "@/components/ui/button";
import { Users, GraduationCap, TrendingUp, Star } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "2k+",
      title: "Successful Placements",
      description: "Helping candidates secure jobs across IT and related domains with resume building, mock interviews, and recruiter connections."
    },
    {
      icon: GraduationCap,
      number: "4.5k+", 
      title: "Learners Trained",
      description: "Upskilling students and professionals with industry-ready courses, hands-on projects, and internship programs."
    },
    {
      icon: TrendingUp,
      number: "10x",
      title: "Career Growth",
      description: "Candidates reported up to 10x improvement in interview calls, recruiter responses, and career opportunities."
    },
    {
      icon: Star,
      number: "95%",
      title: "Satisfaction Rate", 
      description: "Our learners trust OnboardWorks because we deliver measurable results with personalized guidance."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            PROVEN NUMBERS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            We've Helped Make Happen.
          </h2>
          <Button 
            size="lg"
            className="mb-16 bg-gradient-to-r from-neon-green to-emerald hover:from-emerald hover:to-lime text-black px-6 py-4 rounded-lg glow-accent transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-neon-green/10 to-emerald/10 rounded-xl group-hover:from-neon-green/20 group-hover:to-emerald/20 transition-all duration-300">
                    <Icon className="w-8 h-8 text-neon-green group-hover:text-emerald transition-colors duration-300" />
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

        {/* Partners Section */}
        <div className="mt-20 text-center">
          <h3 className="text-lg font-bold mb-6">100+ hiring partners:</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-muted-foreground">
            <div className="hover:text-foreground transition-colors">Microsoft</div>
            <div className="hover:text-foreground transition-colors">Google</div>
            <div className="hover:text-foreground transition-colors">Apple</div>
            <div className="hover:text-foreground transition-colors">Infosys</div>
            <div className="hover:text-foreground transition-colors">TCS</div>
            <div className="hover:text-foreground transition-colors">etc</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;