import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { BiArrowBack } from 'react-icons/bi';

const Details = () => {
    const { id } = useParams();
    const [singleDetail, setSingleDetail] = useState([]);
    const [expand, setExpand] = useState(false);
    const [isLoadings, setIsloadings] = useState(false);
    const navigate = useNavigate();

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
    // console.log(singleDetail);
    // for go to back
    const returnPage = () => {
        navigate(-1);
    }

    return (
        <div className='mt-5 container mx-auto overflow-hidden mb-44'>
            <button className="btn btn-link text-primary-content" onClick={() => returnPage()}><BiArrowBack></BiArrowBack> Back</button>
            <div className="hero my-h-screen bg-base-100">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={singleDetail?.volumeInfo?.imageLinks?.thumbnail} alt='pic' className="w-fit lg:w-96 h-auto rounded-lg lg:mt-20 border-4" />
                    <div className='ml-0 lg:ml-10 w-screen lg:w-full px-10'>
                        <h1 className="text-2xl lg:text-4xl font-bold">{singleDetail?.volumeInfo?.title}</h1>
                        <div>
                            <p className="py-6">{!expand && singleDetail?.volumeInfo?.description?.slice(0, 500) + '...'} {!expand && <button className='font-semibold text-primary' onClick={() => setExpand(true)}>read more</button>}
                                {expand && singleDetail?.volumeInfo?.description} {expand && <button className='font-semibold text-primary' onClick={() => setExpand(false)}>read less</button>}</p>
                            <p className='pb-1'><span className='font-bold'>Id:</span> {singleDetail?.id}</p>
                            <p className='pb-1'><span className='font-bold'>Subtitle:</span> {singleDetail?.volumeInfo?.subtitle}</p>
                            <p className='pb-1'><span className='font-bold'>Authors:</span> {singleDetail?.volumeInfo?.authors}</p>
                            <p className='pb-1'><span className='font-bold'>PublishedDate:</span> {singleDetail?.volumeInfo?.publishedDate}</p>
                            <p className='pb-1'><span className='font-bold w-25'>selfLink:</span> <span>{singleDetail?.selfLink}</span></p>
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