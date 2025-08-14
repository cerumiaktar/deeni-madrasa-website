import React from 'react';

const ShortBanner = () => {
    return (
        <div className='bg-[#faf4e9] mt-16 py-20 '>
            <div className='container mx-auto'>
                <div className='text-black container mx-auto text-center space-y-2'>
                    <h1 className='text-2xl font-bold'>WHY DEENI MADRASA</h1>
                    <p>Learn Quran and many other subjects of Islamic studies with live classes at with great features and benefits.</p>
                </div>
                <div className='text-center mt-4 space-y-4'>
                    <div className="join space-x-6 flex flex-col md:flex-row justify-center items-center">
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Teaching deeni taleem with Tarbiyah/Akhlaq</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Teaching deeni taleem with Tarbiyah/Akhlaq</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Female Tutors available</button>
                    </div>
                    <div className="join space-x-6 flex flex-col md:flex-row justify-center items-center">
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Tutors are highly Qualified and Multilingual</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">All course one rate</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Encourage to be a practicing Muslim</button>
                    </div>
                    <div className="join space-x-6 flex flex-col md:flex-row justify-center items-center">
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">No software needed. Log in and enjoy learning</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Choose from our handpicked, verified Quran Tutors</button>
                        <button className="btn join-item font-light dark:bg-white text-black dark:border-none rounded">Encourage to be a practicing Muslim</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShortBanner;