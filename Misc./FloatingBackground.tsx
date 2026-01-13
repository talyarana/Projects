"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  LineChart,
  Database,
  TrendingUp,
  Activity,
} from "lucide-react";

type Item = {
  Icon: React.ElementType;
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
  rotate: number;
  opacity: number;
};

const ITEMS: Item[] = [
  { Icon: PieChart,   size: 28, left: "8%",  top: "18%", delay: 0.0, duration: 10, driftX: 18, driftY: -22, rotate: 14,  opacity: 0.25 },
  { Icon: BarChart3,  size: 30, left: "86%", top: "22%", delay: 0.6, duration: 12, driftX: -20, driftY: 24,  rotate: -12, opacity: 0.22 },
  { Icon: LineChart,  size: 26, left: "14%", top: "72%", delay: 1.1, duration: 11, driftX: 22, driftY: -18, rotate: 10,  opacity: 0.20 },
  { Icon: Database,   size: 28, left: "92%", top: "70%", delay: 0.3, duration: 13, driftX: -18, driftY: -24, rotate: -10, opacity: 0.18 },
  { Icon: TrendingUp, size: 26, left: "56%", top: "14%", delay: 0.9, duration: 14, driftX: 16, driftY: 18,  rotate: 12,  opacity: 0.18 },
  { Icon: Activity,   size: 24, left: "52%", top: "84%", delay: 0.2, duration: 15, driftX: -14, driftY: 16,  rotate: -14, opacity: 0.16 },
];

export default function FloatingBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* soft glows */}
      <div className="absolute -top-24 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute top-[45%] left-[10%] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />

      {/* floating icons */}
      {ITEMS.map((it, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{ left: it.left, top: it.top, opacity: it.opacity }}
          initial={{ y: 0, x: 0, rotate: 0 }}
          animate={{
            y: [0, it.driftY, 0],
            x: [0, it.driftX, 0],
            rotate: [0, it.rotate, 0],
          }}
          transition={{
            duration: it.duration,
            delay: it.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <it.Icon className="text-white" width={it.size} height={it.size} />
        </motion.div>
      ))}

      {/* tiny floating dots */}
      <motion.div
        className="absolute left-[30%] top-[38%] h-2 w-2 rounded-full bg-white/30"
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[78%] top-[55%] h-1.5 w-1.5 rounded-full bg-white/25"
        animate={{ y: [0, 16, 0], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </div>
  );
}
