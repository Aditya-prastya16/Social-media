"use client";

import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
      <div className="flex gap-8 w-max">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/26731316/pexels-photo-26731316/free-photo-of-a-woman-walking-down-a-road-with-a-blanket-wrapped-around-her.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">You</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
            <Image src="https://images.pexels.com/photos/9551192/pexels-photo-9551192.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
            <span className="font-medium ">Ricky</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
