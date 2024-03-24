import React from "react";
import { BackgroundBeams } from "../src/components/ui/background-beams";
export default function App() {
  return (
    <div className="h-screen w-sreen bg-neutral-950 relative flex flex-col items-center justify-center ">
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Developer's Day 2024 Chatbot
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        Welcome to Developer's Day, 2024! <br />
        We are excited to have you here. <br />
        This is a chatbot to help you with all the information you need for the event. <br />
      </p>
    </div>
    <BackgroundBeams />
  </div>
  )
}