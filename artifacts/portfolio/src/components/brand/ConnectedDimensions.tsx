import type { CSSProperties } from "react";
import { BRAND_DIMENSIONS } from "@/data/brand";

type ConnectedDimensionsProps = {
  centerLabel?: string;
  className?: string;
};

export default function ConnectedDimensions({
  centerLabel = "Product Outcome",
  className = "",
}: ConnectedDimensionsProps) {
  return (
    <figure
      className={`relative mx-auto aspect-square w-full max-w-[34rem] overflow-hidden border border-white/12 bg-white/[0.035] ${className}`}
      aria-label={`6D Mind connected product model: ${BRAND_DIMENSIONS.join(", ")} connect to one ${centerLabel.toLowerCase()}.`}
    >
      <div className="absolute inset-[10%] rounded-full border border-white/10" />
      <div className="absolute inset-[21%] rounded-full border border-dashed border-primary/30" />

      {BRAND_DIMENSIONS.map((dimension, index) => {
        const angle = -90 + index * 60;
        const radians = (angle * Math.PI) / 180;
        const x = 50 + Math.cos(radians) * 39;
        const y = 50 + Math.sin(radians) * 39;
        const lineStyle = {
          transform: `rotate(${angle}deg)`,
        } satisfies CSSProperties;
        const nodeStyle = {
          left: `${x}%`,
          top: `${y}%`,
        } satisfies CSSProperties;

        return (
          <div key={dimension}>
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-px w-[39%] origin-left bg-gradient-to-r from-primary/65 to-[#e6b01d]/60"
              style={lineStyle}
            />
            <span
              className="absolute z-10 flex min-h-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#111827] px-3 py-2 text-center font-mono text-[0.68rem] tracking-[0.08em] text-white uppercase shadow-xl sm:px-4 sm:text-xs"
              style={nodeStyle}
            >
              {dimension}
            </span>
          </div>
        );
      })}

      <div className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/20 bg-[#0c1220] p-4 text-center shadow-[0_0_55px_rgba(45,78,235,0.22)] sm:h-36 sm:w-36">
        <img
          src="/brand/6d-mind/6d-mind-icon.png"
          width="650"
          height="650"
          alt=""
          aria-hidden="true"
          className="h-12 w-12 object-contain sm:h-16 sm:w-16"
        />
        <figcaption className="mt-2 text-[0.66rem] font-semibold tracking-[0.08em] text-white uppercase sm:text-xs">
          {centerLabel}
        </figcaption>
      </div>
    </figure>
  );
}
