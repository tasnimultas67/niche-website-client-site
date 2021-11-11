import React,{ useRef, useState,Fragment } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
         console.log(data);
         axios.post('http://localhost:5000/products', data)
         .then(res=> {
             console.log(res)
         })
        }

    return (
        <div>
            <div>
                <h1 className='text-2xl font-medium mt-4'>Please Add Product Information</h1>
            </div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className=' '>


        {/* Product Name */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'type='text' {...register("pName", { required: true, maxLength: 200 })} placeholder='Product Name' />


      {/* Product Description */}
      <textarea className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='text' {...register("pDescription", { required: true, maxLength: 500 })} placeholder='Product Description'/>


      {/* Product Image Link */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg1", { required: true})} placeholder='Product Image Link:1'/>
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg2")} placeholder='Product Image Link:2' />
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg3")} placeholder='Product Image Link:3' />


      {/* Product Price */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="number" {...register("pPrice")} placeholder='Product Price' />


      {/* Product Brand */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pBrand")} placeholder='Product Brand Name' />


      {/* Product Color */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pColor")} placeholder='Product Color' />


      {/* Product Size */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pSize")} placeholder='Product Size' />
      <input className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-gray-800 hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type="submit"  />
    </form>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;