import { cva, type VariantProps } from "class-variance-authority";
import { CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { useTranslation } from "react-i18next";
import NumberFlow from "@number-flow/react";
import { motion, MotionConfig } from "motion/react";

const pricingColumnVariants = cva(
  "max-w-container relative flex flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
  {
    variants: {
      variant: {
        default: "glass-1 to-transparent dark:glass-3",
        glow: "glass-2 to-trasparent dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-foreground/30 after:blur-[72px]",
        "glow-brand":
          "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const MotionNumberFlow = motion.create(NumberFlow);

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type AnimatedPriceProps = {
  price: number;
  duration?: number; // ms
  className?: string; // e.g. "text-6xl font-bold"
  locale?: string; // e.g. "en-US" (used for measurement only)
  formatOptions?: Intl.NumberFormatOptions; // for measurement formatting
  onComplete?: () => void;
};

function Price({
  price,
  duration = 900,
  className,
  locale = undefined,
  formatOptions,
  onComplete,
}: AnimatedPriceProps) {
  const [display, setDisplay] = useState<number>(0);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const startValueRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>(
    undefined,
  );

  const formatter = new Intl.NumberFormat(locale, formatOptions);

  useEffect(() => {
    if (measureRef.current) {
      measureRef.current.textContent = formatter.format(price);
      const rect = measureRef.current.getBoundingClientRect();
      setContainerWidth(Math.ceil(rect.width));
    }

    const from = startValueRef.current ?? display;
    const to = Number(price);
    const start = performance.now();

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, duration > 0 ? elapsed / duration : 1);
      const eased = easeOutCubic(t);
      const current = Math.round(from + (to - from) * eased);
      setDisplay(current);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(to);
        startValueRef.current = to;
        rafRef.current = null;
        if (onComplete) onComplete();
      }
    };

    startValueRef.current = from;
    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [price, duration, locale, JSON.stringify(formatOptions)]);

  useEffect(() => {
    startValueRef.current = display;
  }, [display]);

  return (
    <>
      <MotionConfig
        transition={{
          layout: { type: "spring", duration: 0.5, bounce: 0 },
        }}
      >
        <div
          className="inline-block"
          style={{
            width: containerWidth ? `${containerWidth}px` : undefined,
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          <MotionNumberFlow
            value={display}
            layout
            layoutRoot
            className={className}
          />
        </div>
      </MotionConfig>

      <span
        ref={measureRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          visibility: "hidden",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}
        className={className}
      />
    </>
  );
}

export interface PricingColumnProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingColumnVariants> {
  name: string;
  icon?: ReactNode;
  description: string;
  price: number;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
}

export function PricingColumn({
  name,
  icon,
  description,
  price,
  priceNote,
  cta,
  features,
  variant,
  className,
  ...props
}: PricingColumnProps) {
  const { t } = useTranslation();

  return (
    <div
      className={cn(pricingColumnVariants({ variant, className }))}
      {...props}
    >
      <hr
        className={cn(
          "via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent",
          variant === "glow-brand" && "via-brand",
        )}
      />
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h2 className="flex items-center gap-2 font-bold">
            {icon && (
              <div className="text-muted-foreground flex items-center gap-2">
                {icon}
              </div>
            )}
            {name}
          </h2>
          <p className="text-muted-foreground max-w-[220px] min-h-[3rem] text-sm">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-3 lg:flex-col lg:items-start xl:flex-row xl:items-center">
          <div className="flex items-baseline gap-1">
            <span className="text-muted-foreground text-2xl font-bold">$</span>
            <Price price={price} className="text-6xl font-bold" duration={500} />
          </div>
          <div className="flex min-h-[40px] flex-col">
            {price > 0 && (
              <>
                <span className="text-sm">{t("pricing.permonth")}</span>
                <span className="text-muted-foreground text-sm">
                  {t("pricing.notincluding")}
                </span>
              </>
            )}
          </div>
        </div>
        <Button variant="default" size="lg" asChild>
          <Link to={cta.href}>{cta.label}</Link>
        </Button>
        <p className="text-muted-foreground min-h-[40px] max-w-[220px] text-sm">
          {priceNote}
        </p>
        <hr className="border-input" />
      </div>
      <div>
        <ul className="flex flex-col gap-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm">
              <CircleCheckBig className="text-muted-foreground size-4 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { pricingColumnVariants };
