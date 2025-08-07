import { SiGoogleclassroom } from "react-icons/si";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative rounded-lg'>
                    <img className="rounded-lg" src="https://i.ibb.co.com/svqqzc58/Rectangle-2-1.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-lg'>
                    <img className="rounded-lg" src="https://i.ibb.co.com/PsJMKf3Z/Rectangle-2-2.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-lg'>
                    <img className="rounded-lg" src="https://i.ibb.co.com/hFfsDF4C/Rectangle-3-4.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-lg'>
                    <img className="rounded-lg" src="https://i.ibb.co.com/tppdCqY9/Rectangle-3-1.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-lg'>
                    <img className="rounded-lg" src="https://i.ibb.co.com/fz8hB19W/Rectangle-3-3.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-lg '>
                    <img className="rounded-lg" src="https://i.ibb.co.com/0jtbr5J3/Rectangle-3-2.png" alt="" />
                    <div className='absolute inset-x-0 bottom-0 bg-[#724B01] py-2 rounded-b-lg'>
                        <h1 className='text-2xl'>Works on Apple & Android phones & tablets</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="text-center mt-4">
                <button className='btn mr-4 bg-[#724B01] text-lg text-white dark:border-none'><span><SiGoogleclassroom /></span>Visit Quran Classroom </button>
                <button className='btn outline outline-[#724B01] text-lg text-[#724B01] bg-white dark:bg-white dark:border-none'>Visit Quran Classroom </button>
            </div>
        </div>
    );
};

export default Slider;