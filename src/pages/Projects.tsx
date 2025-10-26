import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Map, FileText, Smartphone } from "lucide-react";

const projects = [
  {
    title: "Social Prescribing for Student Engagement",
    bulletPoints: [
      "Designed a digital intervention to reduce isolation and improve access to campus resources for university students",
      "Proposed a hybrid model combining a faculty-based social prescriber with an app that connects students to clubs, mental health supports, and engagement opportunities",
      "Highlighted how informatics-driven design can enhance wellbeing and social connection in academic settings"
    ],
    icon: Users,
    color: "bg-primary-light",
    iconColor: "text-primary"
  },
  {
    title: "Geospatial Analysis of Hypertension Inequities",
    bulletPoints: [
      "Conducted a geospatial analysis using ArcGIS Pro and GeoDa to map hypertension prevalence by age and sex in Toronto",
      "Integrated socioeconomic and environmental indicators to identify clusters of inequity",
      "Produced insights to inform targeted public health planning and equitable resource allocation"
    ],
    icon: Map,
    color: "bg-secondary",
    iconColor: "text-secondary-foreground"
  },
  {
    title: "Policy Brief on Genetic Screening Equity",
    bulletPoints: [
      "Analyzed inequities in access to genetic screening among low- and middle-income families in Ontario",
      "Proposed a government-subsidized program and expanded insurance coverage to improve fairness and reduce health disparities",
      "Addressed ethical considerations (privacy, cost, and funding constraints) showing how digital policy interventions can advance equity"
    ],
    icon: FileText,
    color: "bg-accent",
    iconColor: "text-accent-foreground"
  },
  {
    title: "Maternal mHealth App Proposal",
    bulletPoints: [
      "Proposed a mobile health app delivering real-time air-quality alerts and health recommendations for pregnant individuals",
      "Based on case study research and collaboration with public health agencies",
      "Demonstrated how digital health tools empower vulnerable populations to take preventive actions against environmental risks"
    ],
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
                    <ul className="space-y-2 text-muted-foreground">
                      {project.bulletPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-baseline gap-2">
                          <span className="text-primary">•</span>
                          <span className="text-base leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
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
