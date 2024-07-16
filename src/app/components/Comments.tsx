import Image from "next/image";
import React from "react";

export const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment...."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* comments */}
      <div className="">
        {/* comment */}
        <div className=""></div>
        {/* avatar */}
        <Image
          src="https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        {/* desc */}
        <div className="flex flex-col gap-2">
          <span className="font-medium">Jhon Smith</span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore hic
            suscipit, molestias repudiandae nemo similique repellendus est
            veritatis voluptatibus provident eum. Iure asperiores fugit
            consequuntur quae sapiente a culpa laboriosam.
          </p>
          <div className="">
            <div className="">
              <Image
                src="/like.png"
                alt=""
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>
          </div>
        </div>
        {/* icon */}
        <Image
          src="/more.png"
          alt=""
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>
    </div>
  );
};
