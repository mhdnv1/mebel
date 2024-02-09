import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={
                        { delay: 3000 }
                    }
                    speed={1500}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className='banner__title'>
                                loft <br />
                                мебель
                                <p className='banner__text'>
                                Современная и удобная мебель в Анапе
                                </p>
                                <button className='banner__btn'>СМОТРЕТЬ КАТАЛОГ</button>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className='banner__title'>
                                loft <br />
                                мебель
                                <p className='banner__text'>
                                Современная и удобная мебель в Анапе
                                </p>
                                <button className='banner__btn'>СМОТРЕТЬ КАТАЛОГ</button>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className='banner__title'>
                                loft <br />
                                мебель
                                <p className='banner__text'>
                                Современная и удобная мебель в Анапе
                                </p>
                                <button className='banner__btn'>СМОТРЕТЬ КАТАЛОГ</button>
                            </h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__info">
                            <h2 className='banner__title'>
                                loft <br />
                                мебель
                                <p className='banner__text'>
                                Современная и удобная мебель в Анапе
                                </p>
                                <button className='banner__btn'>СМОТРЕТЬ КАТАЛОГ</button>
                            </h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Banner;
