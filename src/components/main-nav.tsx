"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
const examples = [
  {
    name: "Dashboard",
    href: "/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/dashboard",
  },
  {
    name: "Cards",
    href: "/cards",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/cards",
  },
  {
    name: "Tasks",
    href: "/tasks",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/tasks",
  },
  {
    name: "Forms",
    href: "/forms",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/forms",
  },
  {
    name: "Music",
    href: "/music",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/music",
  },
  {
    name: "Authentication",
    href: "/authentication",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/authentication",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {examples.map((example) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex items-center px-4",
              pathname?.startsWith(example.href)
                ? "font-bold text-primary"
                : "font-medium text-muted-foreground"
            )}
          >
            {example.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
