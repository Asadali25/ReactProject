import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lan } from '../utils/languageConstants';
import { API_OPTIONS } from '../utils/constants';
import { addMoviesByPerson, clearMoviesByPerson } from '../utils/movieSlice';
import ShimmerUI from './ShimmerUI';
import ApiSuggestions from './ApiSuggestions';

const ApiSearchBar = () => {
  const [inputvalue ,setInputVal] = useState('');
  const [shimmerbool ,setShimmerBool] = useState(false);
  const [noData , setNoData] =useState(false)
  const dispatch = useDispatch()
    const preferedLan = useSelector((store)=> store.config.preferedLan);

    const handleapiSearch = ()=>{
      setShimmerBool(true);
        setTimeout(async() => {
          const personTextRef= inputvalue;
          const data = await fetch(`https://api.themoviedb.org/3/search/person?query=${personTextRef}&include_adult=false&page=1`,
          API_OPTIONS
          );
          const json = await data.json();
          dispatch(addMoviesByPerson(json?.results));
          json?.results.length===0 &&setNoData(true)
          await setShimmerBool(false);

        }, 500);
    }

    const handleClear =()=>{
      setNoData(false);
      setInputVal('');
       dispatch(clearMoviesByPerson());
    }
    
    const isShimmer = shimmerbool ? <div className='flex justify-center' ><ShimmerUI /></div> :''
  return (
    <div className='w-1/2  bg-black text-white bg-opacity-60 rounded-md shadow-md' >
        <form className=' rounded-md text-red-700 grid grid-cols-12' onSubmit={(e)=> e.preventDefault()} >
            <input 
            value={inputvalue}
            type='text'
            placeholder={lan[preferedLan].apiInputPlaceholder}
            className='grid col-span-9 p-3 mx-4 my-3 rounded-md'
            onChange={(e)=> setInputVal(e?.target?.value)}
            />
            {inputvalue &&<div className='absolute pt-6 ml-[35%] cursor-pointer' onClick={handleClear}> ✖️ </div>}
            
            <button className='bg-red-700 text-white  p-3 grid col-span-3 my-auto mx-2 rounded-md  text-lg hover:bg-red-800' 
            onClick={handleapiSearch}
            > 
            {lan[preferedLan].search}</button>
            
        </form>
        {isShimmer}
        <ApiSuggestions />
        
       { noData &&
      <div className='text-white text-lg flex justify-center  my-5'> 
                        No Results Found 😕

      </div>

       }
        
       
    </div>
  )
}

export default ApiSearchBar