import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/outline';
import React, { useEffect, useRef, useState } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


const MAX_LENGTH = 140;
const MAX_NAME_LENGTH = 80;


    
const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    // const { isLoading } = useAuth();


    useEffect(()=>{
        fetch('https://hidden-falls-85514.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[setProducts]);

    const handleDelete = id =>{
        const url = `https://hidden-falls-85514.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
            const remaining = products.filter(product => product._id !== id);
            setProducts(remaining);
            setOpen(true)
        }

        })
    }

    return (
        <div className=''>
            <div className='w-full m-auto bg-cover mt-10'>
                <img className=' m-auto' src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/AHXTPWY14UPXE/f8e2f061-8203-479a-bcae-90b090cffbb6._CR0,0,970,300_PT0_SX970__.jpg" alt="" />
            </div>
            
            <div  className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto mb-5">
            {
                products.map(product => <div key={product._id}>
                <div>
            <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img className="w-full h-full group-hover:opacity-75 object-center object-cover lg:w-full lg:h-60  md:h-50" src={product.pImg1} alt="" />
            <div className="mt-4 mx-3">
                <div>
                  <div className="text-md font-bold text-justify">
                  {product.pName.length > MAX_NAME_LENGTH ?
                      (
                        <div className=''>
                          {`${product.pName.substring(0, MAX_NAME_LENGTH)}...`}
                        </div>
                      ) :
                      <p className='' > {product.pName}</p>
                    }
                  </div>
                  <p className="text-sm  text-gray-900"><b>Price:</b> ${product.pPrice}</p>
                  <p className="text-sm  text-gray-900"><b>Color:</b> {product.pColor}</p>

                  <p className='text-left text-sm font-bold text-gray-900 mt-3'>Short Description</p>
                  <div className='text-sm mb-2 text-gray-700 font-medium  '>
                        {product.pDescription.length > MAX_LENGTH ?
                      (
                        <div>
                          {`${product.pDescription.substring(0, MAX_LENGTH)}...`}
                          <Link className='text-blue-700' to={`/productDetails/${product._id}`}><button>Read more</button></Link>
                        </div>
                      ) :
                      <p className='' > {product.pDescription}</p>
                    }
                  </div>
                </div>
              </div>
                {/* Button */}
              <div>
                <Link to={`/productdetails/${product._id}`}>
                  <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium  text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>View this Product</button>
                </Link>
              </div>
              <button onClick={()=> handleDelete(product._id)} className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-700 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Remove this Product</button>
        </div>
        </div>
        </div>
            </div>)
            }
            </div>

            {/*  Remove Modal */}
            {
        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Successfully Removed
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Hoorayyyy! Service Information Successfully Removed!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Ok
                  </button>
                  
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      }
        </div>
    );
};

export default ManageProducts;