import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Map, FileText, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Social Prescribing for Student Engagement",
    description: "Designed a digital intervention to reduce isolation and improve resource access among university students. Proposed a hybrid model combining a faculty-based social prescriber with a supportive app, helping students navigate clubs, mental health resources, and engagement opportunities. This initiative highlighted how informatics can enhance wellbeing in academic settings.",
    icon: Users,
    color: "bg-primary-light",
    iconColor: "text-primary"
  },
  {
    title: "Geospatial Analysis of Hypertension Inequities",
    description: "Conducted a geospatial study using ArcGIS Pro and GeoDa to examine hypertension prevalence across age and sex groups in Toronto. Integrated socioeconomic and environmental data such as walkability and deprivation to identify clusters of health inequities. The findings supported targeted public health strategies, highlighting how spatial analysis can inform urban planning and resource allocation.",
    icon: Map,
    color: "bg-secondary",
    iconColor: "text-secondary-foreground"
  },
  {
    title: "Policy Brief on Genetic Screening Equity",
    description: "Developed a policy brief analyzing inequities in access to genetic screening for low- and middle-income families in Ontario. Proposed a government-subsidized program and expanded insurance coverage to promote fairness and reduce health disparities. This work also considered ethical challenges like privacy and funding constraints, showing how digital tools and policy can intersect to improve equity.",
    icon: FileText,
    color: "bg-accent",
    iconColor: "text-accent-foreground"
  },
  {
    title: "Maternal Health mHealth App Proposal",
    description: "Authored a policy brief recommending a mobile health app designed to provide pregnant women with real-time air quality alerts and health recommendations. Built on case study analysis and partnerships with public health agencies, this project demonstrated how mobile solutions can empower vulnerable populations to take preventive actions against environmental health risks.",
    icon: Smartphone,
    color: "bg-accent-warm",
    iconColor: "text-accent-foreground"
  }
];

const Projects = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A collection of work demonstrating practical applications of health informatics, 
              data analysis, and systems thinking in real-world healthcare contexts.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 shadow-soft hover-lift rounded-3xl overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${project.color} flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${project.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
