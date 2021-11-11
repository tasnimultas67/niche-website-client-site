
import { LockClosedIcon } from '@heroicons/react/solid'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';


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
      
      registerUser(loginData.email, loginData.password, loginData.name, history);
      console.log(loginData)
      e.preventDefault();


  }
    // const onSubmit = data =>{
    //     console.log(data);
        
    //    }

  return (
    <>

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Please Sign up</h2>
            
          </div>
          { !isLoading && <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6" >
             
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
                  placeholder="Name"
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

          </form>}
          {isLoading && <button type="button" className="bg-rose-600 ..." >
              <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
              
              </svg>
              Processing
            </button>}

          <Link to='/login' className=" relative w-full flex justify-center border border-transparent text-sm font-medium rounded-md text-black ">Already Registered? Login</Link>
        </div>
      </div>
    </>
  )
}
export default Register;