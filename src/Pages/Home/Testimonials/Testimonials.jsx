import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from "swiper/modules";
import {useEffect, useState} from "react";
import {Rating} from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';
import 'swiper/css/autoplay';



const Testimonials = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))

    },[])
    return (
       <section className="my-20">
        <SectionTitle
        heading={'Reviews'}
        subHeading={'What our clients say'}
        ></SectionTitle>

<Swiper navigation={true} modules={[Navigation,Autoplay]} autoplay={{delay:2500}} className="mySwiper">
        
       {
        reviews.map(review => <SwiperSlide key={review._id}>

            <div className="m-16 flex flex-col items-center mx-24 bg-base-100 shadow-xl p-8 py-16 rounded-xl">
            <Rating
      style={{ maxWidth: 150}}
      value={review.rating}
      readOnly
    />
                <p className="py-8">{review.details}</p>
                <h3 className="text-3xl text-teal-500 font-semibold">{review.name}</h3>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
       </section>
    );
};

export default Testimonials;