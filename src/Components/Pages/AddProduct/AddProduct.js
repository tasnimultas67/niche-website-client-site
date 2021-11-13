import React from 'react';
import axios from 'axios';
import { useForm,} from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data =>{
         console.log(data);
         axios.post('https://hidden-falls-85514.herokuapp.com/products', data)
         .then(res=> {
            if(res.data.insertedId){
                // setOpen(true)
                console.log(res);
              alert('Successfully Added');
              reset()
              }
         })
        }
    return (
        <div>
            <div className='w-full m-auto bg-cover mt-10'>
                <img className=' m-auto' src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/AHXTPWY14UPXE/254d0af7-289c-47eb-bf97-19572a7314f6.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" />
            </div>
            <div>
                <h1 className='text-2xl font-bold mt-4 md:mt-5 text-center '>Please Add Product Information</h1>
            </div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className=' '>


        {/* Product Name */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'type='text' {...register("pName", { required: true, maxLength: 200 })} placeholder='Product Name' />


      {/* Product Description */}
      <textarea className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='text' {...register("pDescription", { required: true})} placeholder='Product Description'/>


      {/* Product Image Link */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg1", { required: true})} placeholder='Product Image Link:1'/>
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg2", { required: true})} placeholder='Product Image Link:2' />
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pImg3", { required: true})} placeholder='Product Image Link:3' />


      {/* Product Price */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="number" {...register("pPrice", { required: true})} placeholder='Product Price' />


      {/* Product Brand */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pBrand", { required: true})} placeholder='Product Brand Name' />


      {/* Product Color */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pColor", { required: true})} placeholder='Product Color' />


      {/* Product Size */}
      <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="text" {...register("pSize", { required: true})} placeholder='Product Size' />
      <input className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-gray-800 hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type="submit"  />
    </form>
            </div>
        </div>
        </div>
    );
};

export default AddProduct;