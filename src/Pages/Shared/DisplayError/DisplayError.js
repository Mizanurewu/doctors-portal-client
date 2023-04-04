import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut}=useContext(AuthContext);
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));

    }
    return (
        <div>
            <p className='text-4xl'>Something went Wrong</p>
            <p className='text-4xl'>{error.statusText || error.message}</p>
            <h3 className='text-2xl'>Please <button onClick={handleLogOut}>Sign Out</button>and LogIn again</h3>
        </div>
    );
};

export default DisplayError;