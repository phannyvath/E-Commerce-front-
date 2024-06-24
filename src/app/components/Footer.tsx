import Image from 'next/image';
import React from 'react';

export const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <a href="/"> 
            <div className='text-2xl tracking-wide'>LAMA</div>
          </a>
          <p>3532 Phnom Penh, st56 Floor 28, Cambodia</p>
          <span className='font-semibold'>BBLK01@gmail.com</span>
          <span className='font-semibold'>+855 16 126 629</span>
          <div className='flex gap-6'>
            <Image src="/facebook.png" alt='Facebook' width={16} height={16} />
            <Image src="/instagram.png" alt='Instagram' width={16} height={16} />
            <Image src="/youtube.png" alt='YouTube' width={16} height={16} />
            <Image src="/pinterest.png" alt='Pinterest' width={16} height={16} />
            <Image src="/x.png" alt='X' width={16} height={16} />
          </div>
        </div>
        
        {/* CENTER */}
        <div className='hidden lg:flex w-1/2 justify-between'>
         <div className='flex flex-col justify-between'>
          <h1 className=' font-medium text-lg'>COMPANY</h1>
          <div className=' flex flex-col gap-6'>
            <a href="">About us</a>
            <a href="">Careers</a>
            <a href="">Affiliates</a>
            <a href="">Blog</a>
            <a href="">Contact Us</a>
            
          </div>
         </div>

         <div className='flex flex-col justify-between'>
          <h1 className=' font-medium text-lg'>SHOP</h1>
          <div className=' flex flex-col gap-6'>
            <a href="">New Arrivals</a>
            <a href="">Accessories</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">All Products</a>
            
          </div>
         </div>

         <div className='flex flex-col justify-between'>
          <h1 className=' font-medium text-lg'>Help</h1>
          <div className=' flex flex-col gap-6'>
            <a href="">Customer Service</a>
            <a href="">My Account</a>
            <a href="">Find a store</a>
            <a href="">Legal & Privacy</a>
            <a href="">Gift Card</a>
            
          </div>
         </div>


        </div>

        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>You can be one of our best clients. Please join us and buy something.</p>
          <div className='flex'>
            <input type="text" placeholder='Email address' className='p-4 w-3/4' />
            <button className='w-1/4 bg-lama text-white'>JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className='flex justify-between'>
            <Image src="/discover.png" alt='Discover' width={40} height={20} />
            <Image src="/skrill.png" alt='Skrill' width={40} height={20} />
            <Image src="/paypal.png" alt='PayPal' width={40} height={20} />
            <Image src="/mastercard.png" alt='MasterCard' width={40} height={20} />
            <Image src="/visa.png" alt='Visa' width={40} height={20} />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div className=''>@2024 Lama Shop</div>
        <div className=' flex flex-col gap-8 md:flex-row '>
          <div className=''>
            <span className=' text-gray-500 mr-4'>Language</span>
            <span className=' font-medium'>Cambodia | khmer</span>
          </div>

          <div className=''>
            <span className=' text-gray-500 mr-4'>Currency</span>
            <span className=' font-medium'> Riels & USD</span>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Footer;
