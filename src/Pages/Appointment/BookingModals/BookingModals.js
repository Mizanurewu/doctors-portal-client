import { format } from 'date-fns';
import React from 'react';
import { Form } from 'react-router-dom';

const BookingModals = ({ treatment, selectedDate, setTreatment }) => {
    const { name,slots } = treatment;
    const date = format(selectedDate, 'PP');
    const haneleBooking=(event)=>{
        event.preventDefault();
        const form=event.target;
        const slot=form.slot.value;
        const name=form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const booking={
            appointmentDate:date,
            treatment:name,
            patient:name,
            slot,
            email,
            phone
        }
        console.log(booking);
        setTreatment(null);
        // TODO: send data to server and save
        // close modal and show successfull tast

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <Form onSubmit={haneleBooking} className='grid gap-7 grid-cols-1 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full ">
                            {
                                slots.map((slot,index)=><option  key={index} value={slot} >{slot}</option>)
                            }
                        </select>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered w-full " />
                        <input name="phone" type="text" placeholder="Phone" className="input input-bordered w-full " />
                        <input name="email" type="text" placeholder="Email" className="input input-bordered w-full " />
                        <input className='btn btn-accent w-full' type="submit" value="submit" />
                    </Form>
                </div>
            </div>

        </>
    );
};

export default BookingModals;