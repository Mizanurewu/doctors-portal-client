import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModals from '../BookingModals/BookingModals';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);//appointment name and slots
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data));

    }, [])
    return (
        <section className='mt-16'>
            <p className='text-secondary text-2xl font-bold text-center'>You have selected :{format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment && //jodi treatment er man thake tahole dekhabo , noyto error khabo
                <BookingModals
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                ></BookingModals>
            }
        </section>
    );
};

export default AvailableAppointments;