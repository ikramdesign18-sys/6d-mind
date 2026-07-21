import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "framer-motion";

type EditorialRevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

export default function EditorialReveal({
  children,
  className,
  delay = 0,
}: EditorialRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
