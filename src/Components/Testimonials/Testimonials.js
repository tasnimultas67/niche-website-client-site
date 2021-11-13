import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch('https://hidden-falls-85514.herokuapp.com/allreviews')
            .then(res => res.json())
            .then(data => {
            //   console.log(data)
                setReviews(data);
            });
    }, [])



    return (
        <div>
<div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
    <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto mb-10">
                <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br/>are saying.</h1>
                
            </div>
            <div className="-mx-3 items-center">
                <div className="px-3 m-auto mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 container m-auto mb-5 ">

                    {reviews.map((review)=> (
                        <div key={review._id} className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">


                            <div className="mb-3 text-center bg-gray-800 w-10 h-10 overflow-hidden rounded-full border border-gray-200">
                            {review.img === 'null' && <i className="fas fa-user-circle text-white text-3xl"></i>}

                            {/* <div className="overflow-hidden rounded-full bg-gray-500 border border-gray-200"> */}
                            <div>{review?.img && <img
                        className="h-9 w-9 rounded-full"
                        src={review?.img}
                        alt=""
                      />}</div>
                            </div>

                            
                            <div className="flex-grow pl-3">
                                <h6 className="font-bold text-sm uppercase text-gray-600">{review.name}</h6>
                            </div>
                        </div>
                        <div className="w-full">
                            <p className="text-lg font-medium leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{review.rDescription}<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    );
};

export default Testimonials;