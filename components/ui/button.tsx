import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive uppercase tracking-wide",
  {
    variants: {
      variant: {
        locked:"bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default:
          "bg-white text-black border-slate-200 border-2  active:border-[10px] hover:bg-gray-100 text-gray-500",

        primary:"bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-2 active:border-b-0",
        primaryoutline:"bg-white text-sky-500 hover:bg-slate-100 border-2",

        secondary:"bg-yellow-500 text-primary-foreground hover:bg-yellow-500/90 border-yellow-600 border-3 active:border-0",

        secondaryoutline:"bg-white text-green-500 hover:bg-slate-100",
        danger:"bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-600 active:border-0 border-4",
        dangeroutline:"bg-white text-rose-500 hover:bg-slate-100",

        super:"bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-2 active:border-0",

        superoutline:"bg-white text-indigo-500 hover:bg-slate-100",
        ghost:"bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",

        sidebar:"bg-transparent text-slate-500 border-transparent border-2 hover:bg-slate-100 transistion-none",

        sidebaroutline:"bg-gray-300/15 text-black-500 border-gray-800 border-2 hover:bg-gray-100/20 transistion-none",
        },
      size: {
        default: "h-11 px-4 py-2 has-[>svg]:px-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 has-[>svg]:px-4",
        icon: "size-9",
        rounded: "rounded-full mt-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
