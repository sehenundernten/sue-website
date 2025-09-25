import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        primary:
          "bg-white text-brand-gray text-md font-bold shadow-none hover:shadow-sm group",
        secondary:
          "bg-transparent text-brand-gray text-md font-bold shadow-none group",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary text-md font-bold underline-offset-4 decoration-brand-orange decoration-3 hover:underline",
        paypal: "bg-brand-blue text-white text-md font-bold shadow-none group",
      },
      size: {
        default: "h-12 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        primary: "h-14 rounded-full px-10 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  showArrow = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    showArrow?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {variant === "primary" || variant === "secondary" ? (
        <div className="flex flex-row items-center gap-2">
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {children}
          </span>
          {showArrow && (
            <Image
              src="/arrow-icon.svg"
              alt=""
              aria-hidden="true"
              width={60}
              height={32}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </div>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
