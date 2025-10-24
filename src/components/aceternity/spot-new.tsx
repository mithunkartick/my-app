"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FlipWordsDemo } from "./flip";
import { CardSpotlight } from "../ui/card-spotlight";
import Link from "next/link";
import Image from "next/image";

export function SpotlightNewDemo() {
  return (
    <div className="w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full mt-20 pt-15 mb-10">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Welcome to <br /> GVB Group.
        </h1>
        
          <FlipWordsDemo/>
        <div className="flex flex-col md:flex-row gap-5 mt-4 items-center">
            <Link href='https://gvbgroup.org/construction' target='_blank' className="text-sm">
                <CardSpotlight className="md:h-72 md:w-96 h-60 w-80">

      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        GVB Construction
      </p>
      <p className="text-neutral-300 relative z-20 text-sm">
        We build beautiful spaces, building your dreams true.
      </p>
      <Image src='/gvb-construction.png' alt='GVB Construction Logo' width={80} height={80} className="absolute bottom-2 right-5 opacity-90 w-30 h-30"/>
    </CardSpotlight>
            </Link>
            <Link href='https://gvbgroup.org/construction' target='_blank' className="text-sm">
        <CardSpotlight className="md:h-72 md:w-96 h-60 w-80">
                
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        GVB Enterprises
      </p>
      <p className="text-neutral-300 relative z-20 text-sm">
        The one-stop building solution store for all your construction needs.
      </p>
      <Image src='/gvb-enterprises.png' alt='GVB Enterprises Logo' width={80} height={80} className="absolute bottom-2 right-5 opacity-90 w-30 h-30"/>
    </CardSpotlight>
            </Link>
    <Link href='https://gvbgroup.org/construction' target='_blank' className="text-sm"><CardSpotlight className="md:h-72 md:w-96 h-60 w-80">
                
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        BJM Web Services
      </p>
      <p className="text-neutral-300 relative z-20 text-sm">
        We make stunning websites for individuals and businesses.
      </p>
      <Image src='/bjm-web-services.png' alt='BJM Web Services Logo' width={80} height={80} className="absolute bottom-2 right-5 opacity-90 w-30 h-30"/>
   
    </CardSpotlight></Link>
        </div>
      </div>
    </div>
  );
}
