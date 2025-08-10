import { useEffect, useState } from "react";


const TextReviews = () => {
    const [textReviews, setTextReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setTextReviews(data))
    }, [])
    return (
        <div>
            <div className="carousel w-full relative">
                {textReviews.map((review, idx) => (
                    <div
                        key={idx}
                        id={`slide${idx + 1}`}
                        className="carousel-item relative w-full flex justify-center"
                    >
                        <div className="card w-96 bg-base-100 shadow-lg">
                            <div className="card-body">
                                <div className="flex items-start gap-4">
                                    <img className="rounded-full w-16" src={review.profile_img} alt={review.name} />
                                    <div>
                                        <h2 className="card-title">{review.name}</h2>
                                        <p>{review.designation}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>{review.reviews}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a
                                href={`#slide${(idx - 1 + textReviews.length) % textReviews.length + 1
                                    }`}
                                className="btn btn-circle"
                            >
                                ❮
                            </a>
                            <a
                                href={`#slide${(idx + 1) % textReviews.length + 1
                                    }`}
                                className="btn btn-circle"
                            >
                                ❯
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TextReviews;