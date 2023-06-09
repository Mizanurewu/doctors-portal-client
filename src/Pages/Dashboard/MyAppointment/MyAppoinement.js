import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);
    const url = `https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/bookings?email=${user?.email}`;
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        // queryFn: async()=>{
        //     const res=await fetch(url);
        //     const data=await res.json();// another away
        //     console.log(data)
        //     return data;
        // }
        queryFn: () => fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    })

    return (
        <div>
            <h3 className='text-3xl'>My Appointment</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) =>
                                <tr key={booking._id}>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid && <Link
                                                to={`/dashboard/payment/${booking._id}`}>
                                                <button
                                                    className='btn btn-primary'
                                                >Pay</button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid && <span className='text-primary'>Paid</span>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;