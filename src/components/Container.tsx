import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Centered content wrapper, max-width ~1200px with responsive horizontal padding. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1200px] px-5 md:px-8", className)}
      {...props}
    />
  );
}
