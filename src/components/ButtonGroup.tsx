"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { FieldSeparator } from "./ui/field";
import GoogleIcon from "./svg-icons/google";
import Image from "next/image";

export const ButtonGroup = () => {
  return (
    <>
      <button className="relative z-0 h-10 w-full rounded-full bg-[#ff6602] px-6 text-neutral-50 border border-[#ff6602]">
        Sign in
      </button>
      <button className="relative z-0 h-10 w-full rounded-full  px-6 text-[#ff6602] border border-[#ff6602]">
        Create an account
      </button>
      {/* <div className="flex gap-x-1 items-center justify-center">
        <span>Don't have an account? </span>
        <a href="#" className="text-[#ff6602]">Register</a>
      </div> */}

      <div className="my-4">
        <FieldSeparator textClassName="bg-[#faeee5]">Or</FieldSeparator>
      </div>
       <button className="relative z-0 h-10 w-full text-black dark:text-white rounded-full bg-none px-6  border border-slate-300">
        {/* <div className="flex items-center justify-center gap-2"><Image src="/apple.png" alt="Apple Icon" width={16} height={16} /><span>Continue with Apple</span></div> */}
        <div className="flex items-center justify-center gap-2">
          <Image src="/play_store.svg" alt="Play Store Icon" width={20} height={20} />
          <div className="flex flex-col items-start text-xs -gap-y-4">
            <span>Download on the</span>
            <span className=" font-bold text-sm ">Play store</span>
          </div>
        </div>
      </button>

      <button className="relative z-0 h-10 w-full text-black dark:text-white rounded-full bg-none px-6  border border-slate-300">
        {/* <div className="flex items-center justify-center gap-2"><Image src="/apple.png" alt="Apple Icon" width={16} height={16} /><span>Continue with Apple</span></div> */}
        <div className="flex items-center justify-center gap-2">
          <Image src="/apple.png" alt="Apple Icon" width={20} height={20} />
          <div className="flex flex-col items-start text-xs -gap-y-4">
            <span>Download on the</span>
            <span className=" font-bold text-sm ">App store</span>
          </div>
        </div>
      </button>
    </>
  );
};
