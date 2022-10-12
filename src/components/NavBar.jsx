import React from 'react'

export const NavBar = () => {
  let buttonStyle = 'border-2 border-gray-400 px-4 py-1 rounded-3xl mr-4 bg-white'
  return (
    <div className='w-[80%] mx-auto'>
        <div className='flex justify-between gap-6'>
          <h1 className='text-3xl'>Browser Movies</h1>

          <input
              className='py-2 px-8 rounded-2xl border border-gray-400 outline-none 
              w-68 text-xl text-slate-600'
              type='text' 
              placeholder='Search'
          />
        </div>

        <div className='my-12'>
          <button className={buttonStyle}>Science</button>
          <button className={buttonStyle}>Action</button>
          <button className={buttonStyle}>Drama</button>
        </div>
    </div>
  )
}
