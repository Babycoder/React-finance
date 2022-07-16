import React from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
	return (
		<div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
			<h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
			<ul className="flex hidden">
				<li className='p-4'>Home</li>
				<li className='p-4'>Company</li>
				<li className='p-4'>Resources</li>
				<li className='p-4'>About</li>
				<li className='p-4'>Content</li>
			</ul>
			<div>
				<AiOutlineMenu	size={20} />
			</div>
			<div className="fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900">
				<ul className="pt-24 uppercase">
					<li className='p-4	border-b'>Home</li>
					<li className='p-4	border-b'>Company</li>
					<li className='p-4	border-b'>Resources</li>
					<li className='p-4	border-b'>About</li>
					<li className='p-4	border-b'>Content</li>	
				</ul>
			</div>
		</div>
	);
}
 
export default Navbar;