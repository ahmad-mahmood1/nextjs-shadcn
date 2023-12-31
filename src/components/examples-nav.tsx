"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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
    name: "Playground",
    href: "/playground",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/playground",
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
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
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
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
      <ExampleCodeLink
        pathname={pathname === "/" ? "/dashboard" : pathname}
      />
    </div>
  )
}

interface ExampleCodeLinkProps {
  pathname: string | null
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) => pathname?.startsWith(example.href))

  if (!example?.code) {
    return null
  }

  return (
    <Link
      href={example?.code}
      target="_blank"
      rel="nofollow"
      className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
