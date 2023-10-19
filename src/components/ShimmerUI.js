import React from 'react'

const ShimmerUI = () => {
    const  array =[1,2,3,4,5 ,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className='flex flex-wrap ml-4'>

     {array.map((i)=>(
        <div>
            <div key ={i.key} className='mx-3 px-3 w-40 h-60 my-2 rounded-md animate-pulse  bg-gray-700 bg-opacity-70'>
    </div>
        </div>

   )) 
}   
  

    </div>
  )
}
  

export default ShimmerUI