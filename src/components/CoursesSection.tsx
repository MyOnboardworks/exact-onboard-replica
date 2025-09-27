import { Button } from "@/components/ui/button";
import { Check, Code, Database, Briefcase, FileCode, Globe, Brain } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: Code,
      title: "Web Development",
      description: "Launch your career as a full-stack developer.",
      features: [
        "HTML, CSS & JavaScript fundamentals",
        "Frontend frameworks (React, Angular, Vue)",
        "Profile setup & branding", 
        "Real-world projects & portfolio building"
      ]
    },
    {
      icon: Database,
      title: "Data Science", 
      description: "Turn data into decisions with in-demand skills.",
      features: [
        "Python for data analysis",
        "Statistics & data visualization",
        "Machine learning basics",
        "Hands-on case studies & projects"
      ]
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Learn to lead projects with confidence and clarity.",
      features: [
        "Project planning & scheduling",
        "Agile & Scrum frameworks",
        "Risk & resource management",
        "Tools: Jira, Trello, MS Project"
      ]
    },
    {
      icon: FileCode,
      title: "Python Programming",
      description: "Master one of the world's most versatile languages.",
      features: [
        "Python basics to advanced concepts", 
        "Data structures & OOP",
        "Data handling & APIs",
        "Real-world projects & automation"
      ]
    },
    {
      icon: Globe,
      title: "PHP Development",
      description: "Build powerful, dynamic websites and applications.",
      features: [
        "Core PHP & MySQL",
        "PHP frameworks (Laravel, CodeIgniter)", 
        "Building secure & scalable web apps",
        "Live projects with hosting & deployment"
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Step into the future with AI-driven skills.",
      features: [
        "ML algorithms & deep learning",
        "Neural networks & TensorFlow/PyTorch",
        "Natural Language Processing (NLP)",
        "AI projects: chatbots, predictions, automation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold">
            Courses That Work
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <strong>Learn With Onboardworks. Build Skills. Scale Your Future.</strong>
          </h2>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-neon-green to-lime hover:from-lime hover:to-emerald text-black px-6 py-4 rounded-lg glow-secondary transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-neon-green/50 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-neon-green/10 rounded-xl mr-4 group-hover:bg-neon-green/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-neon-green" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-3">
                  {course.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <ul className="space-y-3">
                  {course.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-4 h-4 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Ready To Kickstart Your Career? Let's Build Your Future Together.
          </h3>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-mint to-neon-green hover:from-neon-green hover:to-mint text-black px-6 py-4 rounded-lg glow-accent transition-all duration-300"
          >
            Contact Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;