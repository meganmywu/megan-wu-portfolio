import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Send } from "lucide-react";
const Contact = () => {
  return <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              I'm always open to meaningful conversations about health informatics, 
              digital health, and system innovation.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
          </div>

          <div className="animate-fade-in space-y-6">
            {/* Main Contact Card */}
            <div className="bg-gradient-warm rounded-3xl p-8 sm:p-12 shadow-medium hover-lift">
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 rounded-3xl bg-card grid place-items-center shadow-soft">
                  <Send className="block h-10 w-10 text-primary origin-center -translate-x-[1px] translate-y-[0.5px]" />
                </div>
              </div>
              
              <p className="text-lg text-center mb-4 text-muted-foreground max-w-2xl mx-auto">
                If you're a recruiter, hiring manager, or collaborator interested in digital health, 
                data, or equity-driven innovation, I'd love to connect.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:mmy.wu@mail.utoronto.ca">
                  
                </a>
                <a href="https://linkedin.com/in/meganmywu" target="_blank" rel="noopener noreferrer">
                  
                </a>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">Email</h3>
                <a href="mailto:mmy.wu@mail.utoronto.ca" className="text-muted-foreground hover:text-primary transition-colors">
                  mmy.wu@mail.utoronto.ca
                </a>
              </div>

              <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <Linkedin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">LinkedIn</h3>
                <a href="https://linkedin.com/in/meganmywu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  linkedin.com/in/meganmywu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default Contact;