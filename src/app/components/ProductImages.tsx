'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const images = [
    {
    id: 1,
    url:'https://images.pexels.com/photos/371829/pexels-photo-371829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
    id: 2,
    url:'https://images.pexels.com/photos/2920225/pexels-photo-2920225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
    id: 3,
    url:'https://images.pexels.com/photos/5460497/pexels-photo-5460497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
    id: 4,
    url:'https://images.pexels.com/photos/9825045/pexels-photo-9825045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
];

export const ProductImages = () => {

    const[index,setIndex] = useState(0)
  return (
    <div className=''>
        <div className=' '>
        <div className=' h-[500px] relative'>
            <Image src={images[index].url} 
            alt='' 
            fill 
            sizes='30vw'
            className=' object-cover rounded-md'
            />
            </div>
            
            
            <div className=' flex justify-between gap-4'>
                {images.map((img, i)=>(
                    <div className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer' 
                    key={img.id} 
                    onClick={()=>setIndex(i)}>

                    <Image src={img.url} 
                    alt='' 
                    fill 
                    sizes='30vw'
                    className=' object-cover rounded-md'
                    />
                    </div>

                ))}

            
            </div>
        </div>
        
    </div>
  )
}
