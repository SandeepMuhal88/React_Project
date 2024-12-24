import React from 'react'

const Category = () => {
return (
    <>
    <div>
        <div>Category</div>
        <div className='text-left mt-4 ml-20 font-arial text-sm'>
            <div>
                <input type="radio" id='All' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="All">All</label>
            </div>
            <div>
                <input type="radio" id='Seankers' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Seankers">Seankers</label>
            </div>
            <div>
                <input type="radio" id='Flate' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Flate">Flate</label>
            </div>
            <div>
                <input type="radio" id='Heels' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Heels">Heels</label>
            </div>
            <div>
                <input type="radio" id='Man' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Man">Man</label>
            </div>
            <div>
                <input type="radio" id='Woman' className='mr-2  accent-black cursor-pointer'/>
                <label htmlFor="Woman">Woman</label>
            </div>
        </div>
    </div>
    </>
)
}

export default Category;