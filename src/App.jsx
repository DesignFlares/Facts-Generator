import React from 'react'
import Facts from './Facts'
import Todayfact from './Todayfact'

function App() {
  return (
    <div className='bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-30 w-screen h-screen '>
      <h1 className='text-[50px] text-[#132254] font-bold font-mono flex justify-center pt-5'>Random Facts</h1>
      <div className="main flex justify-center flex-col">
       
        <Todayfact/>
        <Facts/>
      </div>
    </div>
  )
}

export default App
