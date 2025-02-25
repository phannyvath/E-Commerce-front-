'use client'

import { useContext, useEffect } from "react"
import { CategoryList } from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Slider from "./components/Slider"
import { WixClientContext } from "@/context/wixContext"

const HomePage = () => {
  const wixClient =useContext(WixClientContext)

  useEffect(()=>{

 
  const getProducts = async()=> {

  const res = await wixClient.products.queryProducts().find();
console.log(res)
};


getProducts();
},[wixClient]);
  return (
  
      <div className=''>
      <Slider/>
      

    <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
    <h1 className=' text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12'>Featured Products</h1>
      <ProductList/>
    </div>

    <div className=" mt-24  ">
    <h1 className=' text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12'>Featured Products</h1>
      <CategoryList/>
    </div>

    <div className=" mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 ">
    <h1 className=' text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12'>Featured Products</h1>
      <ProductList/>
    </div>

    </div>
    
    
    
  )
}

export default HomePage