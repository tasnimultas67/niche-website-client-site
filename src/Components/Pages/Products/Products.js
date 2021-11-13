import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Product from '../Product/Product';
import './Products.css'



  
const Products = () => {
    const [products, setProducts] = useState([]);
    const {isLoading } = useAuth();

    useEffect(() => {
        fetch('https://hidden-falls-85514.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [])
    return (
        <div className='items-center justify-center m-auto'>
            
            <div className='w-full m-auto bg-cover mt-10'>
                <img className=' m-auto' src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/AHXTPWY14UPXE/f8e2f061-8203-479a-bcae-90b090cffbb6._CR0,0,970,300_PT0_SX970__.jpg" alt="" />
            </div>
        {!isLoading && <div className="m-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto mb-5">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>}
            {isLoading && <div className="spinner icon-spinner-5 m-auto" aria-hidden="true"></div>}


        </div>
    );
};

export default Products;