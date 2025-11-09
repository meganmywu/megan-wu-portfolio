import PageLayout from "@/components/PageLayout";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Medical Office Assistant",
    organization: "Whole Health Medical Center",
    period: "Sep 2025 – Present",
    bulletPoints: [
      "Manage patient intake, scheduling, billing, and documentation using Accuro EMR, while handling phone, email, and in-person communications professionally",
      "Support physicians during patient visits by taking vital signs (height, weight, blood pressure), performing urine and pregnancy tests, and preparing exam rooms and vaccine trays",
      "Coordinate referrals, process faxes and medical forms, and ensure exam rooms and supplies are maintained to support efficient clinical workflow"
    ]
  },
  {
    title: "Volunteer Coordinator Assistant",
    organization: "Shepherd Village",
    period: "June – Aug 2025",
    bulletPoints: [
      "Supported volunteer recruitment, training, and scheduling using Vome volunteer management software and Excel",
      "Coordinated various events and monthly information sessions to enhance engagement",
      "Managed volunteer communications and evaluations, contributing to improved program outcomes",
      "Performed administrative tasks such as data entry, reporting, and survey analysis to streamline operations"
    ]
  },
  {
    title: "Research Assistant",
    organization: "University of Waterloo",
    period: "Feb – Dec 2024",
    bulletPoints: [
      "Supporting a PhD thesis aimed at analyzing the impact of nutritional policies on sugar levels in beverages across various countries",
      "Employing web scraping and data aggregation techniques to collect extensive nutritional information from global brand and manufacturer websites, enabling comprehensive analysis of health policies and trends in sugar consumption",
      "Advancing global health insights by assisting in research that assesses the effectiveness of public health interventions on reducing sugar intake, aimed at guiding future policies to improve nutritional standards"
    ]
  },
  {
    title: "Social Innovation Intern",
    organization: "United College, University of Waterloo",
    period: "Dec 2024",
    bulletPoints: [
      "Created an inclusive intervention addressing student engagement through social prescribing, integrating a digital app and human support to reduce social anxiety and improve resource access",
      "Synthesized findings into a case study to inform future educational initiatives, emphasizing the intersection of health innovation, resource accessibility, and community wellbeing"
    ]
  },
  {
    title: "Specialties & DEX Coordinator",
    organization: "Bayshore Specialty Rx",
    period: "May – Aug 2022",
    bulletPoints: [
      "Coordinated operations between Specialties and DEX departments to ensure timely and accurate delivery of medications, supporting patient care across diverse communities",
      "Verified the accuracy of 300+ medications daily, maintaining strict quality control standards and reinforcing medication safety practices",
      "Streamlined logistics through efficient label production and shipping management, improving workflow reliability and healthcare accessibility"
    ]
  },
  {
    title: "Front Desk Receptionist",
    organization: "Epic Sports Badminton Club",
    period: "Sep 2020 – Aug 2021",
    bulletPoints: [
      "Managed the front desk operations efficiently, handling a wide range of responsibilities, including booking courts, scheduling training, and facilitating seamless customer experiences",
      "Oversaw the club's retail shop, ensuring merchandise availability and assisting customers with selections",
      "Processed transactions for services and merchandise, ensuring accuracy in financial records"
    ]
  },
  {
    title: "Nurse Aid",
    organization: "Sienna Senior Living",
    period: "Nov 2019 – Mar 2020",
    bulletPoints: [
      "Supported the Director of Care in delivering resident care and facility operations",
      "Demonstrated strong organizational skills through archiving and data entry responsibilities, and ensuring accurate documentation",
      "Assisted with archiving, documentation, and activity facilitation to promote social and physical wellbeing for residents"
    ]
  }
];

const Experience = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A journey through healthcare operations, research, and community engagement, 
              building practical skills in digital health and systems coordination.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
          </div>

          <div className="relative animate-fade-in">
            {/* Timeline line */}
            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-primary hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="relative bg-card rounded-3xl p-6 sm:p-8 shadow-soft hover-lift md:ml-16"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute -left-16 top-8 w-12 h-12 rounded-2xl bg-primary-light items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex items-start gap-4 mb-2">
                    <div className="md:hidden flex-shrink-0 w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold mb-1">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                        <span className="text-primary font-medium">{exp.organization}</span>
                        <span className="hidden sm:inline text-muted-foreground">•</span>
                        <span className="text-muted-foreground text-sm">{exp.period}</span>
                      </div>
                      <ul className="space-y-2 text-muted-foreground">
                        {exp.bulletPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-baseline gap-2">
                            <span className="text-primary">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;
