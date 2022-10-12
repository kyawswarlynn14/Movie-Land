import React from 'react'
import { useState, useEffect } from 'react';
const Main = () => {
    const [data, setData] = useState({ data: [] });

  useEffect(() => {
    fetch("http://localhost:1337/api/movies?populate=*")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className='w-[80%] mx-auto flex gap-8 flex-wrap justify-between'>
            {
                data.data.map(movie => (
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
  )
}

export default Main