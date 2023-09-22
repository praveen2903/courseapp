import React from 'react'
import python from '../assets/python.png'
import machinelearning from '../assets/ml.png'
import react from '../assets/react.png'
import powerbi from '../assets/powerbi.png'

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-5 gap-6'>
            <div>
                <div className='shadow-xl h-[600px] my-2 hover:scale-75 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={python} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Python</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-ceter font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Python is important</p>
                        <p className='py-2 border-b mx-8 mt-8'>It would is foundation for machine learning and data science</p>
                </div>
            </div>
                <div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 hover:scale-90 duration-200'>start trail</button>
                </div>
            </div>


            <div>
                <div className='shadow-xl h-[600px] my-2 hover:scale-75 duration-500'>
                        <img className='w-20 mx-auto mt-[-3rem] bg-white' src={react} alt="/"/>
                        <h2 className='text-2xl font-bold text-center py-8'>React</h2>
                        <p className='text-center text-4xl font-bold'>$149</p>
                        <div className='text-ceter font-medium'>
                            <p className='py-2 border-b mx-8 mt-8'>React is important</p>
                            <p className='py-2 border-b mx-8 mt-8'>It would is used to build websites</p>
                            <p className='py-2 border-b mx-8 mt-8'>React is used with Tailwind css</p>
                        </div>
                </div>
                <div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 hover:scale-90 duration-200'>start trail</button>
                </div>            
            </div>
            <div>
                <div className='shadow-xl h-[600px] my-2 hover:scale-75 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={powerbi} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Power BI</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-ceter font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Power BI is important</p>
                        <p className='py-2 border-b mx-8 mt-8'>It would is used for making dashboards for analytics</p>
                    </div>
                </div>
                <div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 hover:scale-90 duration-200'>start trail</button>
                </div>
            </div>
            <div>
                <div className='shadow-xl h-[600px] my-2 hover:scale-75 duration-500'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={machinelearning} alt="/"/>
                    <h2 className='text-2xl font-bold text-center py-8'>Machine Learning</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className='text-ceter font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Machine Learing is important</p>
                        <p className='py-2 border-b mx-8 mt-8'>It would is used for automating the regular tasks</p>
                    </div>
                </div>
                <div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:bg-blue-700 hover:scale-90 duration-200'>start trail</button>
                </div>            
            </div>
        </div>
    </div>
  )
}
