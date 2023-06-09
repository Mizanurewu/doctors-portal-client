import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/users')
            .then(res => res.json())
        // .then(data=>console.log(data))
        
    })
    const handleMakeAdmin = (id) => {
        fetch(`https://doctors-portal-server-git-main-mizanurewu-gmailcom.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successful');
                    refetch();
                }
                console.log(data)
            })

    }
    
    return (
        <div>
            <h4>all users</h4>
            {
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th></th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                    <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                    
                
                </div>
            }
        {/* //write a modal for react */}

            
        </div>
    );
};

export default AllUsers;