import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState('');
    const { signIn } = useContext(AuthContext);

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true});

            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            });
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='text'
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 character long' }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password ?</span> </label>
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create a new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline uppercase w-full'>Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;