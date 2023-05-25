import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const AllService = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card bg-[#555656] text-yellow-50 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

            </div>
            <div className='text-center pb-3'>
                {/* <PrimaryButton className='bg-slate-300'>Get Started</PrimaryButton> */}
                {/* <input className='btn bg-slate-700 text-white' type="button" value="GET STARTED" /> */}
                <Link className='btn bg-slate-700 text-white' to='/appointment'>GET STARTED</Link>
            </div>
        </div>
    );
};

export default AllService;