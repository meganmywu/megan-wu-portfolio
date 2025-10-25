import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, TrendingUp, Users, Languages } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = {
  technical: [
    { name: "SAS" },
    { name: "R" },
    { name: "Excel" },
    { name: "BPMN" },
    { name: "Accuro EMR" },
    { name: "ArcGIS Pro" },
    { name: "GeoDa" },
    { name: "Microsoft Office" },
    { name: "Google Workspace" },
    { name: "Zoom" },
    { name: "Slack" },
    { name: "Social Media" },
    { name: "Lovable" },
    { name: "Canva" },
  ],
  analytical: [
    { name: "Health Equity" },
    { name: "Policy Analysis" },
    { name: "Workflow Optimization" },
    { name: "Workflow Evaluation" },
    { name: "Patient Communication" },
    { name: "Client Communication" },
    { name: "Project Coordination" },
    { name: "Stakeholder Engagement" },
    { name: "Written Communication" },
    { name: "Verbal Communication" },
  ],
  transferable: [
    { name: "Adaptability" },
    { name: "Fast-paced Environments" },
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
            <div style={{ animationDelay: "0ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-serif">Technical Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default border-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Analytical & Professional Skills */}
            <div style={{ animationDelay: "100ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h2 className="text-2xl font-serif">Analytical & Professional</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.analytical.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-4 py-2 text-sm cursor-default hover:bg-secondary/80 transition-colors border-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Transferable Skills */}
            <div style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-serif">Transferable Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.transferable.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-accent/10 text-accent-foreground hover:bg-accent/20 transition-colors cursor-default border-0"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div style={{ animationDelay: "300ms" }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-muted flex items-center justify-center">
                  <Languages className="h-6 w-6 text-foreground" />
                </div>
                <h2 className="text-2xl font-serif">Languages</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <Badge 
                    key={index}
                    className="px-4 py-2 text-sm bg-muted text-foreground hover:bg-muted/80 transition-colors cursor-default border-0"
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
