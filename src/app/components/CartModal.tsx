"use client"

import Image from 'next/image'
import React from 'react'

export const CartModal = () => {

  const cartItems = false
  return (
    
    <div className=' w-[20rem] absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20'>
      {cartItems? (
        <div className=''>Cart is Empty</div>

       ) : (
        <>
        {/* LIST */}
        <h2 className=' text-xl'>Shopping cart</h2>
        <div className=' flex flex-col gap-8'>
          {/* ITEM */}
        <div className=' flex  gap-4'>
          <Image src="https://images.pexels.com/photos/20715719/pexels-photo-20715719/free-photo-of-brunette-woman-on-a-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt='' 
          width={72} 
          height={96} 
          className=' object-cover rounded-md'
          />
          <div className=' flex flex-col justify-between w-full'>
            {/* TOP */}
            <div className=''>
              {/* TITTLE  */}
              <div className=' flex items-center justify-between gap-8'>
              
              <h3 className='font-semibold'>Product Name</h3>
              <div className=' bg-gray-50 rounded-sm'>49$

              </div>

            

            </div>
            <div className=' text-sm text-gray-500'>
                available

              </div>
              </div>
            {/* BOTTOM */}
            <div className='flex justify-between text-sm'>
              <span className=' text-gray-500'>Qty.2</span>
              <span className=' text-blue-500'>Remove</span>
            </div>
          </div>
          </div>
          </div>
          {/* BUTTON */}
          <div className='w-full'>
            <div className=' flex items-center justify-between font-semibold'>
              <span className=''>Subtotal</span>
              <span className=''>$49</span>
            </div>
            <p className=' text-gray-500 text-sm mt-2 mb-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
            <div className='flex justify-between text-sm'>
              <button className=' rounded-md py-3 px-4 ring-1 ring-gray-300'>View cart</button>
              <button className='rounded-md py-3 px-4  bg-black text-white'>View cart</button>

            </div>
          </div>
          </>
        
       )}
       </div>
       
      
  );
};

export default CartModal;
