import React from 'react'
import { TbShoppingBagPlus } from "react-icons/tb";
import Category from './Category/Category'
import Color from './Color/Color'
import Price from './Price/Price'
const SideBar = () => {
return (
    <>
    <div className='w-[15%] h-screen border-r-2 border-black flex flex-col fixed'>
        <div className='text-4xl flex justify-center mb-20 cursor-pointer mt-20'>
            <TbShoppingBagPlus className=''/>
        </div>
        <div className='flex flex-col gap-5 text-center text-2xl font-bold font-arial'>
            <Category />
            <Color />
            <Price />
        </div>
    </div>
    </>
)
}

export default SideBar;