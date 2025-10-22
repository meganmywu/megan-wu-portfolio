import PageLayout from "@/components/PageLayout";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Medical Receptionist",
    organization: "Whole Health Medical Center",
    period: "Sep 2025 – Present",
    description: "Serve as the first point of contact for patients, providing a professional and welcoming experience at the front desk. Manage scheduling and registration through Accuro EMR, support patient record updates, and handle incoming calls and emails with efficiency and discretion. Assist with administrative tasks such as filing, data entry, and appointment coordination, contributing to smooth clinic operations. This role highlights my organizational skills, communication abilities, and adaptability in a fast-paced healthcare environment."
  },
  {
    title: "Volunteer Coordinator Assistant",
    organization: "Shepherd Village",
    period: "June – Aug 2025",
    description: "Supported volunteer recruitment, training, and scheduling using Vome software and Excel. Coordinated events and monthly sessions to improve engagement and streamlined administrative processes through data entry, reporting, and survey analysis. Strengthened community programs by improving volunteer communications and evaluation."
  },
  {
    title: "Research Assistant",
    organization: "University of Waterloo",
    period: "Feb – Dec 2024",
    description: "Contributed to a PhD thesis project focused on analyzing the impact of nutritional policies on sugar levels in beverages across multiple countries. Collected data through web scraping and aggregation from global manufacturers. Enabled comprehensive health policy analysis while sharpening technical skills in data management."
  },
  {
    title: "Social Innovation Intern",
    organization: "United College, University of Waterloo",
    period: "Dec 2024",
    description: "Created an inclusive intervention using social prescribing to reduce social anxiety and improve student engagement. Designed a digital app concept paired with human support. Synthesized outcomes into a case study that informed future education-based health initiatives."
  },
  {
    title: "Specialties & DEX Coordinator",
    organization: "Bayshore Specialty Rx",
    period: "May – Aug 2022",
    description: "Coordinated operations across specialties and distribution teams to ensure timely delivery of over 400 daily medications. Maintained quality control, verified prescription accuracy, and supported pharmaceutical logistics. This role reinforced attention to detail, patient safety, and reliable health service delivery."
  },
  {
    title: "Front Desk Receptionist",
    organization: "Epic Sports Badminton Club",
    period: "Sep 2020 – Aug 2021",
    description: "Managed front-desk operations, including booking courts and scheduling training, to deliver smooth customer experiences. Oversaw the pro shop and handled transactions with accurate records—strengthening service reliability and day-to-day operational flow."
  },
  {
    title: "Nurse Aid",
    organization: "Sienna Senior Living",
    period: "Nov 2019 – Mar 2020",
    description: "Supported the Director of Care in delivering resident care and facility operations. Assisted with archiving, documentation, and activity facilitation to promote social and physical wellbeing for residents. Demonstrated compassion, organization, and commitment to improving the daily lives of older adults."
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
                  <div className="hidden md:flex absolute -left-[4.25rem] top-8 w-12 h-12 rounded-2xl bg-primary-light items-center justify-center">
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
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
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
