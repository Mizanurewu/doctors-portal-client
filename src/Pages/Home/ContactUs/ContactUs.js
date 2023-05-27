import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="grid justify-items-center " >
            <div className='m-20 border-2  p-10 rounded-2xl border-orange-600' >
                <div className='mb-8 content-center '>
                    <h2 className='text-5xl font-bold text-white '>Stay connected with us</h2>

                </div>
                <div className='grid gap-5' >
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-11/12" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-11/12" />

                    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg  w-11/12" ></textarea>
                </div>
                <input className='btn w-11/12 mt-6 bg-orange-600 hover:scale-105 transition-transform' type="button" value="Submit" />
            </div>
        </div>
    );
};

export default ContactUs;