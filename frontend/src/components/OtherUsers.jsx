import React from 'react'
import OtherUser from './OtherUser'
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    // Custom hook to fetch other users
    useGetOtherUsers();

    const { otherUsers } = useSelector((store) => store.user);

    if (!otherUsers) return; //early return if otherUsers is null
    //otherwise run a map function to display each user


    return (
        <div className='overflow-y-auto h-[400px]'>
            {
                otherUsers?.map((user) => {
                    return (
                        <OtherUser key={user._id} user={user} />
                    )
                })
            }
            

        </div>
    )
}

export default OtherUsers