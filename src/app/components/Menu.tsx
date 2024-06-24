"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=''>
      <Image 
        src="/menu.png" 
        alt="Menu" 
        width={28} 
        height={28} 
        className="cursor-pointer" 
        onClick={() => setOpen(prev => !prev)} 
      />
      {open && (
        <div className=' absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8  text-xl z-10'>
          <a href='/'>HomePage</a>
          <a href='/'>Shop</a>
          <a href='/'>Deals</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>
          <a href='/'>Logout</a>
          <a href='/'>cart(1)</a>
       
          
        </div>
      )}
    </div>
  );
};

export default Menu;
