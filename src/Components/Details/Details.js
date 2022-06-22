import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Details = () => {
    const { id } = useParams();
    const [singleDetail, setSingleDetail] = useState([]);
    const [expand, setExpand] = useState(false);
    const [isLoadings, setIsloadings] = useState(false);

    useEffect(() => {
        setIsloadings(true);
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleDetail(data);
                setIsloadings(false);
            })
    }, [id])

    if (isLoadings) {
        return <Loading></Loading>
    }
    console.log(singleDetail);
    return (
        <div className='mt-5'>
            <div class="hero my-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={singleDetail?.volumeInfo?.imageLinks?.thumbnail} alt='pic' class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-0 lg:ml-10'>
                        <h1 class="text-5xl font-bold">{singleDetail?.volumeInfo?.title}</h1>
                        <p class="py-6">{!expand && singleDetail?.volumeInfo?.description?.slice(0, 500) + '...'} {!expand && <button className='font-semibold text-primary' onClick={() => setExpand(true)}>read more</button>}
                            {expand && singleDetail?.volumeInfo?.description} {expand && <button className='font-semibold text-primary' onClick={() => setExpand(false)}>read less</button>}</p>
                        <p className='pb-1'><span className='font-bold'>Id:</span> {singleDetail?.id}</p>
                        <p className='pb-1'><span className='font-bold'>Subtitle:</span> {singleDetail?.volumeInfo?.subtitle}</p>
                        <p className='pb-1'><span className='font-bold'>Authors:</span> {singleDetail?.volumeInfo?.authors}</p>
                        <p className='pb-1'><span className='font-bold'>PublishedDate:</span> {singleDetail?.volumeInfo?.publishedDate}</p>
                        <p className='pb-1'><span className='font-bold'>selfLink:</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;