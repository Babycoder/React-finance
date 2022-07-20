import React from 'react';
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return ( 
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div class='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mange Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos impedit nesciunt repellat at perspiciatis iure voluptates temporibus, praesentium ut dolorem et facere necessitatibus vel recusandae excepturi dolorum omnis blanditiis.</p>
                    <button className='bg-[#000300] w-[200px] rounded font-medium my-3 md:mx-0 mx-auto py-2 text-[#00df9a]'>Get Started</button>
                </div>
            </div>

        </div>
    );
}
 


export default Analytics;