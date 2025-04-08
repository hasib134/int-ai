import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");
  
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-sm">
      {/* Type Badge */}
      <div className="absolute top-0 right-0 z-10">
        <div className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-bl-lg shadow-sm">
          <p className="text-sm font-medium">{normalizedType}</p>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start space-x-4">
          {/* Cover Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-30 blur-md"></div>
            <Image 
              src={getRandomInterviewCover()} 
              alt="Interview Cover" 
              width={80} 
              height={80} 
              className="rounded-full object-cover size-20 border-2 border-white shadow-md z-10 relative"
            />
          </div>
          
          {/* Title and Date Section */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 capitalize">
              {role} Interview
            </h3>
            
            <div className="flex flex-row gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-gray-600">
                <Image src="/calendar.svg" alt="calendar" width={18} height={18} className="opacity-70"/>
                <p className="text-sm">{formattedDate}</p>
              </div>

              <div className="flex items-center gap-1.5">
                <Image src="/star.svg" alt="star" width={18} height={18} className="opacity-70"/>
                <p className="text-sm font-medium text-gray-700">
                  {feedback?.totalScore ? (
                    <span className="text-indigo-600">{feedback.totalScore}/100</span>
                  ) : (
                    <span className="text-gray-500">---/100</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 h-16">
          <p className="line-clamp-2 text-gray-600 text-sm"> 
            {feedback?.finalAssessment || "You haven't taken the interview yet. Take it now to improve your skills."}
          </p>
        </div>

        {/* Tech Stack and Action Button */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <DisplayTechIcons techStack={techstack} />
          
          <Button 
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              feedback 
                ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
                : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            } text-white shadow-sm transition-all duration-300`}
          >
            <Link href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}`}>
              {feedback ? 'Check Feedback' : 'Start Interview'}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;