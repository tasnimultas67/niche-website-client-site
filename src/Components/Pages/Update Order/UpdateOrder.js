import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';




const UpdateOrder = () => {
    const [updateOrder, setUpdateOrder] = useState({})
    const {id}=useParams();

    useEffect(()=>{
        const url =`https://hidden-falls-85514.herokuapp.com/manageOrders/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUpdateOrder(data))
    },[id])

    //update status
    const handleUpdateOrder = e =>{
        const url =`https://hidden-falls-85514.herokuapp.com/manageorders/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateOrder)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Updated Successfully');
                setUpdateOrder({});
            }
            // console.log(data)
        })
        e.preventDefault()
      }
      const handleStatus = e =>{
          const updateStatus = e.target.value;
        //   console.log(updateStatus)
          const updatedStaus = {status:updateStatus}
          setUpdateOrder(updatedStaus);
      }

    return (
        <div className="max-w-md w-full m-auto my-20">
            <h2>Now status: {updateOrder?.status || ""}</h2>
            <form onSubmit={handleUpdateOrder} >
            <input className='border-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ' onChange={handleStatus} type="text" placeholder='Status'/>
            <input className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default UpdateOrder;