"use client";

import { motion } from "motion/react";
import BannerImage from "@/assets/images/BannerImage.jpg";

export default function Banner() {
  return (
    <section className="w-full overflow-clip relative">
      {/* Banner container with a fixed or responsive minimum height */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-100 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerImage.src})` }}
      >
        {/* Gradient Overlay (Tailwind v4 syntax) */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/60 to-transparent z-10"></div>

        {/* Banner Contents (Placed inside and given relative z-20 so it sits above the overlay) */}
        <div className="w-11/12 max-w-180 mx-auto py-32 relative z-20">
          <h1 className="text-center text-[56px] font-bold">
            <span className="text-chart-2">Nether Portal</span> Calculator
          </h1>
          <p className="text-center font-bold text-gray-300">
            Link portals perfectly · Java + Bedrock
          </p>

          <p className="headingBodyClass mt-8 mx-auto max-w-150 text-center">
            <span>Type</span> <span>coordinates</span> <span>on</span>{" "}
            <span>either</span> <span>side</span> <span>and</span>{" "}
            <span>the</span> <span>other</span> updates instantly. Copy
            ready-to-use teleport commands and see the portal search range on a
            real-scale map.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
