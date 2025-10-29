import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Home, LogIn, Martini } from "lucide-react";
import { stackServerApp } from "@/stack/server";
import { getUserDetails } from "@/lib/actions";
import { UserButton } from "@stackframe/stack";

const Navbar = async () => {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);

  console.log(userProfile?.name);

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
            {user ? (
              <UserButton />
            ) : (
              <Button
                variant="ghost"
                className="flex items-center gap-2"
                asChild
              >
                <Link href={app.signIn}>
                  <LogIn className="w-4 h-4" />
                  <span className="hidden lg:inline">Log in</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
