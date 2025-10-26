import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, TrendingUp, Users, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = {
  technical: {
    dataAnalysis: {
      label: "Data & Analysis",
      skills: [
        { name: "SAS" },
        { name: "R" },
        { name: "Microsoft Excel" }
      ]
    },
    workflowProcess: {
      label: "Workflow & Process Design",
      skills: [
        { name: "BPMN Notation" }
      ]
    },
    emr: {
      label: "Electronic Medical Records (EMR)",
      skills: [
        { name: "Accuro EMR" }
      ]
    },
    gis: {
      label: "Geographic Information Systems",
      skills: [
        { name: "ArcGIS Pro" },
        { name: "GeoDa" }
      ]
    },
    toolsPlatforms: {
      label: "Tools & Platforms",
      skills: [
        { name: "Microsoft Office" },
        { name: "Google Workspace" },
        { name: "Zoom" },
        { name: "Slack" },
        { name: "Social Media" }
      ]
    },
    webDesign: {
      label: "Web Design Tools",
      skills: [
        { name: "Lovable (VibeCoding)" },
        { name: "Canva" }
      ]
    }
  },
  analytical: [
    { name: "Health Equity" },
    { name: "Policy Analysis" },
    { name: "Workflow Optimization & Evaluation" },
    { name: "Patient & Client Communication" },
    { name: "Project Coordination" },
    { name: "Stakeholder Engagement" },
    { name: "Written & Verbal Communication" },
  ],
  transferable: [
    { name: "Adaptability" },
    { name: "Fast-Paced Environments" },
    { name: "Time Management" },
    { name: "Prioritization" },
    { name: "Multitasking" },
    { name: "Leadership" },
    { name: "Teamwork" },
  ],
  languages: [
    { name: "English", level: "Fluent" },
    { name: "Cantonese", level: "Fluent (Spoken)" },
  ]
};

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

          <div className="grid gap-8 animate-fade-in">
            {/* Technical Skills */}
            <div 
              className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/18 border border-primary/15"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-serif font-semibold">Technical Skills</h2>
              </div>
              <div className="w-16 h-1 bg-primary/40 rounded-full mb-6 ml-[60px]"></div>
              
              <div className="space-y-4">
                {Object.values(skills.technical).map((category, catIndex) => (
                  <div key={catIndex}>
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      {category.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex}
                          className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary/30 hover:text-primary transition-colors cursor-default border-0"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytical & Professional Skills */}
            <div 
              className="p-6 rounded-3xl bg-gradient-to-br from-secondary/15 to-secondary/25 border border-secondary/20"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-secondary/25 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-secondary-foreground" />
              </div>
                <h2 className="text-3xl font-serif font-semibold">Analytical & Professional Skills</h2>
              </div>
              <div className="w-16 h-1 bg-secondary/40 rounded-full mb-6 ml-[60px]"></div>
              
              <div className="flex flex-wrap gap-2">
                {skills.analytical.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-secondary/25 text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors cursor-default border-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Transferable Skills */}
            <div 
              className="p-6 rounded-3xl bg-gradient-to-br from-accent/15 to-accent/25 border border-accent/20"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-accent/35 flex items-center justify-center">
                <Users className="h-6 w-6 text-accent-foreground" />
              </div>
                <h2 className="text-3xl font-serif font-semibold">Transferable Skills</h2>
              </div>
              <div className="w-16 h-1 bg-accent/60 rounded-full mb-6 ml-[60px]"></div>
              
              <div className="flex flex-wrap gap-2">
                {skills.transferable.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-accent/35 text-accent-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default border-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div 
              className="p-6 rounded-3xl bg-gradient-to-br from-muted/60 to-muted/80 border border-muted/40"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-2xl bg-foreground/10 flex items-center justify-center">
                <Languages className="h-6 w-6 text-foreground" />
              </div>
                <h2 className="text-3xl font-serif font-semibold">Languages</h2>
              </div>
              <div className="w-16 h-1 bg-foreground/40 rounded-full mb-6 ml-[60px]"></div>
              
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-foreground/10 text-foreground hover:bg-foreground/25 hover:text-foreground transition-colors cursor-default border-0"
                  >
                    {skill.name} <span className="ml-1 opacity-70">• {skill.level}</span>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;
