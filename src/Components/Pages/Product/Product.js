import React  from 'react';
import { Link } from 'react-router-dom';


const MAX_LENGTH = 140;
const MAX_NAME_LENGTH = 80;

const Product = ({product}) => {
  const {_id, pName, pImg1, pImg2, pImg3, pPrice, pSize, pBrand, pColor, pDescription} = product;
    return (
        <div>
            <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden border-2">
            <img className="w-full h-full group-hover:opacity-75 object-center object-cover lg:w-full lg:h-60  md:h-50" src={pImg1} alt="" />
            <div className="mt-4 mx-3">
                <div>
                  <div className="text-md font-bold text-justify">
                  {pName.length > MAX_NAME_LENGTH ?
                      (
                        <div className=''>
                          {`${pName.substring(0, MAX_NAME_LENGTH)}...`}
                        </div>
                      ) :
                      <p className='' > {pName}</p>
                    }
                  </div>
                  <p className="text-sm  text-gray-900"><b>Price:</b> ${pPrice}</p>
                  <p className="text-sm  text-gray-900"><b>Color:</b> {pColor}</p>

                  <p className='text-left text-sm font-bold text-gray-900 mt-3'>Short Description</p>
                  <div className='text-sm mb-2 text-gray-700 font-medium  '>
                        {pDescription.length > MAX_LENGTH ?
                      (
                        <div>
                          {`${pDescription.substring(0, MAX_LENGTH)}...`}
                          <Link className='text-blue-700' to={`/productDetails/${_id}`}><button>Read more</button></Link>
                        </div>
                      ) :
                      <p className='' > {pDescription}</p>
                    }
                  </div>
                </div>
              </div>
                {/* Button */}
              <div>
                <Link to={`/productdetails/${_id}`}>
                  <button className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>View this Menu</button>
                </Link>
              </div>
        </div>
        </div>
        </div>
    
    )
}

export default Product;