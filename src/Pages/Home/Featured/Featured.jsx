import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'

import { Parallax } from 'react-parallax';


const Featured = () => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={featuredImg}
        bgImageAlt="the menu"
        strength={-700}
    >
        <div className="featured-item pt-2 my-20 bg-opacity-60 bg-slate-700">
            <SectionTitle
            heading={'Featured item'}
            subHeading={'Check it out'}
            
            ></SectionTitle>
            <div className="md:flex items-center justify-center px-24 pb-20 pt-8 text-white ">
               <div>
               <img src={featuredImg} alt="" />
               </div>
               <div className="md:ml-10">
                <p>March 20, 2029 </p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut maiores odit accusantium voluptas nesciunt, nulla praesentium excepturi. Asperiores, dolorem labore? Ad consectetur repellendus soluta hic vero quisquam aliquid aperiam, ab minima molestiae libero, cupiditate numquam quasi pariatur aut maxime sint laborum repudiandae quaerat ea debitis. Autem quos voluptate dolor commodi!
                </p>
                <button className="btn btn-outline btn-success border-b-8 mt-4">Order now</button>
               </div>
            </div>
        </div>
        </Parallax>
    );
};

export default Featured;