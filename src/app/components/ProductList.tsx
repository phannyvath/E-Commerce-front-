import Image from 'next/image';
import React from 'react';

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-8 gap-y-16 justify-between flex-wrap'>
      <a href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src="https://images.pexels.com/photos/25288421/pexels-photo-25288421/free-photo-of-model-in-blue-dress-with-black-scarf-on-her-shoulder.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src="https://images.pexels.com/photos/25288433/pexels-photo-25288433/free-photo-of-model-in-blue-dress-with-grey-chiffon-scarf.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
            className='absolute rounded-md'
          />
        </div>
        <div className=' flex justify-between'>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-semibold'>$49</span>
            
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
      </a>

      {/* Second */}

      <a href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src="https://images.pexels.com/photos/6996083/pexels-photo-6996083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src="https://images.pexels.com/photos/6995884/pexels-photo-6995884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
            className='absolute rounded-md'
          />
        </div>
        <div className=' flex justify-between'>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-semibold'>$49</span>
            
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
      </a>

      {/* Third */}

      <a href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src="https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src="https://images.pexels.com/photos/1689718/pexels-photo-1689718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
            className='absolute rounded-md'
          />
        </div>
        <div className=' flex justify-between'>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-semibold'>$49</span>
            
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
      </a>

      {/* Third */}

      <a href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src="https://images.pexels.com/photos/2437897/pexels-photo-2437897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First Image"
            layout="fill"
            objectFit="cover"
            className='rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
          />
          <Image
            src="https://images.pexels.com/photos/2437902/pexels-photo-2437902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second Image"
            layout="fill"
            objectFit="cover"
            className='absolute rounded-md'
          />
        </div>
        <div className=' flex justify-between'>
            <span className=' font-medium'>Product Name</span>
            <span className=' font-semibold'>$49</span>
            
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white'>Add to Cart</button>
      </a>

      
    </div>
  );
}

export default ProductList;
