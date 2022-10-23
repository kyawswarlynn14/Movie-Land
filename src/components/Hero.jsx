import React from 'react';
import { useCategories, useMovies } from './hooks';

export default function Hero() {
  const { categories } = useCategories();
  const { data, selected, handleFilter ,keyword,handleSearch} = useMovies();

  return (
    <div className='w-[80%] mx-auto'>

        <div
        className='flex justify-between'>
            <h1 
            className='text-2xl font-bold tracking-widest'>
                Broswer Movies
            </h1>

            <input 
                value={keyword} 
                onChange={(e)=>{handleSearch(e.target.value)}}
                placeholder='Search'
                className='text-black outline-none w-96 rounded-lg py-1 px-3'
            />
        </div>
        
        {categories.data.map((item) => (
            <button
                className='my-8 border border-white p-2 px-4 rounded-lg mr-4 hover:bg-cyan-400 hover:text-black'
                key={item.id}
            onClick={() => {
                handleFilter(item?.attributes?.name);
            }}
            >
            {item?.attributes?.name}
            </button>
        ))}

      <div
      className='flex justify-between flex-wrap gap-4'>
        {data?.data.filter(item => item?.attributes?.title.toLowerCase().includes(keyword))
        .map((item) => (
            <div
            className='w-64 border-2 p-4 border-gray-400 h-full rounded-xl' key={item.id}
            >
                <img
                className='rounded-lg w-60 h-64' 
                src={`http://localhost:1337${item.attributes.cover.data.attributes.url}`}

                alt={item.attributes.title} />

                <h2 className='text-xl font-bold my-2'>
                    {item.attributes.title}
                </h2>

                <button className='bg-blue-500 px-2 py-1 rounded-xl my-2'>
                    {item.attributes.categories.data[0].attributes.name}
                </button>

                <p className='text-justify'>
                    {item.attributes.description}
                </p>

                <button 
                className='bg-red-600 text-lg text-white p-2 w-32 ml-24 mt-4 rounded-3xl'>
                    Watch
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}
