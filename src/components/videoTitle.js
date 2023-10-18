import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-6xl  font-bold'>{title}</h1>
        <p className='text-lg w-1/4'>{overview} </p>
        <button className='bg-white  rounded-lg mt-4 text-black text-lg py-2 px-4 w-28  hover:bg-opacity-80  h-12 '> ▶️ Play</button>
        <button className='bg-gray-500 bg-opacity-50 rounded-lg mt-4 text-white text-lg mx-2 py-2 w-28 h-12'>!More Info</button>
        

    </div>
  )
}

export default VideoTitle