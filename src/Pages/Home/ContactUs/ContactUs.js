import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div class="grid justify-items-center" style={{ background: `url(${appointment})` }}>
            <div >
                <input type="text" placeholder="Type here" className="input input-bordered input-primary" />
            </div>
            <div className='max-w-3xl'>
                <input type="text" placeholder="Type here" className="input input-lg input-bordered input-primary " />
            </div>
            <div >
                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xl" ></textarea>
            </div>


        </div>
    );
};

export default ContactUs;