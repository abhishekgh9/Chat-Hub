import React, { use } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux';
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';

const Messages = () => {
  useGetMessages();
  // Custom hook to get real-time messages
  useGetRealTimeMessage();
  const { messages } = useSelector((store) => store.message);
  if (!messages) return;


  return (

    <div className='flex-1 overflow-y-auto px-4 py-2'>
      {
        messages && messages?.map((message) => {
          return (
            <Message key={message._id} message={message} />
          )
        })
      }
      

    </div>
  )
}

export default Messages