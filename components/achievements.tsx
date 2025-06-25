"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    {
      title: "Technitude Sydney Global Hackathon Winner",
      description:
        "Developed an innovative GenAI based Hospital and Restaurant Monitoring System using next.js and tailwind css.",
      image: "/technitude.jpg", // Replace with your actual image
      year: "2025",
    },
    {
      title: "ABB India Young Talent Winner",
      description:
        "Worked on ABB Database and 5 projects which made me win the ABB India Young Talent Competition..",
      image: "/abb.jpg", 
      year: "2025",
    },
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === achievements.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-muted/30"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Achievements</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto">
          Proud moments and recognition in my Hackathon Journey.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="min-w-full px-4">
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <Trophy className="h-6 w-6 text-primary mr-2" />
                        <span className="text-sm font-medium">
                          {achievement.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {achievement.title}
                      </h3>
                      <p>{achievement.description}</p>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {achievements.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-md hover:bg-primary/10 transition-colors z-10"
              aria-label="Previous achievement"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background rounded-full p-2 shadow-md hover:bg-primary/10 transition-colors z-10"
              aria-label="Next achievement"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {achievements.length > 1 && (
          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
