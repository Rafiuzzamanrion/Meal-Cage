

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';






const Category = () => {
    return (
       <section>
        <SectionTitle 
        heading={'Order online'}
        subHeading={'From 11:00 am to 10:00 pm'}
        >
            
        </SectionTitle>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper mb-24 mt-24"
      >
        <SwiperSlide>
           
            <img className='w-full rounded-b-xl' src={img1} alt="" />
            <h3 className='text-2xl uppercase text-center text-white -mt-20'>Salads</h3>
          
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={img2} alt="" />
            <h3 className='text-2xl uppercase text-center  text-white -mt-20'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={img3} alt="" />
            <h3 className='text-2xl uppercase text-center  text-white -mt-20'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={img4} alt="" />
            <h3 className='text-2xl uppercase text-center  text-white -mt-20'>Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full' src={img5} alt="" />
            <h3 className='text-2xl uppercase text-center  text-white -mt-20'>salads</h3>
        </SwiperSlide>
        
      </Swiper>
       </section>
    );
};

export default Category;