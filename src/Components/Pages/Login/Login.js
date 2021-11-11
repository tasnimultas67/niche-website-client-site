
import { LockClosedIcon, } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react';


const Login = () => {
    const [loginData, setLoginData] = useState({});


    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }

  const handleLoginSubmit = e => {
      
    // registerUser(loginData.email, loginData.password, loginData.name, history);
    console.log(loginData)
    e.preventDefault();

}

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-sm w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            
          </div>
          <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6" >
            
            <div className="rounded-md shadow-sm -space-y-px">
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

 

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>
          </form>
          <div><h2 className='button-down-lin'><span>Or continue with</span></h2></div>
          <div className='flex'>
                <div className='flex-grow mr-2'>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i className="fab fa-google text-1xl"></i></button>
                </div>
                <div className='flex-grow ml-2'>
                <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i className="fab fa-facebook text-1xl"></i></button>
                </div>
          </div>
         
          <Link to='/register' className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black ">New user? Create Account</Link>
        </div>
      </div>
    </>
  )
}
export default Login;