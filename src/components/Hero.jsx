import React from 'react'
import Typed from 'react-typed';


const Hero = () => {
    return (  
        <div className='text-white'>
            <div className='max-w-[800px] mt-[96px] w-full mx-auto  h-[512px] py-12 text-center flex flex-col'>
                
                <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analytics</p>
                <h1 className='font-bold md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with data.</h1>
                <div className="flex justify-center items-center">
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                    <Typed
                        className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                        strings={['BTB', 'BTC', 'SAAS']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />

                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, SAAS platforms.</p>
                <button className='bg-[#00df9a] w-[200px] rounded font-medium my-4 mx-auto py-2 text-black'>Get Started</button>
                
            </div>
        </div>
    );
}
 
export default Hero;