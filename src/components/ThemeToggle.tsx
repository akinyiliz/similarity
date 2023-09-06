"use client";

import { useTheme } from "next-themes";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import Button from "@/components/ui/Button";
import Icons from "@/components/Icons";

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Icons.Sun className="rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100" />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default ThemeToggle;
