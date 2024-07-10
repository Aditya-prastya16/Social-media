"use client";

import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">
      {/* avatar */}
      <Image
        src="https://images.pexels.com/photos/26731316/pexels-photo-26731316/free-photo-of-a-woman-walking-down-a-road-with-a-blanket-wrapped-around-her.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=loadad"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      ></Image>
      {/* post */}
      <div className="flex-1">
        {/* textinput */}
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            placeholder="What's on your mind ?"
            className="flex-1 rounded-lg p-2 bg-slate-100"
          ></textarea>
          <Image
            src="/emoji.png"
            alt=""
            width={20}
            height={20}
            className="w-5 h-5 cursor-pointer self-end"
          />
        </div>
        {/* post option */}
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex item-center gap-2 cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20} />
            Photo
          </div>
          <div className="flex item-center gap-2 cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20} />
            Video
          </div>
          <div className="flex item-center gap-2 cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20} />
            Poll
          </div>
          <div className="flex item-center gap-2 cursor-pointer">
            <Image src="/addevent.png" alt="" width={20} height={20} />
            Event
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
