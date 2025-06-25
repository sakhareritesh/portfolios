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
  Github,
} from "lucide-react";
import { Allan } from "next/font/google";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projectsData = [
    {
      name: "Healthcare",
      description:
        "Built a comprehensive healthcare system featuring doctor appointment booking, symptom-based disease prediction using ML, and an AI-powered medical chatbot for instant patient assistance",
      link: "https://example.com/project-link",
      github: "https://github.com/VedantDeore/MediBites11",
      image: "/medical1.jpg",
    },
    {
      name: "Chatbot using ML",
      description:
        "Developed an intelligent chatbot using Machine Learning to provide accurate college-related information, system was built entirely from scratch with no external API dependencies, ensuring full control over training data and response logic.",
      link: "",
      github: "https://github.com/sakhareritesh/ChatbotML",
      image: "/code.jpg",
    },
    {
      name: "Multi-Agent Processing System",
      description:
        "A powerful document processing system that uses Gemini AI to classify, extract, and analyze various types of content. The system employs multiple specialized AI agents working together to process emails, JSON data, and text documents.",
      link: "https://multiagents-blond.vercel.app/",
      github: "https://github.com/sakhareritesh/multiagents",
      image: "/agents1.jpg",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  return (
    <section
      id="Projects"
      className="py-20 px-3 sm:px-5 lg:px-7 max-w-7xl mx-auto bg-muted/30"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto">
          Successfully built and deployed multiple innovative projects focused
          on real-world problem solving and user-centric design. Demonstrated
          strong skills in development, optimization and system integration
          across diverse use cases.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div></div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <CardContent className="p-6 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} project image`}
                    className="w-full  h-50 object-cover mb-4"
                  />
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center mb-4">
                      <h3 className="text-xl font-bold ml-3">{project.name}</h3>
                    </div>
                    <p className="text-sm mb-1">{project.description}</p>
                    <div className="mt-3 flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        <Github className="h-6 w-6 text-primary" />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View Project
                      </a>
                    </div>
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
