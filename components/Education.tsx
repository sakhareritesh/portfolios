"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { School, Book, GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Education</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto">
          Educational Background and academic achievements that have shaped my
          career path.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Bachelor of Technology in Electronics and Telecommunication
              </h3>
              <p className="mb-2">
                KK Wagh Institute of Engineering Education and Research,Nashik
              </p>
              <p className="mb-2">2021 - Present</p>
              <ul className="list-disc pl-5 mb-4">
                <li>Every year Top 10 in branch academics</li>
                <li>2+ Hackathon winner</li>
              </ul>
              <p className="mb-4">College Project:</p>
              <ul className="list-disc pl-5 mb-4">
                <li>
                  Created an IoT-based smart agriculture monitoring system
                </li>
              </ul>
              <p className="mb-4">Email to connect:</p>
              <ul className="list-disc pl-5">
                <li>sakhareritesh57@gmail.com</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-5">
          {[0, 1, 2, 3].map((index) => (
            <Card
              key={index}
              className="mb-4 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div
                  className={`p-3 rounded-full ${
                    index === 0 ? "bg-primary/10" : "bg-gray-100"
                  } transition-colors duration-300 ease-in-out hover:bg-primary/10`}
                >
                  {index === 0 ? (
                    <School className="h-5 w-5 text-primary" />
                  ) : index === 1 ? (
                    <Book className="h-5 w-5 text-primary" />
                  ) : index === 2 ? (
                    <GraduationCap className="h-5 w-5 text-primary" />
                  ) : (
                    <Calendar className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">
                    {["Institution", "Degree", "Field of Study", "Year"][index]}
                  </h3>
                  <p>
                    {
                      [
                        "KK Wagh Institute of Engineering Education and Research",
                        "Bachelor of Technology",
                        "Electronics and Telecommunication",
                        "Final Year Student",
                      ][index]
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
