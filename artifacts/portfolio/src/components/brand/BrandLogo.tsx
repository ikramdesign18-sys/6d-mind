import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
  compactOnMobile?: boolean;
  inverted?: boolean;
};

export default function BrandLogo({
  className,
  iconClassName,
  wordmarkClassName,
  compactOnMobile = false,
  inverted = false,
}: BrandLogoProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)}>
      <img
        src="/brand/6d-mind/6d-mind-icon.png"
        width="650"
        height="650"
        alt="6D Mind logo"
        decoding="async"
        className={cn("block h-9 w-9 shrink-0 object-contain", iconClassName)}
      />
      <span
        className={cn(
          "items-baseline whitespace-nowrap text-lg font-bold tracking-tight",
          compactOnMobile
            ? "hidden min-[400px]:inline-flex md:inline-flex"
            : "inline-flex",
          inverted ? "text-background" : "text-foreground",
          wordmarkClassName,
        )}
      >
        <span className="text-primary">6D</span>
        <span className="ml-1.5">Mind</span>
      </span>
    </span>
  );
}
