import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaPlayCircle } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className='w-11/12 mx-auto p-3 lg:my-36 md:my-24'>
        <h1 className='text-3xl lg:text-6xl md:text-5xl uppercase font-light my-14'>Portfolio</h1>
        <div className='flex flex-row flex-wrap'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-1/2'>
                <div className='flex flex-column flex-wrap'>
                    <div className='mb-10'>
                        <Image src='/landing-page.png' width={700} height={500} className='p-4' alt='Image'/>
                        <div className="flex flex-row justify-around">
                            <Link href='https://github.com/askoti/landing-page' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaGithub fontSize={24} color='#fff'/></span><span>Code</span></Link>
                            <Link href='https://landing-page-23.netlify.app/' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaPlayCircle fontSize={24} color='#fff'/></span><span>Demo</span></Link>
                        </div>
                    </div>
                    <div>
                    <Image src='/ecommerce.png' width={700} height={500} className='p-4' alt='Image'/>
                    <div className="flex flex-row justify-around">
                            <Link href='https://github.com/askoti/ecommerce' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaGithub fontSize={24} color='#fff'/></span><span>Code</span></Link>
                            <Link href='https://ecommerce-23.netlify.app/' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaPlayCircle fontSize={24} color='#fff'/></span><span>Demo</span></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-1/2'>
            <div className='flex flex-column flex-wrap'>
                    <div className='mb-10'>
                        <Image src='/crypto.png' width={700} height={500} className='p-4' alt='Image'/>
                        <div className="flex flex-row justify-around">
                            <Link href='https://github.com/askoti/crypto' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaGithub fontSize={24} color='#fff'/></span><span>Code</span></Link>
                            <Link href='https://crypto-23.netlify.app/' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaPlayCircle fontSize={24} color='#fff'/></span><span>Demo</span></Link>
                        </div>
                    </div>
                    <div>
                    <Image src='/rickandmorty.png' width={700} height={500} className='p-4' alt='Image'/>
                    <div className="flex flex-row justify-around">
                            <Link href='https://github.com/askoti/rickandmorty' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaGithub fontSize={24} color='#fff'/></span><span>Code</span></Link>
                            <Link href='https://rickandmorty-23.netlify.app/' className='flex flex-row justify-between py-2 px-4 rounded'><span className='mr-2'><FaPlayCircle fontSize={24} color='#fff'/></span><span>Demo</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
