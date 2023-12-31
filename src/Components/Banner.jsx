import React from 'react'
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full py-[100px]'>
        <div className='max-w-[1240px] py-[100px] mx-auto text-center font-bold'>
            <div className='text-xl md:text-3x1 md:p-[24px] text-white'>
                Learn with us
            </div>
            <h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>Grow With us.</h2>
            <div className='text-[20px] md:text-2xl md:text-[60px] text-white md:p-[24px]'>
              <span className="text-darkblue">{"Learn "}</span>
              <Typewriter words={['web development','Python programming','Power Bi','Machine Learning','React Developer']} loop={false} typeSpeed={120} deleteSpeed={100} delaySpeed={1000}/> 
                  
            </div>
            <button className='bg-black text-white p-3 rounded hover:bg-[#991b1b] hover:text-[#171717]'>Get Started</button>
        </div>
    </div>
  )
}
