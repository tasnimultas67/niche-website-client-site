import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {  ChevronDownIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const navigation = [
  { name: 'Home', to: '/home', current: false },
  { name: 'Products', to: '/products', current: false },
  { name: 'About us', to: '/aboutus', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar =()=> {
  const {user, logout} = useAuth()
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="">
                    <p className="block lg:hidden h-8 w-auto font-medium text-white text-1xl"><Link to='/'>HelmatesBD</Link></p>
                    <p className="hidden lg:block h-8 w-auto text-white font-medium text-2xl"><Link to='/'>HelmatesBD</Link></p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                   
                    {user?.email &&<Menu as="div" className="relative inline-block text-left z-40">
      <div>
        <Menu.Button className="inline-flex justify-center w-full text-gray-300 hover:bg-gray-700 hover:text-white shadow-sm px-4 py-2 text-sm font-medium rounded-md ">
          Dashboad
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to='/addProduct'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add Product
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/manageProducts'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Manage Products
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='*'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add Review
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>}

    {!user.email && <Link className=' text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium' to='/register'>Sign up</Link>}
               {!user.email && <Link className='text-gray-300 hover:bg-gray-700 hover:text-white
                          px-3 py-2 rounded-md text-sm font-medium' to='/login'>Log in</Link>}
                  </div>
                </div>
              </div>
              

              {/* user Profile */}
              {user?.email && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                <Menu as="div" className="ml-3 relative z-40">
                  <div>
                  <p className='block px-4 py-2 text-sm text-gray-700'>{user?.name}</p>

                    <Menu.Button className="text-center bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                      
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="*"
                            className={classNames(active ? 'bg-gray-100' : '', 'text-center block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="*"
                            className={classNames(active ? 'bg-gray-100' : '', 'text-center block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <p onClick={logout}
                            className={classNames(active ? 'bg-gray-100' : '', 'text-center block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                          >
                            Sign out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            }
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden text-center">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (

                <Disclosure.Button
                   key={item.name}
                  as="Link"
                  to={item.to}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium cursor-pointer'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  >
                  <Link to={item.to}>{item.name}</Link>

                  
                </Disclosure.Button>
              ))}
              
              <Disclosure.Button>
              <Menu as="div" className="relative inline-block  z-40">
      <div>
        <Menu.Button className=" m-auto inline-flex justify-center w-full text-gray-300 hover:bg-gray-700 hover:text-white shadow-sm px-4 py-2 text-sm font-medium rounded-md ">
          Dashboad
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>

      </div>
      <div>
        {/* <Menu.Item className="inline-flex justify-center w-full text-gray-300 hover:bg-gray-700 hover:text-white shadow-sm px-4 py-2 text-sm font-medium rounded-md ">
          Sign up
          
        </Menu.Item> */}

      </div>

      

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-center">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link to='/addProduct'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add Product
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/manageProducts'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Manage Products
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='*'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add Review
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
              </Disclosure.Button> 
              
               {!user.email && <Link className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-center rounded-md text-base font-medium cursor-pointer' to='/register'>Sign up</Link>}
               {!user.email && <Link className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-center rounded-md text-base font-medium cursor-pointer' to='/login'>Log in</Link>}
              
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;