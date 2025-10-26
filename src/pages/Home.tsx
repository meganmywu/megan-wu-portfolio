import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Target, BadgeCheck, MessageCircle, Activity, Database, Atom, Monitor, Percent, Heart, Plus, Stethoscope } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-30"></div>
        
        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top edge icons */}
          <Activity className="absolute top-[8%] left-[18%] w-12 h-12 text-primary opacity-15 animate-float" 
                    style={{ animationDuration: '6.5s', animationDelay: '0s' }} />
          <Plus className="absolute top-[5%] right-[35%] w-11 h-11 text-secondary opacity-15 animate-float" 
                style={{ animationDuration: '7.2s', animationDelay: '2.1s' }} />
          <Database className="absolute top-[9%] right-[15%] w-12 h-12 text-primary-glow opacity-15 animate-float" 
                    style={{ animationDuration: '8s', animationDelay: '1.2s' }} />
          
          {/* Left side icons */}
          <Monitor className="absolute top-[30%] left-[7%] w-11 h-11 text-primary opacity-15 animate-float" 
                    style={{ animationDuration: '8.8s', animationDelay: '1.6s' }} />
          <Heart className="absolute top-[55%] left-[9%] w-12 h-12 text-primary-glow opacity-15 animate-float" 
                style={{ animationDuration: '7.5s', animationDelay: '2.8s' }} />
          
          {/* Right side icons */}
          <Stethoscope className="absolute top-[28%] right-[8%] w-16 h-16 text-secondary opacity-15 animate-float" 
                      style={{ animationDuration: '8.2s', animationDelay: '0.8s' }} />
          <Percent className="absolute top-[52%] right-[10%] w-11 h-11 text-primary opacity-15 animate-float" 
                    style={{ animationDuration: '7.8s', animationDelay: '1.9s' }} />
          
          {/* Bottom edge icons */}
          <Atom className="absolute bottom-[10%] left-[22%] w-16 h-16 text-secondary opacity-15 animate-float" 
                style={{ animationDuration: '7.3s', animationDelay: '2.5s' }} />
          <Database className="absolute bottom-[7%] left-[48%] w-10 h-10 text-primary-glow opacity-15 animate-float" 
                    style={{ animationDuration: '6.9s', animationDelay: '1.4s' }} />
          <Atom className="absolute bottom-[12%] right-[25%] w-14 h-14 text-primary opacity-15 animate-float" 
                style={{ animationDuration: '8.5s', animationDelay: '3.2s' }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Bridging Health and Technology</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold mb-6 text-balance">
            Helping Healthcare Make More{" "}
            <span className="gradient-text">Informed Moves</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance leading-relaxed">
            This portfolio brings together health informatics, data analysis, and systems thinking. 
            It shows how I apply academic training and hands-on experience to address real-world 
            challenges in healthcare with clarity, purpose, and impact.
          </p>
          <Link to="/projects">
            <Button size="lg" className="group rounded-full px-8 py-6 text-base shadow-medium hover:shadow-glow">
              Explore My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
              <Target className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Why It's Hard to Find the Right Candidate in Health Tech
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Resumes and LinkedIn profiles rarely tell the full story. In health informatics, 
                the ideal candidate needs both technical depth and a system-level understanding of 
                healthcare. Without clear, real-world examples, it's tough to know who can actually 
                deliver value across data, design, and implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                From Coursework to Care with Real-World Context
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project here goes beyond the classroom. Whether it's modeling clinic workflows 
                or writing policy briefs, I bring a practical mindset to health informatics. This 
                portfolio shows not just what I've learned, but how I use it to improve systems, 
                support teams, and think beyond the code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center">
              <BadgeCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
                Wondering if This Is Just Theory? It's Not.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From clinic workflow modeling to health equity analysis, these aren't abstract projects. 
                They are grounded in real-world data, contexts, and decisions. I've made it easy to see 
                how each piece connects to impact, systems, and team needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-3xl bg-card flex items-center justify-center shadow-soft">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Thanks for Visiting. Let's Connect if It Resonates.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're hiring or just exploring emerging talent in digital health, I'm open to 
            thoughtful conversations. Take a look around. If something connects, I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8 shadow-medium">
                Reach Out
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
