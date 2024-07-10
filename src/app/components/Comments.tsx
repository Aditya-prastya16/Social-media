import Image from 'next/image'
import React from 'react'

export const Comments = () => {
  return (
    <div className=''>
        {/* write */}
        <div className='flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/19786392/pexels-photo-19786392/free-photo-of-photo-of-pink-flowers-and-a-kitten-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width={32} height={32} className='w-8 h-8 rounded-full' />
        </div>
        {/* comments */}
        <div className=''></div>
    </div>
  )
}
