import React from 'react'
import { MdOutlineClose } from "react-icons/md";

function Policy({onClose}){
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <button onClick={onClose} className='place-self-end'><MdOutlineClose /></button>
            <div className='bg-indigo-600 rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4'>
                <h1 className='text-3xl font-extrabold'>Reschedule Policy</h1>
                <p className='text-3xl font-bold max-w-md text-center'>How can your customers initiate a reschedule</p>
                <input 
                  id='' 
                  type='text' 
                  placeholder='write here' 
                  required
                  className='w-full px-4 py-3 text-black border-gray-300 rounded-md'
                />
                <button className='mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black'>Submit</button>
            </div>
        </div>
    </div>
  );
}

export default Policy;
