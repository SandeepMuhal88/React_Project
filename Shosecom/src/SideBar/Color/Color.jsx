import React from 'react'

const Color = () => {
return (
    <>
    <div>
        <div>Color</div>
        <div className='text-left mt-4 ml-20 font-arial text-sm'>
            <div>
                <input type="radio" id='All' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="All">All</label>
            </div>
            <div>
                <input type="radio" id='Black' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Black">Black</label>
            </div>
            <div>
                <input type="radio" id='Blue' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Blue">Blue</label>
            </div>
            <div>
                <input type="radio" id='Red' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Red">Red</label>
            </div>
            <div>
                <input type="radio" id='White' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="White">White</label>
            </div>
            <div>
                <input type="radio" id='Green' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Green">Green</label>
            </div>
        </div>

    </div>
    </>
)
}

export default Color;