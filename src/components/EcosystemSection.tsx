import { TrendingUp, Users, Award } from "lucide-react";

const EcosystemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we don't just promote learning—we engineer educational success at scale.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* 200% More Interview Calls */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-neon-blue/10 rounded-2xl mr-6">
                <TrendingUp className="w-8 h-8 text-neon-blue" />
              </div>
              <div className="text-6xl font-bold text-gradient-stats">200%</div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              More Interview Calls – Job Seekers Transformed
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Many candidates felt stuck with no responses. After joining OnboardWorks, we rebuilt their resumes, 
              optimized LinkedIn, and guided them through job applications — leading to{" "}
              <strong className="text-foreground">200% more interview opportunities</strong>.
            </p>
          </div>

          {/* 70% Career Growth */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-neon-purple/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-neon-purple/10 rounded-2xl mr-6">
                <Award className="w-8 h-8 text-neon-purple" />
              </div>
              <div className="text-6xl font-bold text-gradient-stats">70%</div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">
              Career Growth – From Applications to Offers
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Job seekers often applied endlessly without results. Our tailored career path, hands-on projects, 
              and recruiter connections helped them stand out — resulting in a{" "}
              <strong className="text-foreground">70% increase in job offers and salary growth</strong> within months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;