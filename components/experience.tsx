"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      title: "Project Intern",
      company: "ABB India Ltd",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Worked on data analysis projects to optimize business processes",
        "Developed dashboards using Power BI,Power Apps,Power Automate to visualize key performance indicators",
        "Implemented data cleaning and preprocessing techniques to ensure data quality",
        "Collaborated with cross-functional teams to identify business requirements and deliver data-driven solutions",
      ],
    },
    // Add more experiences as needed
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto">
          My professional journey in the field of analysis.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`mb-4 cursor-pointer transition-all duration-300 ${
                activeExp === index
                  ? "border-primary"
                  : "hover:border-primary/50"
              }`}
              onClick={() => setActiveExp(index)}
            >
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">{exp.title}</h3>
                <p className="text-primary">{exp.company}</p>
                <div className="flex items-center mt-2 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-8">
          <Card className="h-full">
            <CardContent className="p-6 h-full">
              <div className="flex items-start mb-6">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    {experiences[activeExp].title}
                  </h3>
                  <p className="text-primary">
                    {experiences[activeExp].company}
                  </p>
                  <p className="text-sm mt-1">
                    {experiences[activeExp].period}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">
                  Responsibilities & Achievements:
                </h4>
                <ul className="space-y-2">
                  {experiences[activeExp].description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
