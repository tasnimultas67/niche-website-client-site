import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Product/Product';



  
const Products = () => {
    const [products, setProducts] = useState([]);
    const {isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
            });
    }, [])
    return (
        <div className=''>
            <div className='lg:bg-indigo-700  md:h-20 lg:h-24 w-full mt-3 overflow-hidden '>
            <h1 className='text-3xl text-left ml-5 font-semibold lg:text-white text-black lg:mt-5 w-full'>Our <span className='font-bold text-indigo-700 lg:text-white md:text-white'>product</span></h1>
            </div>
            <div className="m-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto ">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;