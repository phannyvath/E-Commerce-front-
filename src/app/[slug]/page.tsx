import React from 'react'
import { ProductImages } from '../components/ProductImages';
import CustomizeProducts from '../components/CustomizeProducts';
import Add from '../components/Add';

export const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages/>
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
      <h1 className=' text-4xl font-medium '>Product Name</h1>
      <p className=' text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Officia quis autem cumque doloremque optio id, praesentium possimus. 
         Doloribus veritatis sunt, unde facere dicta suscipit ipsa, temporibus 
         minus quisquam recusandae accusantium?
      </p>
      <div className=' h-[2px] bg-gray-100'/>
      <div className=' lfex items-center gap-4'>
        <h3 className='text-xl text-gray-500 line-through'>1000$</h3>
        <h2 className=' font-medium text-2xl'>950$</h2>
      </div>
      <div className=' h-[2px] bg-gray-100'/>
      <CustomizeProducts/>
      <Add/>
      <div className=' h-[2px] bg-gray-100'/>
      <div className=' text-sm'>
        <h4 className=' font-medium mb-4'>Title</h4>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Aperiam id adipisci ea beatae illo excepturi ad quidem minima et, 
           culpa, autem recusandae voluptate neque ipsam. Excepturi distinctio
            aut expedita harum.</p>
      </div>

      <div className=' text-sm'>
        <h4 className=' font-medium mb-4'>Title</h4>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Aperiam id adipisci ea beatae illo excepturi ad quidem minima et, 
           culpa, autem recusandae voluptate neque ipsam. Excepturi distinctio
            aut expedita harum.</p>
      </div>

      <div className=' text-sm'>
        <h4 className=' font-medium mb-4'>Title</h4>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Aperiam id adipisci ea beatae illo excepturi ad quidem minima et, 
           culpa, autem recusandae voluptate neque ipsam. Excepturi distinctio
            aut expedita harum.</p>
      </div>
      

      
      </div>
    </div>
  )
}

export default SinglePage;