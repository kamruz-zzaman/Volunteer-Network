import React from 'react';

const Search = () => {
    return (
        <>
            <div className='lg:mt-20'>
                <h1 className='text-3xl m-10 font-bold'>I GROW BY HELPING PEOPLE IN NEED</h1>
                <input type="text" className='border-2 px-5 py-2 rounded-md w-80' placeholder='Search...' />
                <button className='bg-blue-400 px-5 py-2 border-2 -ml-20 rounded-md'>Search</button>
            </div>
        </>
    );
};

export default Search;