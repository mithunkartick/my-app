'use client';
import { FlipWordsDemo } from "@/components/aceternity/flip";
import { FloatingNavDemo } from "@/components/aceternity/float-nav";
import { SpotlightNewDemo } from "@/components/aceternity/spot-new";
import { VortexDemo } from "@/components/aceternity/vortex";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { HoveredLink, LogoItem, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  return (
    <div className="relative w-full">
      <Navbar className="top-2" />
      <SpotlightNewDemo />
      <VortexDemo/>
    </div>
      
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 items-center justify-center", className)}
    >
      
      <Menu setActive={setActive}>
        <LogoItem setActive={setActive} active={active} item="GVB"/>
        <MenuItem setActive={setActive} active={active} item="Companies">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">GVB Construction & Realtors</HoveredLink>
            <HoveredLink href="/interface-design">GVB Enterprises</HoveredLink>
            <HoveredLink href="/seo">BJM Web Services</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Pick n Paint"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="GVB Enterprises Online Store"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Offices">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Theni</HoveredLink>
            <HoveredLink href="#">Coimbatore</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:contact@gvbgroup.org">contact@gvbgroup.org</HoveredLink>
            <HoveredLink href="mailto:contact@gvbgroups.com">contact@gvbgroups.com</HoveredLink>
            <HoveredLink href="tel:+917010293497">+91 7010 293 497</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
      
    </div>
  );
}
