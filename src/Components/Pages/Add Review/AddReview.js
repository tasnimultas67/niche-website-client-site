import React from 'react';
import { useForm,} from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset} = useForm();
    const { user } = useAuth();
    // console.log(user)

    const onSubmit = data => {
        const newData={...data ,img:`${user.photoURL}`}
  
        //   console.log("this is newData",newData);
  
          fetch('http://localhost:5000/reviews', {
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body: JSON.stringify(newData)
          })
          .then(res => res.json())
          .then(result => {
            //   console.log(result);
              if(result.insertedId){
                  alert('Successfully Added')
                  reset()
              }
          })
        };

    return (
        <div className='m-auto text-center mt-16 mb-16'>
            <div className='m-auto items-center mt-6 space-y-12 '>
            <div className="max-w-md w-full m-auto ">
            <form onSubmit={handleSubmit(onSubmit)} className=' '>
                {/* user Name */}
                <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'type='text' defaultValue={user.displayName} {...register("name", { required: true, maxLength: 200 })} placeholder='Name' />


                {/* review Description */}
                <textarea className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type='text' {...register("rDescription", { required: true, maxLength:500})} placeholder='Description'/>

                <input className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-gray-800 hover:bg-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type="submit"  />
                </form>
            </div>
        </div>
        </div>
    );
};

export default AddReview;