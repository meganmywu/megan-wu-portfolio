import PageLayout from "@/components/PageLayout";
import { GraduationCap, Heart, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-primary rounded-full"></div>
          </div>

          <div className="space-y-8 animate-fade-in">
            {/* Education Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-2">Educational Foundation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I am a Master of Health Informatics (MHI) student at the University of Toronto with a 
                    strong academic foundation in Health Sciences from the University of Waterloo. My journey 
                    into health informatics is driven by a commitment to improving healthcare systems through 
                    data-driven insights, workflow innovation, and equity-centered design.
                  </p>
                </div>
              </div>
            </div>

            {/* Current Work Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <Heart className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-2">Hands-On Experience</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Alongside my academic projects, I work as a Medical Office Assistant at Whole Health Medical 
                    Center, where I support clinic operations through EMR management, patient registration, and 
                    scheduling. This frontline experience allows me to see first-hand how digital systems like 
                    EMRs impact patient care, workflow efficiency, and staff coordination—insights I bring into 
                    my studies and projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-card rounded-3xl p-8 shadow-soft hover-lift">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-2">My Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether analyzing health inequities with GIS, mapping clinical workflows with BPMN notation, 
                    or applying digital health tools in practice, I strive to bridge the gap between technology 
                    and patient-centered healthcare delivery. My vision is to contribute to the digital 
                    transformation of healthcare, ensuring that technology doesn't just generate data but creates 
                    real value for providers, patients, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
