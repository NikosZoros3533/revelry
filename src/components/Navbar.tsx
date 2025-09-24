import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Home, LogIn, Martini } from "lucide-react";
import { UserButton } from "@stackframe/stack";

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 ">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-lg font-bold text-primary-background tracking-wider"
            >
              🍸REVELRY
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/places">
                <Martini className="w-4 h-4" />
                <span className="hidden lg:inline">Places</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/">
                <Home className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>
            {/* <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/handler/sign-in">
                <LogIn className="w-4 h-4" />
                <span className="hidden lg:inline">Sign in</span>
              </Link>
            </Button>
            <Button variant="ghost" className="flex items-center gap-2" asChild>
              <Link href="/handler/sign-up">
                <LogIn className="w-4 h-4" />
                <span className="hidden lg:inline">Sign up</span>
              </Link>
            </Button> */}
            <UserButton/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
