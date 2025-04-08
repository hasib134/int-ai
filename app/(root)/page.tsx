import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "../components/InterviewCard";

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
          <div className="flex flex-col gap-6 max-w-lg z-10">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Get Interview Ready
            </h1>
            <p className="text-lg text-gray-700">
              Practice with AI-powered mock interviews and receive instant feedback to boost your confidence.
            </p>
            <Button asChild className="btn-primary max-w-xs text-lg py-6 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg">
              <Link href="/interview">Start Practicing Now</Link>
            </Button>
          </div>

          <div className="relative mt-8 md:mt-0">
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
            <Image
              src="/int-help.jpeg"
              alt="AI Interview Assistant"
              width={450}
              height={450}
              className="relative z-10 max-sm:hidden"
            />
          </div>
        </div>
      </section>

      {/* Your Interviews Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Your Interviews</h2>
          <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>

      {/* Available Interviews Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold">Explore Interview Types</h2>
          <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
            Browse All
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section>
      
      {/* Testimonials/Stats Section */}
      <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-4xl font-bold">500+</h3>
            <p>Interview Questions</p>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-4xl font-bold">98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-4xl font-bold">24/7</h3>
            <p>AI Availability</p>
          </div>
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-4xl font-bold">100%</h3>
            <p>Personalized Feedback</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;