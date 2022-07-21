import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	}

	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
			<ul className="hidden md:flex">
				<li className='p-4 cursor-not-allowed'>Home</li>
				<li className='p-4 cursor-not-allowed'>Company</li>
				<li className='p-4 cursor-not-allowed'>Resources</li>
				<li className='p-4 cursor-not-allowed'>About</li>
				<li className='p-4 cursor-not-allowed'>Contact</li>
			</ul>
			<div onClick={handleNav} className='block md:hidden'>
				{!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose	size={20}/>}
			</div>
			<div className={nav ? 'fixed left-0 top-0 w-[60%] h-full z-50 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
			<h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">React.</h1>
				
				<ul className="uppercase p-4">
					<li className='p-4	border-b border-gray-600 cursor-not-allowed'>Home</li>
					<li className='p-4	border-b border-gray-600 cursor-not-allowed'>Company</li>
					<li className='p-4	border-b border-gray-600 cursor-not-allowed'>Resources</li>
					<li className='p-4	border-b border-gray-600 cursor-not-allowed'>About</li>
					<li className='p-4	border-b border-gray-600 cursor-not-allowed'>Contact</li>
				</ul>
			</div>
		</div>
	);
}
 
export default Navbar;