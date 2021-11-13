import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur =(e)=>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            alert('Successfully Added')
            setEmail('')
        })
        e.preventDefault()
    }
    return (
        <div className='m-auto mt-16'>
            <h1 className=' text-center text-2xl font-bold'>Make an Admin</h1>

            <div className=' min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-sm w-full space-y-8'>
            <form onSubmit={handleAdminSubmit}>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onBlur={handleOnBlur}
                  type='email'
                  name='email'
                  required
                  className="rounded-md appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
            <div>
              <button
                type="submit"
                className="mt-2 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Make Admin
              </button>
            </div>
            </form>
            </div>
            </div>
            
        </div>
    );
};

export default MakeAdmin;