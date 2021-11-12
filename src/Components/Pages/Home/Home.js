import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const MAX_LENGTH = 80;
const MAX_NAME_LENGTH = 35;

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
        });
}, [])

const sliceProduct = products.slice(0,6);
console.log(sliceProduct)

    return (
        <div>
          {/* Top Banner section */}
          <div className="relative top-banner  overflow-hidden 	 ">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 m-auto">
          <main className="mt-10 mx-auto max-w-7xl h-100 md:h-full px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 banner-text ">
            <div className="text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline text-white">Data to enrich your</span>{' '}
                <span className="block text-white xl:inline">online business</span>
              </h1>
              <p className="mt-3 text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                fugiat veniam occaecat fugiat aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
                <div className="rounded-md shadow">
                  <Link to='/products'
                    className="w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 md:py-4 md:text-lg md:px-10 "
                  >
                    Explore Products
                  </Link>
                </div>
                
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>

        {/* Offer Section */}

        <div>
        <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to='*'
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to='*'
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* New Helmates Collection */}
        <div>
        <div className="relative bg-white overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              
Popular Brands of Full Face Sportbike Helmets
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Below are some of the most popular full face sportbike helmets we carry at our store. For more information or questions concerning any of our styles or brands, Please give us a call at 1-800-630-6434.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                        <img
                          src="https://m.media-amazon.com/images/I/41Jh8QU6wqL.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/I/61PXPEdaSKL._SL1100_.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/I/81bDj7mF8zL._SL1500_.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/I/51ILIabdi3L.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/I/81bDj7mF8zL._SL1500_.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/I/61CXvbuCEfL._SL1100_.jpg"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="w-44 h-64 rounded-lg overflow-hidden">
                        <img
                          src="https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/A21TJRUUN4KGV/AHXTPWY14UPXE/c398a41f-7393-49d3-bb81-bb1e0ce73adb._CR0,0,300,300_PT0_SX300__.png"
                          alt=""
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to='/products'
                className="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700"
              >
                See Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

        {/* new collection */}
        <div>
        <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 md:space-y-0 lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid md:gap-x-4 lg:gap-x-6">
            {sliceProduct.map((product) => (
              <div key={product.pName} className="group relative mb-5">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={product.pImg1}
                    alt=''
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 font-semibold text-gray-900">
                  <Link to={`/productdetails/${product._id}`}>
                    <span className="absolute inset-0" />
                    {product.pName.length > MAX_NAME_LENGTH &&
                      <span> {`${product.pName.substring(0, MAX_NAME_LENGTH)}...`}</span>
                    }
                  </Link>
                </h3>
                <p className="text-base  text-gray-500">{product.pDescription.length > MAX_LENGTH &&
                      (
                        <div>
                          {`${product.pDescription.substring(0, MAX_LENGTH)}...`}
                          <Link className='text-blue-700' to={`/productDetails/${product._id}`}><button>Read more</button></Link>
                        </div>
                      )
                    }</p>
              </div>
            ))}
          </div>
          <div className='mt-10 text-center'>
          <Link to='/products' className='inline-block  bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700'>See More</Link>
          </div>
        </div>
      </div>
    </div>
        </div>

{/* Additiona */}
          <div>
          <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used to archive important task lists.
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://m.media-amazon.com/images/I/41Jh8QU6wqL.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://m.media-amazon.com/images/I/61PXPEdaSKL._SL1100_.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://m.media-amazon.com/images/I/51ILIabdi3L.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="bg-gray-100 rounded-lg"
          />
          <img
            src="https://m.media-amazon.com/images/I/61CXvbuCEfL._SL1100_.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="bg-gray-100 rounded-lg"
          />
        </div>
      </div>
    </div>
          </div>

          <div className='w-full m-auto bg-cover  mb-10'>
                <img className=' m-auto' src="https://m.media-amazon.com/images/S/aplus-media/sc/f6daa84b-70d0-4a5c-a481-96f7e0b4dd9b.__CR0,0,970,300_PT0_SX970_V1___.png" alt="" />
            </div>

        </div>
    );
};

export default Home;