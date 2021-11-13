
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Register.css'


const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
  const handleLoginSubmit = e => {
      registerUser(loginData.email, loginData.password, loginData.name, loginData.name, history);
      // console.log(loginData)
      e.preventDefault();


  }
  return (
    <>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      { !isLoading && <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please Sign up</h2>
            
          </div>
          <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6" >
             
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Name
                </label>
                <input
                  name='name'
                  type='name'
                  required
                  onBlur={handleOnBlur}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  required
                  onBlur={handleOnBlur}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onBlur={handleOnBlur}
                  type='password' 
                  name='password'
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            {user?.email && <p className='text-green-500'>Successfully Created Account</p>}
            {authError && <p className='text-red-500'>{authError}</p>}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>

          </form>

          <div><h2 className='button-down-lin'><span>Or continue with</span></h2></div>
          <div className='flex'>
                <div className='flex-grow mr-2'>
                <button  className="text-xl group relative w-full flex justify-center py-2 px-4 border border-4 text-sm font-bold rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i className="fab fa-google items-center text-xl mr-1 text-yellow-300"></i>Google</button>
                </div>
                <div className='flex-grow ml-2'>
                <button className=" text-xl group relative w-full flex justify-center py-2 px-4 border border-4 text-sm font-bold rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i className="fab fa-facebook items-center text-xl mr-1 text-blue-700 "></i>Facebook</button>
                </div>
          </div>
          <Link to='/login' className=" relative w-full flex justify-center border border-transparent text-sm font-medium rounded-md text-black ">Already Registered? <span className='text-blue-700'>Login</span></Link>
        </div>}
        {isLoading && <div className="spinner icon-spinner-5" aria-hidden="true"></div>}

      </div>
    </>
  )
}
export default Register;