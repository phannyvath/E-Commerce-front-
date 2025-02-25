import React from 'react';
import { Menu } from './Menu';
import Image from 'next/image';
import { SearchBar } from './SearchBar';
import NavIcons from './NavIcons'; // No curly braces for default export

export const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      <div className=' h-full flex items-center justify-between md:hidden'>
        <a href='/' className=' text-2xl tracking-wide'>LAMA</a>
        <Menu/>
      </div>
      <div className=' hidden md:flex items-center justify-between gap-8 h-full'>
        <div className=' w-1/3 xl:w-1/2 flex items-center gap-12'>
          <a href="/" className=' flex items-center gap-3'>
            <Image src="/logo.png" alt='' width={24} height={24}/>
            <a href='/' className=' text-2xl tracking-wide'>LAMA</a>
          </a>
          <div className=' hidden xl:flex gap-4'>
          <a href='/'>HomePage</a>
          <a href='/'>Shop</a>
          <a href='/'>Deals</a>
          <a href='/'>About</a>
          <a href='/'>Contact</a>

          </div>
        </div>
        <div className=' w-2/3 xl:w-1/2 flex items-center justify-between gap-y-48'>
          <SearchBar/>
          <NavIcons/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
