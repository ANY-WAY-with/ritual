import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "@/components/icons";

type Variant = "primary" | "beige" | "ghost" | "yellow" | "blue" | "ghost-light";

const VARIANTS: Record<Variant, string> = {
  // black pill, cream text
  primary: "bg-ditto-ink text-ditto-cream hover:bg-ditto-ink/90",
  // beige pill, black text
  beige: "bg-ditto-beige text-ditto-ink hover:bg-ditto-beige/80",
  // transparent, muted text
  ghost: "bg-transparent text-ditto-muted hover:text-ditto-ink",
  // brand yellow pill, black text
  yellow: "bg-ditto-yellow text-ditto-ink hover:brightness-95",
  // brand blue pill, cream text
  blue: "bg-ditto-blue text-ditto-cream hover:bg-ditto-blue/90",
  // transparent on dark sections, cream text
  "ghost-light": "bg-transparent text-ditto-cream hover:opacity-80",
};

interface PillButtonProps extends ComponentProps<"a"> {
  variant?: Variant;
  /** show trailing arrow icon (default true) */
  withArrow?: boolean;
  /** smaller padding/size (e.g. "See Case Studies") */
  size?: "default" | "sm";
}

/**
 * Ditto's pill-shaped CTA. Fully-rounded, 16px/700 label with an optional
 * trailing arrow that nudges right on hover. Renders as an anchor.
 */
export function PillButton({
  variant = "primary",
  withArrow = true,
  size = "default",
  className,
  children,
  ...props
}: PillButtonProps) {
  return (
    <a
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition-all duration-200",
        size === "default" ? "px-5 py-[15px] text-base tracking-[0.13px]" : "px-[15px] py-[13px] text-[13px] tracking-[0.13px]",
        VARIANTS[variant],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
}
