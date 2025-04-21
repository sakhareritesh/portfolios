import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="h-1 w-20 bg-primary mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
          {/* Replace with your image */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 z-10 rounded-lg"></div>
          <div className="relative h-full w-full">
            {/* Replace the placeholder with your actual image */}
            <Image
              src="/abb1.jpg"
              alt="Ritesh Sakhare"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4">Ritesh Sakhare</h3>
          <h4 className="text-xl text-primary mb-4">
            Data Analyst & Data Science Engineer
          </h4>
          <p className="mb-6">
            I'm a passionate data professional with expertise in data analysis,
            visualization, and machine learning. With a strong foundation in
            Python, SQL, Power BI, and Excel, I transform complex data into
            actionable insights that drive business decisions.
          </p>
          <p className="mb-6">
            As a 2x hackathon winner, I thrive in competitive environments where
            I can apply my technical skills to solve real-world problems. My
            experience as a project intern at ABB India Ltd has equipped me with
            valuable industry knowledge and practical skills.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Card>
              <CardContent className="p-4 text-center">
                <h5 className="font-bold text-4xl text-primary">2+</h5>
                <p className="mt-2">Hackathons Won</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h5 className="font-bold text-4xl text-primary">5+</h5>
                <p className="mt-2">Technical Skills</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
