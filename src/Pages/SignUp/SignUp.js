import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser,updateUser}=useContext(AuthContext);
    const [signUpError,setSignUpError]=useState();
    const navigate=useNavigate();
    const handleSignUp = data => {
        setSignUpError('');
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            
            toast('User Created Successfully');
            console.log(user);
            const userInfo={
                displayName:data.name
            }
            updateUser(userInfo)
            .then(()=>{
                navigate('/');

            })
            .catch(err=>console.log(err))

        })
        .catch(error=>{
            console.error(error);
            setSignUpError(error.message);
        });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
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
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password'
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 character long' },
                                // value: /(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}/,message:'Password must be strong' 
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}

                    </div>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;