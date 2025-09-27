import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer: "You can enroll in any of our courses by contacting us directly through our contact form or by scheduling a consultation. Our team will guide you through the enrollment process and help you choose the right course for your career goals."
    },
    {
      question: "How long does each course take?",
      answer: "Course duration varies depending on the program. Most of our courses range from 3-6 months, with flexible scheduling options including part-time and full-time tracks to accommodate your schedule."
    },
    {
      question: "Do you work with all business sizes?",
      answer: "Yes, we work with individuals, startups, and enterprises of all sizes. Our programs are designed to scale from individual learners to corporate training solutions for teams and organizations."
    },
    {
      question: "Do I need prior experience?",
      answer: "No prior experience is required for most of our foundational courses. We offer programs for complete beginners as well as advanced courses for experienced professionals looking to upskill or transition to new technologies."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, all our courses include industry-recognized certificates upon successful completion. These certificates are valued by employers and can help enhance your professional profile and career prospects."
    },
    {
      question: "What career support do you offer?",
      answer: "We provide comprehensive career support including resume building, LinkedIn optimization, mock interviews, portfolio development, and direct connections with our network of 100+ hiring partners to help you land your dream job."
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            FAQs
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Honest answers to common questions. Everything you need to know—no fluff, just facts.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 hover:border-neon-green/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-sm font-semibold hover:text-neon-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;