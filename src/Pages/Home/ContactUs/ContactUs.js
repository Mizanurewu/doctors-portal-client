import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="grid justify-items-center " style={{ background: `url(${appointment})` }}>
            <div className='m-20' >
                <div className='mb-8 content-center '>
                    <h2 className='text-2xl font-bold text-primary text-center'>Contact Us</h2>
                    <h2 className='text-5xl font-bold text-white '>Stay connected with us</h2>

                </div>
                <div className='grid gap-5' >
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-3/4" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-3/4" />

                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg  w-3/4" ></textarea>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;