import React from 'react'

export default function Contact() {
  return (
    <div className='w-11/12 p-3 mx-auto lg:mt-52 md:mt-32' id='contact'>
        <div>
            <h1 className='lg:text-3xl md:text-2xl text-xl uppercase font-light text-center lg:mt-40 md:mt-28 mt-16'>You have your qusetion?</h1>
            <p className='lg:text-xl md:text-md text-sm font-light text-center mt-3'>Leave a request and I will contact you</p>
            <div className='flex flex-col justify-center lg:my-10 md:my-8 my-4'>
            <input className='block border p-2 lg:w-1/3 w-2/3 mx-auto my-5 h-16' type="text" placeholder='Email' inputMode='email' required/>
            <input className='border p-2 lg:w-1/3 w-2/3 mx-auto h-16 my-5' type="number" placeholder='Phone' inputMode='tel' required/>
            <textarea className='border p-2 lg:w-1/3 w-2/3 mx-auto h-40 my-5' placeholder='Message' required/>
            <button type="submit" className='bg-white text-black p-2 lg:w-1/6 md:w-2/6 w-2/5  mx-auto h-16 my-5 rounded uppercase'>Submit</button>
            </div>
        </div>
    </div>
  )
}
