import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../assets/images/chair.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='chair' />
                <div>
                    <h1 className="text-5xl font-bold text-red-600">Note:</h1>
                    <p className="py-6 text-bold text-3xl text-red-500">01. All users are admins by default so that they can have all access.</p>
                    <p className="py-6 text-bold text-3xl text-red-500">02. Only admin have all the access. local user can not modified anything.</p>
                    <PrimaryButton><Link to='/appointment'>Getting Started</Link></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;