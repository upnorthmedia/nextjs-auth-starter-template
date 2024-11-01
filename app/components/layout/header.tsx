"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { dark } from "@clerk/themes";

export function Header() {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex justify-center pt-3">
            <Image 
              src="/dash-logo.png" 
              alt="Husky Armory Logo" 
              width={100}
              height={32}
              priority
              style={{ height: 'auto' }}
              unoptimized={true}
            />
          </div>
          <div className="flex pt-3 items-center">
            <UserButton 
              appearance={{
                baseTheme: dark,
                variables: {
                  colorBackground: 'hsl(224 71% 4%)',
                  colorText: 'hsl(213 31% 91%)',
                  colorPrimary: 'hsl(271 83% 52%)'
                },
                elements: {
                  userButtonPopoverActionButtonIconBox__manageAccount: {
                    color: 'bg-white text-white hover:bg-white/90'
                  },
                  userButtonPopoverActionButtonIconBox: {
                    color: 'bg-white text-white hover:bg-white/90'
                  }
                }
              }}
              afterSignOutUrl="/"
            />
          </div>
        </div>
      </div>
    </header>
  );
}