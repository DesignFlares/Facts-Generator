import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Todayfact = () => {
    const [fod, setFod] = useState('Loading...');
    useEffect(() => {
        const today = new Date();
        const month = today.getMonth() + 1; 
        const day = today.getDate();
    
        const fetchFod = async () => {
          try {
            const response = await axios.get(`http://numbersapi.com/${month}/${day}/date?json`);
            setFod(response.data.text);
          } catch (err) {
            console.log(err);
            setFod('Failed to load today’s fact');
          }
        };
    
        fetchFod();
      }, []);
  return (
    <div className='flex justify-center flex-col p-6'>
      <h2 className='font-semibold text-[20px] ml-[7.2rem] '>Today's Fact:</h2>
     <p  className='text-[20px] flex justify-center pl-4'>{fod}</p>
    </div>
  )
}

export default Todayfact
