import React from 'react'

const Newsletter = () => {
    return ( 
        <div className='w-full py-16 text-white px-4'>
            <div className=' max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-3xl sm:text-2xl text-xl'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign in to our newsletter and stay up to date.</p>
                </div>
                <div className='py-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 w-full rounded-md' type="email" placeholder='Enter Email'/>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium lg:ml-2  my-4 mx-auto py-2 text-black'>Notify Me</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Newsletter;