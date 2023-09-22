import React from 'react'
import laptop from '../assets/computer.jpeg'

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2'>
        <div className='colspan-1 md:w-[80%] text-center'>
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className='colspan-1 flex flex-col justify-center'>
            <h1 className='text-[#00df9a] font-bold my-2'>Learn From Experts</h1>
            <p className='my-2 text-justify'>Learn machine learning, power bi, web development with javascript, react,Tailwind css and data science wth interaction and by the experts. Get trained and proceed to the certifications in the following technology for your expertize.</p>
            <button className='font-light w-[30%] bg-black text-white p-3 rounded hover:bg-[#16a34a] hover:text-black'>Get Started</button>
        </div>
    </div>
  )
}
