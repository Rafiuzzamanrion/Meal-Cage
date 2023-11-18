import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import img1 from "../../../assets/menu/salad.jpg";
import img2 from "../../../assets/menu/pizza.jpg";
import img3 from "../../../assets/menu/soup.jpg";
import img4 from "../../../assets/menu/dessert-2.jpg";
import img5 from "../../../assets/menu/salad-2.jpg";

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      <SectionTitle
        heading={"Order online"}
        subHeading={"From 11:00 am to 10:00 pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation
        modules={[Navigation]}
        className="mySwiper mb-24 mt-24"
      >
        <SwiperSlide>
          <Link to={"/order/salad"}>
            <img className="w-full rounded-xl" src={img1} alt="" />
            <h3 className="text-2xl uppercase text-center text-white -mt-20">
              Salads
            </h3>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to={"/order/pizza"}>
            <img className="w-full rounded-xl" src={img2} alt="" />
            <h3 className="text-2xl uppercase text-center  text-white -mt-20">
              Pizzas
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/order/soups"}>
            <img className="w-full lg:h-[420px] rounded-xl" src={img3} alt="" />
            <h3 className="text-2xl uppercase text-center  text-white -mt-20">
              Soups
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/order/dessert"}>
            <img className="w-full rounded-xl" src={img4} alt="" />
            <h3 className="text-2xl uppercase text-center  text-white -mt-20">
              Desserts
            </h3>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/order/drinks"}>
            <img className="w-full rounded-xl " src={img5} alt="" />
            <h3 className="text-2xl uppercase text-center  text-white -mt-20">
              drinks
            </h3>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
