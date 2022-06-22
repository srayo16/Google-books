import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import Search from './Search';

const Searches = () => {
    const [books, setBooks] = useState([]);
    const [isloading, setIsloading] = useState(false);
    // console.log(books);
    if (isloading) {
        return <Loading></Loading>
    }

    const searchSub = event => {
        event.preventDefault();
        setIsloading(true);

        const searched = event.target.search.value;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searched}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items);
                setIsloading(false);
            })

        event.target.reset();
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-neutral text-3xl  lg:text-4xl text-center font-bold my-5'>Search your books here</h1>
            <div>
                <div class="form-control">
                    <div className='mx-auto mt-5 mb-12'>
                        <form onSubmit={searchSub}>
                            <div class="input-group">
                                <input type="text" placeholder="Search…" name='search' required class="input input-bordered w-25 lg:w-96" />
                                <button class="btn btn-square" type='submit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {books && <h3 className='text-neutral text-3xl  text-center font-bold mb-10'>Searches result: {books?.length}</h3>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-24'>
                {books &&
                    books?.map(book => <Search book={book} key={book.id}></Search>)
                }
            </div>

        </div>
    );
};

export default Searches;