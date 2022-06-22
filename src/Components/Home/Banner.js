import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero my-h-screen lg:h-96" style={{ backgroundImage: "url(https://i.ibb.co/hCPpcwj/alfons-morales-YLSwj-Sy7stw-unsplash.jpg)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-full lg:w-full">
                        <h1 className="mb-5 lg:mb-8 text-2xl lg:text-5xl lg:tracking-widest font-bold">Welcome to Google Books</h1>
                        <p className="mb-5 max-w-md lg:ml-32">Try the new Google Books. Check out the new look and enjoy easier access to your favorite features.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;