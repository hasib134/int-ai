import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
  INACTIVE = "  INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({ userName }: AgentProps) => {
  const callStatus = CallStatus.FINISHED; // This should be passed as a prop or managed by state
  const isSpeaking = true;
  const messages = [
    'Hello, how are you today?',
    'I am here to help you with your interview preparation.',
    'Please tell me about yourself.',
    'What are your strengths and weaknesses?',
    'Why do you want to work here?',
    'What are your salary expectations?',
    'Do you have any questions for me?',
    'Thank you for your time. I will get back to you soon.',
    'Goodbye!',
    'Have a great day!',
    'I hope you found this interview helpful.',
    'If you have any feedback, please let me know.',  
  ]
  const lastMessage = messages[messages.length - 1];

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak"></span>}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="useravatar"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length>0 && (
        <div className="transcript-border ">
          <div  className="transcrpt ">
            <p   key={lastMessage} className={cn('transition-opacity duration-500 opacity-0','animate-fadeIn opacity-100')}>
              {lastMessage}
            </p>

          </div>
        </div>
      )}


      <div className="w-full flex justfiy-center ">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call">
            <span className={cn('absolute animate-ping rounded-full opacity-75',callStatus!=='CONNECTING'&'hidden' )} />
            <span> {callStatus === "INACTIVE" || callStatus === "FINISHED" ? "CALL" : ". . ."} </span>
           
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;
