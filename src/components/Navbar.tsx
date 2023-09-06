import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import SignInButton from "@/components/SignInButton";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";

const Navbar = async () => {
  const session = await getServerSession();

  return (
    <header className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <nav className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link href={"/"} className={buttonVariants({ variant: "link" })}>
          Text Similarity 1.0
        </Link>

        {/* Mobile devices */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>

        {/* Medium & Desktop devices */}
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href={"/documentation"}
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>

          {session ? (
            <>
              <Link
                href={"/dashboard"}
                className={buttonVariants({ variant: "ghost" })}
              >
                Dashboard
              </Link>

              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
