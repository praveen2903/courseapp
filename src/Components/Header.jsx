import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Banner from './Banner';
// import NewsLetter from './NewsLetter'
// import Experts from './Experts'
// import Plans from './Plans'
// import Footer from './Footer'

export default function Header() {
    const [toggle,setToggle]=useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1249px] py-[12px] items-center flex justify-between mx-auto'>
            <div className=' text-4xl font-bold'>
                WebWorkers
            </div>
            {
                toggle ?
                    <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
                    

            }
            <ul className='hidden md:flex text-white gap-10'>
                <li>HOME</li>
                <li>COMPANY</li>
                <li>RESOURCES</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
            {/* responsive design */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]': 'left-[-100%]'}`}>
                <li className='p-5'>HOME</li>
                <li className='p-5'>COMPANY</li>
                <li className='p-5'>RESOURCES</li>
                <li className='p-5'>ABOUT</li>
                <li className='p-5'>CONTACT</li>
            </ul>

            {/* <Router>
                <ul className= 'hidden md:flex text-white gap-10'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Company'>company</Link></li>
                    <li><Link to='/Resources'>Resources</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                </ul>
                 responsive design  */}
                {/* <ul className= {`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]': 'left-[-100%]'}`}>
                    <li className='p-5'><link to='/'>Home</link></li>
                    <li className='p-5'><link to='/Company'>company</link></li>
                    <li className='p-5'><link to='/Resources'>Resources</link></li>
                    <li className='p-5'><link to='/About'>About</link></li>
                    <li className='p-5'><link to='/Contact'>Contact</link></li>
                </ul>
                <Routes>
                    <Route path='/' Component={<Banner/>}/>
                    <Route path='/Company' Component={<NewsLetter/>}/>
                    <Route path='/Resources' Component={<Experts/>}/>
                    <Route path='/About' Component={<Plans/>}/>
                    <Route path="/contact" Component={<Footer/>}/>
                </Routes>
            </Router>
                */}
            
        </div>
    </div>
  )
}
