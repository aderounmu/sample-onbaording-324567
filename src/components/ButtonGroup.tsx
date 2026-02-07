"use client";
import React from "react";
import { Separator } from "./ui/separator";
import { FieldSeparator } from "./ui/field";
import GoogleIcon from "./svg-icons/google";
import Image from 'next/image'

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
      
      <div className="my-4"><FieldSeparator textClassName="bg-[#faeee5]">Or</FieldSeparator></div>
    <button className="relative z-0 h-10 text-black dark:text-white w-full rounded-full bg-none px-6  border border-slate-300">
        <div className="flex items-center justify-center gap-2"><Image src="/google.png" alt="Google Icon" width={16} height={16} /><span>Continue with Google</span></div>
      </button>

      <button className="relative z-0 h-10 w-full text-black dark:text-white rounded-full bg-none px-6  border border-slate-300">
               <div className="flex items-center justify-center gap-2"><Image src="/apple.png" alt="Apple Icon" width={16} height={16} /><span>Continue with Apple</span></div>
      </button>
        
    </>
  );
};
