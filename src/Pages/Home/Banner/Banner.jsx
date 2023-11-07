import { Navigation, Pagination, A11y,Autoplay,EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';


import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';

const Banner = () => {
  

    
    return (
       
     <section>
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,A11y,Autoplay,EffectFade]}
      effect='fade'
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay = {{delay:2500}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='w-full' src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full' src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full' src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full' src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full' src={img5} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className='w-full' src={img6} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
     </section>
  );







    
};

export default Banner;