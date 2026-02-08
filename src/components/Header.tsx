"use client";
import React from "react";
import Image from 'next/image'


const Header = () => {

    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:border-b md:border-border md:shadow-sm md:bg-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-primary bg-[#ff6602] rounded-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-zap w-5 h-5 text-primary-foreground"
            >
              <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-black">StreetTak</span> */}
          <Image src="/logo.png" alt="StreetTak Logo" width={111} height={32} />
        </div>
        {/* <nav className={`hidden md:flex items-center gap-6`}>
          <a
            href="#hero"
            className="relative text-sm font-medium transition-colors hover:text-black text-black"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
          </a>
          <a
            href="#features"
            className="relative text-sm font-medium transition-colors hover:text-black text-neutral-500"
          >
            Features
          </a>
          <a
            href="#community"
            className="relative text-sm font-medium transition-colors hover:text-black text-neutral-500"
          >
            Community
          </a>
          <a
            href="#gallery"
            className="relative text-sm font-medium transition-colors hover:text-black text-neutral-500"
          >
            Gallery
          </a>
          <a
            href="#downloads"
            className="relative text-sm font-medium transition-colors hover:text-black text-neutral-500"
          >
            Downloads
          </a>
          <a
            href="#contact"
            className="relative text-sm font-medium transition-colors hover:text-black text-neutral-500"
          >
            Contact Us
          </a>
        </nav> */}
        <div className={`flex items-center gap-3`}>
          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground w-9 h-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon h-4 w-4"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <span className="sr-only">Toggle theme</span>
          </button>
          <button className="items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 hidden sm:inline-flex text-neutral-500 hover:text-black">
            Login
          </button>
          <button className="items-center  bg-[#ff6602] justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground hover:bg-orange-dark shadow-md hover:shadow-lg h-9 rounded-md px-3 hidden sm:inline-flex">
            Sign Up
          </button>
          {/* <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu w-5 h-5"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
