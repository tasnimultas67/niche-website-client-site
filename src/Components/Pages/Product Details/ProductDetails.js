import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    const {_id, pName, pImg1, pImg2, pImg3, pPrice, pSize, pBrand, pColor, pDescription} = product;

    return (
            <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={pImg3}
              alt=''
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={pImg2}
                alt=''
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={pImg1}
              alt=''
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">{pName}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-2xl text-gray-900"><b>Price: </b>${pPrice}</p>


            <div className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium"><b>Color:</b> {pColor}</h3>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm text-gray-900 font-medium"><b>Size:</b> {pSize}</h3>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex items-center justify-between">
                <p><b>Product Brand:</b> {pBrand}</p>
                </div>
              </div>

              <button
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Link to='*'>Buy Now</Link>
              </button>
            </div>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{pDescription}</p>
              </div>
            </div>

            <div >
              <div className="mt-4">
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;