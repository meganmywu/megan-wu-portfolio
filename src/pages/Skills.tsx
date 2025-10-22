import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, TrendingUp, Users, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    color: "bg-primary-light",
    iconColor: "text-primary",
    skills: [
      "Data & Analysis: SAS, R, Microsoft Excel",
      "Workflow & Process Design: BPMN notation",
      "Electronic Medical Records (EMR): Accuro EMR",
      "Geographic Information Systems: ArcGIS Pro, GeoDa",
      "Tools & Platforms: Microsoft Office, Google Workspace, Zoom, Slack, Social Media",
      "Web Design Tools: Lovable (VibeCoding), Canva"
    ]
  },
  {
    title: "Analytical & Professional Skills",
    icon: TrendingUp,
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
    skills: [
      "Health Equity & Policy Analysis",
      "Workflow Optimization & Evaluation",
      "Patient & Client Communication",
      "Project Coordination & Stakeholder Engagement",
      "Written & Verbal Communication"
    ]
  },
  {
    title: "Transferable Skills",
    icon: Users,
    color: "bg-accent",
    iconColor: "text-accent-foreground",
    skills: [
      "Adaptability in fast-paced healthcare and academic environments",
      "Time management, prioritization, and multitasking",
      "Leadership and teamwork from student executive roles"
    ]
  },
  {
    title: "Languages",
    icon: Languages,
    color: "bg-accent-warm",
    iconColor: "text-accent-foreground",
    skills: [
      "English (Fluent)",
      "Cantonese (Fluent – Spoken only)"
    ]
  }
];

const Skills = () => {
  return (
    <PageLayout>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Skills & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive skillset spanning technical proficiency, analytical thinking, 
              and interpersonal excellence in health informatics and healthcare systems.
            </p>
            <div className="w-20 h-1 bg-gradient-primary rounded-full mt-6"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="border-0 shadow-soft hover-lift rounded-3xl overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl ${category.color} flex items-center justify-center mb-4`}>
                      <Icon className={`h-7 w-7 ${category.iconColor}`} />
                    </div>
                    <CardTitle className="text-2xl font-serif">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{skill}</p>
                        </div>
                      ))}
                    </div>
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

export default Skills;
