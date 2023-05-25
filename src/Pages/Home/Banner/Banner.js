import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png'
import carosol1 from '../../../assets/images/carosol1.png'
import carosol2 from '../../../assets/images/carosol2.png'
import carosol3 from '../../../assets/images/carosol3.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-blue-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={carosol1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={carosol2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={carosol3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div>
                    <h1 className="text-5xl font-bold text-red-600">Note:</h1>
                    <p className="py-6 text-bold text-3xl text-red-500">01. All users are admins by default so that they can have all the access.</p>
                    <p className="py-6 text-bold text-3xl text-red-500">02. Only the admin have all the access. local user can not modify anything.</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;