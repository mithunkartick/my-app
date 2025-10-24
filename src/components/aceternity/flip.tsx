import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["offices", "homes", "websites", "lifetimes"];

  return (
    <div className="flex items-center px-4">
      <div className="mb-6 md:mt-3 text-xl md:text-2xl text-neutral-300 max-w-lg text-center mx-auto">
        Build 
         <FlipWords words={words}/>with GVB Group.
      </div>
    </div>
  );
}
