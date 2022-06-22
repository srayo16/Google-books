import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Search = ({ book }) => {
    // console.log(book);
    const [expand, setExpand] = useState(false);

    return (
        <>
            <div class="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl mx-auto" style={{ height: expand ? 'auto' : '480px' }}>
                <figure><img src={book?.volumeInfo?.imageLinks?.thumbnail} alt="imageBooks" className='w-fit h-48' /></figure>
                <div class="card-body">
                    <h2 class="card-title">{book?.volumeInfo?.title}</h2>
                    <p>{!expand && book?.volumeInfo?.description?.slice(0, 150) + '...'} {!expand && <button className='font-semibold text-primary' onClick={() => setExpand(true)}>read more</button>}
                        {expand && book?.volumeInfo?.description} {expand && <button className='font-semibold text-primary' onClick={() => setExpand(false)}>read less</button>}
                    </p>
                    <p className='text-base'>Publisher: {book?.volumeInfo?.publisher}</p>
                    <p className='text-base'>Categories: {book?.volumeInfo?.categories}</p>
                    <div class="card-actions justify-end">
                        <Link to={`/details/${book?.id}`}><button className="btn">See Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;