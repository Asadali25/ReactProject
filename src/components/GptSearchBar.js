import React from 'react'
import { useSelector } from 'react-redux';
import { lan } from '../utils/languageConstants';

const GptSearchBar = () => {
    const preferedLan = useSelector((store)=> store.config.preferedLan)
  return (
    <div className='w-1/2 ' >
        <form className='bg-black  rounded-md text-red-700 grid grid-cols-12'>
            <input 
            type='text'
            placeholder={lan[preferedLan].gptInputPlaceholder}
            className='grid col-span-9 p-3 mx-4 my-8'
            />
            <button className='bg-red-700 text-white  p-4 grid col-span-3 my-auto mx-2 rounded-md  text-lg hover:bg-red-800' > 
            {lan[preferedLan].search}</button>
        </form>

    </div>
  )
}

export default GptSearchBar