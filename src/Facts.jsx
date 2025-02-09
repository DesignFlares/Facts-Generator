import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Facts = () => {
    const [fact, setFact] = useState('Loading...');
    const fetchFact=async()=>{
        try{
            const response= await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
            console.log(response.data);
            setFact(response.data.text);
        }
        catch(err){
            console.log(err);
        }
        };
    useEffect(()=>{
        fetchFact();
    },[]);
  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='bg-[#f8f8b0] max-w-[80vw] min-w-[50vw] h-[50vh] flex justify-center items-center border-4 border-[#132254] rounded-[30px]'>
     <p className='text-[30px] font-mono p-6'> {fact} </p>
    </div>
    <button className='flex justify-center items-center bg-[#132254] text-white font-bold font-mono p-2 rounded-[10px] mt-4' onClick={()=>fetchFact()}>
        
        Another Fact
    </button>
    </div>
  )
}

export default Facts
