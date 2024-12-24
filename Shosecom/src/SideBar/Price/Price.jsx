import React from 'react'

const Price = () => {
return (
    <>
    <div>
        <div>Price</div>
        <div className='text-left mt-4 ml-20 font-arial text-sm'>
            <div>
                <input type="radio" id='All' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="All">All</label>
            </div>
            <div>
                <input type="radio" id='0-50' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="0-50">₹0-₹50</label>
            </div>
            <div>
                <input type="radio" id='50-100' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="50-100">₹50-₹100</label>
            </div>
            <div>
                <input type="radio" id='100-150' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="100-150">₹100-₹150</label>
            </div>
            <div>
                <input type="radio" id='150-' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="150-">Over-₹150</label>
            </div>
        </div>
    </div>
    </>
)
}

export default Price;