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
        <div className='mt-5 container mx-auto overflow-hidden'>
            <div class="hero my-h-screen bg-base-100 ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={singleDetail?.volumeInfo?.imageLinks?.thumbnail} alt='pic' class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-0 lg:ml-10'>
                        <h1 class="text-3xl lg:text-4xl font-bold">{singleDetail?.volumeInfo?.title}</h1>
                        <div>
                            <p class="py-6">{!expand && singleDetail?.volumeInfo?.description?.slice(0, 500) + '...'} {!expand && <button className='font-semibold text-primary' onClick={() => setExpand(true)}>read more</button>}
                                {expand && singleDetail?.volumeInfo?.description} {expand && <button className='font-semibold text-primary' onClick={() => setExpand(false)}>read less</button>}</p>
                            <p className='pb-1'><span className='font-bold'>Id:</span> {singleDetail?.id}</p>
                            <p className='pb-1'><span className='font-bold'>Subtitle:</span> {singleDetail?.volumeInfo?.subtitle}</p>
                            <p className='pb-1'><span className='font-bold'>Authors:</span> {singleDetail?.volumeInfo?.authors}</p>
                            <p className='pb-1'><span className='font-bold'>PublishedDate:</span> {singleDetail?.volumeInfo?.publishedDate}</p>
                            <p className='pb-1'><span className='font-bold'>selfLink:</span> {singleDetail?.selfLink}</p>
                            <p className='pb-1'><span className='font-bold'>PageCount:</span> {singleDetail?.volumeInfo?.pageCount}</p>
                            <p className='pb-1'><span className='font-bold'>PrintedPageCount:</span> {singleDetail?.volumeInfo?.pageCount}</p>
                            <p className='pb-1'><span className='font-bold'>Dimensions:</span> <span>Height: {singleDetail?.volumeInfo?.dimensions?.height}</span> <span>Width: {singleDetail?.volumeInfo?.dimensions?.width}</span> <span>Thickness: {singleDetail?.volumeInfo?.dimensions?.thickness}</span></p>
                            <p className='pb-1'><span className='font-bold'>Categories:</span> {singleDetail?.volumeInfo?.categories}</p>
                            <p className='pb-1'><span className='font-bold'>AverageRating:</span> {singleDetail?.volumeInfo?.averageRating}</p>
                            <p className='pb-1'><span className='font-bold'>RatingsCount:</span> {singleDetail?.volumeInfo?.ratingsCount}</p>
                            <p className='pb-1'><span className='font-bold'>Language:</span> {singleDetail?.volumeInfo?.language}</p>
                            <p className='pb-1'><span className='font-bold'>Links:</span> <span>PreviewLink: {singleDetail?.volumeInfo?.previewLink}</span> <span>InfoLink: {singleDetail?.volumeInfo?.infoLink}</span> <span>CanonicalVolumeLink: {singleDetail?.volumeInfo?.canonicalVolumeLink}</span></p>
                            <p className='pb-1'><span className='font-bold'>Pdf availability:</span> {singleDetail?.volumeInfo?.pdf}</p>
                            <p className='pb-1'><span className='font-bold'>WebReaderLink:</span> {singleDetail?.volumeInfo?.webReaderLink}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;