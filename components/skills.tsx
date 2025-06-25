"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Database,
  BarChart3,
  FileSpreadsheet,
  Code,
  Brain,
} from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const skillsData = [
    {
      name: "HTML, CSS & JavaScript",
      level: 100,
      category: "web development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Building responsive and interactive web interfaces",
    },
    {
      name: "TypeScript",
      level: 85,
      category: "web development",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Strong typing and scalable JavaScript applications",
    },
    {
      name: "Next.js",
      level: 95,
      category: "web development",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "Clean and efficient full-stack React web applications",
    },
    {
      name: "Python • C++ • C",
      level: 90,
      category: "programming",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Data analysis, machine learning, DSA",
    },
    {
      name: "SQL",
      level: 90,
      category: "database",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Database querying, data manipulation, and analysis",
    },
    {
      name: "Power BI",
      level: 100,
      category: "visualization",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      description: "Interactive dashboards and business intelligence",
    },
    {
      name: "n8n • Langflow • Datastax • LangChain",
      level: 95,
      category: "ai",
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      description:
        "AI workflow orchestration and agent-based model integration",
    },

    {
      name: "Machine Learning",
      level: 75,
      category: "ai",
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: "Predictive modeling, classification, and regression",
    },
    {
      name: "Jira • Firebase • Jupyter Notebook",
      level: 90,
      category: "tools",
      icon: <FileSpreadsheet className="h-8 w-8 text-primary" />,
      description:
        "Project tracking with Jira, backend integration with Firebase, and data exploration using Jupyter Notebook",
    },
  ];

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted/30"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto">
          I've developed a diverse set of technical skills that enable me to
          extract insights from data and build intelligent solutions.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="visualization">Visualization</TabsTrigger>
            <TabsTrigger value="web development">web development</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
          </TabsList>
        </div>  

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {skill.icon}
                    <h3 className="text-xl font-bold ml-3">{skill.name}</h3>
                  </div>
                  <p className="text-sm mb-4">{skill.description}</p>
                  <div className="w-full bg-muted rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <span className="text-sm font-medium">{skill.level}%</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

