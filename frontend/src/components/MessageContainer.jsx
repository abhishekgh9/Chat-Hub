import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const MessageContainer = () => {

    const { selectedUser,onlineUsers } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const { authUser } = useSelector((store) => store.user);

    // useEffect(() => {
    //     return () => dispatch(setSelectedUser(null)); // Clear selected user when component unmounts
    // }, []);

    const isOnline = onlineUsers?.includes(selectedUser?._id);

    return (
        <>
            {
                selectedUser!==null ? (
                    <div className='md:min-w-[500px] flex flex-col '>
                        <div className='flex gap-2 items-center   px-4 py-2 mb-2 border border-slate-500 rounded-lg bg-slate-800 text-white'>

                            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                                <div className='w-12 rounded-full'>
                                    <img src={selectedUser?.profilePhoto} alt="user-profile" />
                                </div>
                            </div>

                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between items-centergap-2 flex-1'>
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>

                        </div>

                        <Messages />
                        <SendInput />

                    </div>
                ) : (
                    //style this better 
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi,{authUser?.fullName} </h1>
                        <h1 className='text-2xl text-white'>Let's start conversation</h1>

                    </div>
                    
                )
        }
        </>

    )
}

export default MessageContainer