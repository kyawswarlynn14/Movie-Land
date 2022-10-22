import React from 'react'
import { useState, useEffect } from 'react';

let url = "http://localhost:1337/api/movies?populate=*"

const Main = () => {
    const [data, setData] = useState({ data: [] });
    const [q, setQ] = useState('')

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  let buttonStyle = 'border-2 border-gray-400 px-4 py-1 rounded-3xl mr-4 hover:bg-blue-600'

  return (
    <div className='w-[80%] mx-auto'>

        <div>
            <div className='flex justify-between gap-6'>
                <h1 className='text-3xl'>Browser Movies</h1>

                <input
                    className='py-2 px-8 rounded-2xl border border-gray-400 outline-none 
                    w-68 text-xl text-slate-600'
                    type='text' 
                    placeholder='Search'
                    onChange={e => setQ(e.target.value)}
                />
            </div>
        </div>

        <div className='my-12'>
            <button className={buttonStyle}>
                Science
            </button>

            <button className={buttonStyle}>
                Action
            </button>

            <button className={buttonStyle}>
                Drama
            </button>
        </div>

        <div className='flex gap-8 flex-wrap justify-between'>
            {
                data.data.filter(movie => movie.attributes.title.toLowerCase().includes(q))
                .map(movie => (
                    <div
                    className='w-64 border-2 p-4 border-gray-400 h-full rounded-xl' key={movie.id}
                    >
                        <img
                        className='rounded-lg w-60 h-64' 
                        src={`http://localhost:1337${movie.attributes.cover.data.attributes.url}`}

                        alt={movie.attributes.title} />

                        <h2 className='text-xl font-bold my-2'>
                            {movie.attributes.title}
                        </h2>

                        <button className='bg-blue-500 px-2 py-1 rounded-xl my-2'>
                            {movie.attributes.categories.data[0].attributes.name}
                        </button>

                        <p className='text-justify'>
                            {movie.attributes.description}
                        </p>

                        <button 
                        className='bg-red-600 text-lg text-white p-2 w-32 ml-24 mt-4 rounded-3xl'>
                            Watch
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
    
  )
}

export default Main