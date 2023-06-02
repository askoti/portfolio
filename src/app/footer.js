import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='w-full flex flex-col justify-center mt-40 py-20 bg-orange-300'>
        <ul className='flex flex-row flex-wrap justify-evenly my-3 bg-transparent'>
            <li className='bg-transparent font-semibold '><Link href='' className='bg-transparent'>About me</Link></li>
            <li className='bg-transparent font-semibold '><Link href='' className='bg-transparent'>Portfolio</Link></li>
            <li className='bg-transparent font-semibold '><Link href='' className='bg-transparent'>Feedback</Link></li>
            <li className='bg-transparent font-semibold '><Link href='' className='bg-transparent'>Contact</Link></li>
        </ul>
        <ul className='flex flex-row justify-center my-3 bg-transparent'>
            <li className=' cursor-pointer bg-transparent font-semibold lg:mx-10 md:mx-10 sm:mx-10 mx-5'>Email: kastriootaliiu@gmail.com</li>
            <li className='cursor-pointer bg-transparent font-semibold lg:mx-10'>Phone: +38345396947</li>
        </ul>
    </div>
  )
}
