import React from "react";
import { BackgroundBeams } from "../src/components/ui/background-beams";
import './App.css';
import Navbar from "./Nav";
export default function App() {
  return (
    <div className="h-screen w-sreen bg-neutral-950 relative flex flex-col items-center justify-center ">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
    <h1 className="relative z-10 text-4xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
        E.Ocean Developers' Day 2024 Chatbot
    </h1>
    <p></p>
    <p className="text-neutral-500 max-w-2xl mx-auto my-2 text-lg sm:text-base md:text-2xl text-center relative z-10">
        Welcome to Developer's Day, 2024! <br />
        We are excited to have you here. <br />
        Click on the chat icon on the right to get started. <br />

    </p>
  </div>
      {/* <BackgroundBeams /> */}
    </div>
  )
}
