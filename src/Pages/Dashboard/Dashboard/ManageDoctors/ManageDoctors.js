import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] =useState(null);
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            } catch (error) {

            }
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const closeModal=()=>{
        setDeletingDoctor(null);
    }
    const handleDeleteDoctor=doctor=>{
        fetch(`https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/doctors/${doctor._id}`,{
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                toast.success(`Dr. ${doctor.name} deleted successfully`);
                refetch();
            }
        })

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td> <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-warning">Delete</label></td>
                               
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
               
                title={`Are you sure you want to delete`}
                message={`If you delete Dr. ${deletingDoctor.name} it can not be recover`}
                successButtonName="Delete"
                successAction={handleDeleteDoctor}
                modalData={deletingDoctor}
                closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;