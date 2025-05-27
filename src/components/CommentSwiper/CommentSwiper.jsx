import React from "react";
import "./style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import avatar from "../../Reilverse_Assets/Ellipse 117.svg";
import comas from "../../Reilverse_Assets/quote 1.svg";
import {Autoplay, Navigation, Pagination} from "swiper/modules";


export default function CommentSwiper() {

    const REVIEWS = [
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
    ]

    return<>
        <div className={'w-full max-w-[850px] h-72 relative mt-7'}>
            <div className={'flex items-center  w-16 h-16 flex items-center justify-center rounded-lg bg-[#13519C1A]/10 gap-2 absolute top-0 max-[500px]:right-4 right-28 z-10'}>
                <img className={'w-[31px] h-[23px] object-contain'} src={comas} alt={'quote'}/>
            </div>

            <Swiper
                className={'w-full h-full'}
                style={{
                    "--swiper-pagination-color": "#2983d3",
                    "--swiper-pagination-bullet-inactive-color": "#bac8de",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",

                }}
                modules={[Navigation , Autoplay,Pagination]}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={100}
                speed={2000}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {REVIEWS.map((value, index)=> <SwiperSlide className={'w-full h-full cursor-pointer'}>
                    <div key={index} className={'w-full h-52 flex flex-col relative items-start'}>
                        <div className={'w-1 h-12 '}></div>
                        <div className={'w-full h-40 p-5 bg-gradient-to-r from-transparent from-5% to-gray-400/20 rounded-lg relative'}>

                            <div className={'flex items-center gap-2 absolute -top-10 left-4'}>

                                <div className={'w-14 h-14 rounded-full '}>
                                    <img className={'w-full h-full object-cover'} src={value.image} alt={'avatar'}/>
                                </div>

                                <div className={'flex flex-col items-start'}>
                                    <span className={'font-[400] text-[14px]'}>{value.name}</span>
                                    <span className={'text-[12px]'} style={{fontWeight:"400",fontFamily : "Arboria-Book"}}>{value.position}</span>
                                </div>

                            </div>

                            <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} className={'mt-4 text-[16px] max-[400px]:text-sm'}>{value.quote}</p>

                        </div>


                    </div>
                </SwiperSlide>)}
            </Swiper>

        </div>
    </>
}