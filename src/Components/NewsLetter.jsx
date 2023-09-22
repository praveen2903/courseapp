import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-[20px] md:text-[40px] font-bold text-white '>Want to learn skills</h1>
                <span className='text-white'>signup to our newsletter and stay upto date.</span>
            </div>
            <div className='m-2'>
                <input type='text' className='sm:w-full p-3 mr-2 text-slate-600 rounded' placeholder=" Enter Email"/>
                <button className='bg-black text-white p-3 rounded'>Get Started</button>
                <br/>
                <p className='text-white'>
                    We care about the protection of your data.Read our<br/><a href="https://policies.google.com/privacy?hl=en" className='text-black'>privacy policy</a>
                </p>
            </div>
            
        </div>
    </div>
  )
}
