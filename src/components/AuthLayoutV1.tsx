"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
  images?: string[];
  imagesText: Array<{ image: string; text: string }>;
  headline?: string;
}

const defaultImages = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
];

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
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      
      {/* LEFT SECTION */}
      <div className="relative w-full md:w-1/2 bg-white overflow-hidden">

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden relative h-[65vh]">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${imagesText[active]?.image || images[0]})`,
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Progress */}
          <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 flex-1 rounded cursor-pointer ${
                  active === i ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Headline */}
          <div className="absolute bottom-24 left-6 right-6 text-white z-20">
            <motion.h1
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold leading-tight"
            >
              {imagesText[active]?.text || headline}
            </motion.h1>
          </div>
        </div>

        {/* DESKTOP HERO */}
        <div className="hidden md:flex h-full items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex items-center justify-center p-12"
          >
            <h2 className="text-4xl font-semibold max-w-md">
              {imagesText[0]?.text || headline}
            </h2>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center px-6 py-10 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md">
           Sign in 
          </button>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-md">
           Create an account
          </button>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 bg-white md:flex items-center justify-center px-6 py-10 hidden">
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
