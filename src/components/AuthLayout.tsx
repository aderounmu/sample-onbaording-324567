"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ButtonGroup } from "./ButtonGroup";

interface AuthLayoutProps {
  children: React.ReactNode;
  images?: string[];
  imagesText: Array<{ image: string; text: string; subtitle?: string }>;
  headline?: string;
}

const defaultImages = ["/img-1.jpg", "/img-2.jpg", "/img-3.jpg"];

export default function AuthLayout({
  children,
  images = defaultImages,
  imagesText,
  headline = "Send money to over 40 countries with speed and ease.",
}: AuthLayoutProps) {
  const [active, setActive] = useState(0);

  /* Auto Slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % imagesText.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [imagesText.length]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#faeee5] md:bg-gray-50">
      {/* LEFT SECTION */}
      <div
        className="
          relative
          w-full
          mt-16
          lg:w-1/2
          flex
          items-center
          justify-center
          *bg-gradient-to-br
          *from-blue-600
          *via-blue-700
          *to-indigo-800
          px-6
          pt-12
          pb-5
        "
      >
        {/* Progress */}
        <div className="md:hidden absolute top-4 left-4 right-4 flex gap-2 z-20">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`h-1 flex-1 rounded cursor-pointer ${
                active === i ? "bg-[#ff6602]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Card Container */}
        <div className="relative w-full max-w-md">
          <div className=" block md:hidden my-5 text-center text-black px-2">
            <h2 className="text-3xl font-bold mb-5">
              {" "}
              {imagesText[active]?.text || headline}
            </h2>

            {imagesText[active]?.subtitle && (
              <p className="mt-2 font-thin text-gray-600 text-lg">
                {imagesText[active]?.subtitle}
              </p>
            )}
          </div>
          {/* Image Box */}
          <div
            className="
                relative
                overflow-hidden
                rounded-3xl

                w-full
                max-w-md
                mx-auto

                shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)]
                hover:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.45)]
                transition-shadow
                duration-500

                border
                border-white/30

                bg-white/15
                backdrop-blur-xl
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={imagesText[active]?.image || images[0]}
                src={imagesText[active]?.image || images[0]}
                alt="Auth Slide"
                className="
                    w-full
                    h-95
                    md:h-72
                    object-cover
                "
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </AnimatePresence>

            {/* Stronger Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Text Under Image */}
          <div className="hidden md:block mt-12 text-center text-black px-2">
            <h2 className="text-2xl font-bold">
              {" "}
              {imagesText[active]?.text || headline}
            </h2>

            {imagesText[active]?.subtitle && (
              <p className="mt-2 text-white/80 md:text-gray-800 text-sm">
                {imagesText[active]?.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2  flex items-center justify-center px-6 py-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md flex flex-col gap-y-4"
        >
          <ButtonGroup/>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 bg-[#faeee5] md:flex items-center justify-center px-6 py-10 hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
