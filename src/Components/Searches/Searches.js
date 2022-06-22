import React, { useState } from 'react';
import Loading from '../Loading/Loading';
import Search from './Search';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';

const Searches = () => {
    const [books, setBooks] = useState([]);
    const [isloading, setIsloading] = useState(false);
    const [user, loading] = useAuthState(auth);
    // console.log(user?.email);
    // console.log(books);

    if (isloading || loading) {
        return <Loading></Loading>
    }

    const searchSub = event => {
        event.preventDefault();
        setIsloading(true);

        const searched = event.target.search.value;
        const email = user?.email;
        const searchQuery = { searched, email };
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searched}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data.items);
                setIsloading(false);
            })

        fetch('http://localhost:5000/data', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(searchQuery)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your query has been recorded')
                }
            })

        event.target.reset();
    }

    return (
        <div className='container mx-auto mb-44 lg:mb-96'>
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