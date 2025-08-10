import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {

    const dispatch=useDispatch();

    const {selectedUser,onlineUsers}=useSelector((store) => store.user);

    const isOnline = onlineUsers?.includes(user?._id);
    
    const selectedUserHandler = (user) => {
        // console.log("Selected User:", user);
        dispatch(setSelectedUser(user) );
    }
    return (
        <>
            <div  onClick={()=>selectedUserHandler(user)} className={` ${selectedUser?._id===user?._id? 'bg-zinc-200 text-zinc-800' : ''} flex gap-2 items-center text-white hover:bg-zinc-200 hover:text-zinc-800 rounded p-2 cursor-pointer`}>

                <div className={`avatar ${isOnline ? 'avatar-online ' : ''}`}>
                    <div className='w-12 rounded-full'>
                        <img src={user?.profilePhoto} alt="user-profile" />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between items-centergap-2 flex-1'>
                        <p>{user?.fullName}</p>
                    </div>
                </div>

            </div>

            <div className='divider my-0 py-0 h-1'></div>

        </>
    )
}

export default OtherUser