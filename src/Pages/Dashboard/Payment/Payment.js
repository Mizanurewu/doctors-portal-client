import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking =useLoaderData();
    console.log(booking)
    const {treatment,price, appointmentDate, slot}=booking;
    return (
        <div>
            <h4>Payment for {booking.treatment}</h4>
            <h4>Please pay <strong>$ {price}</strong> for your appointment on {appointmentDate} time {slot}</h4>
        </div>
    );
};

export default Payment;