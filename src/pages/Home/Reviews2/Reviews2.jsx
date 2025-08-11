import { useEffect, useState } from 'react';

const Reviews2 = () => {
    const [reviews, setReviews] = useState([]);

    const [textIndex, setTextIndex] = useState(0);
    const [videoIndex, setVideoIndex] = useState(0);

    useEffect(() => {
        fetch("reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const prevText = () => {
        setTextIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };
    const nextText = () => {
        setTextIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    const prevVideo = () => {
        setVideoIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };
    const nextVideo = () => {
        setVideoIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    };

    if (reviews.length === 0) {
        return <p>Loading reviews...</p>;
    }

    return (
        <div className='container mx-auto mt-20'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold text-black'>WHAT STUDENTS SAY</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Text Review */}
                <div className="w-full md:w-6/12 relative ">
                    <div className="card w-full h-full bg-base-100 dark:bg-white dark:text-black shadow-lg p-6">
                        <div className="flex items-start gap-4">
                            <img
                                src={reviews[textIndex].profile_img}
                                alt={reviews[textIndex].name}
                                className="rounded-full w-16"
                            />
                            <div>
                                <h2 className="card-title">{reviews[textIndex].name}</h2>
                                <p className="text-sm text-gray-500">
                                    {reviews[textIndex].designation}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p>{reviews[textIndex].reviews}</p>
                        </div>

                        {/* Text Prev/Next Buttons */}
                        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                            <button className="btn btn-circle" onClick={prevText}>
                                ❮
                            </button>
                            <button className="btn btn-circle" onClick={nextText}>
                                ❯
                            </button>
                        </div>
                    </div>
                </div>

                {/* Video Review */}
                <div className="w-full md:w-6/12 relative">
                    <div className="card w-full bg-black shadow-lg p-4 rounded-lg">
                        <iframe
                            width="100%"
                            height="300"
                            src={reviews[videoIndex].video_url}
                            title={`Video review by ${reviews[videoIndex].name}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>

                        {/* Video Prev/Next Buttons */}
                        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                            <button className="btn btn-circle" onClick={prevVideo}>
                                ❮
                            </button>
                            <button className="btn btn-circle" onClick={nextVideo}>
                                ❯
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews2;