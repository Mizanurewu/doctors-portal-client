import React from 'react';

const Review = ({ review }) => {
    const { name, img, location, reviews } = review;
    return (
        <div className="card shadow-lg border-2 border-orange-600 mt-4 hover:scale-105 transition-transform">
            <div className="card-body">

                <p>{reviews}</p>
                <div className="flex items-center mt-6 ">
                    <div className="avatar mr-6">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="img" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-lg'>{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;