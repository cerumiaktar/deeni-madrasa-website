import React from 'react';
import TextReviews from '../TextReviews/TextReviews';
// import VideoReviews from '../VideoReviews/VideoReviews';

const Reviews = () => {
    return (
        <div className='container mx-auto mt-20'>
            <div className='text-center mb-6'>
                <h1 className='text-2xl font-bold text-black'>WHAT STUDENTS SAY</h1>
            </div>
            <div>
                <div>
                    <TextReviews></TextReviews>
                </div>
                <div>
                    {/* <VideoReviews></VideoReviews> */}
                </div>
            </div>
        </div>
    );
};

export default Reviews;