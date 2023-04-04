import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {

    const imageHostKey = process.env.React_APP_imgbb_key;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const nagivate = useNavigate();
    const handleAddDoctor = data => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url

                    }
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged) {
                                toast.success(`Doctor ${doctor.name} added successfully`);
                                nagivate('/dashboard/managedoctors');
                            }
                        })
                }
            })

    }

    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: () => fetch('http://localhost:5000/appointmentSpecialty')
            .then(res => res.json())

    })
    if (isLoading) {
        return <Loading />
    }


    return (
        <div className='w-96'>
            <h1>Add Doctor</h1>
            <form onSubmit={handleSubmit(handleAddDoctor)} >
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Name</span> </label>
                    <input type='text'
                        {...register("name", { required: 'Name is required' })}
                        className="input input-bordered w-full " />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Email</span> </label>
                    <input type='email'
                        {...register("email", {
                            required: "Email is required ",

                        })}
                        className="input input-bordered w-full " />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}

                </div>

                <div>
                    <label className="label"> <span className="label-text">Specialty</span> </label>

                    <select
                        {...register('specialty')}
                        className="select input-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }



                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label"> <span className="label-text">Photo</span> </label>
                    <input type='file'
                        {...register("image", { required: 'Photo is required' })}
                        className="input input-bordered w-full " />
                    {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-accent w-full' value='Add Doctor' type="submit" />
                {/* {signUpError && <p className='text-red-500'>{signUpError}</p>} */}
            </form>

        </div>
    );
};

export default AddDoctor;