import React from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'

const HomePage = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default HomePage