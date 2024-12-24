import React from 'react'
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
const Header = () => {
return(
    <>
    <header className='flex justify-around mt-5'>
        <div>
            <input type="text" placeholder='Search Product...' className='p-2 border-2 border-gray-400 rounded-md' />
        </div>
        {/* Profile cart heart */}
        <div className='flex gap-5 text-5xl'>
            <GiPlagueDoctorProfile className='w-8 h-8 text-gray-600'/>
            <IoMdHeart className='w-8 h-8 text-gray-600'/>
            <MdOutlineShoppingCart className='w-8 h-8 text-gray-600'/>
        </div>
    </header>
    </>
)
}

export default Header;