
import {Helmet} from "react-helmet-async";
import AboutBistro from "../About Bistro/AboutBistro";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            {/* ======= for dynamic page title ========== */}
                 <Helmet>
        <title>MealCage | Home </title>
            </Helmet>
            {/* ======== end ========= */}
            
           <Banner></Banner>
           <Category></Category>
           <AboutBistro></AboutBistro>
           <PopularMenu></PopularMenu>
           <Featured></Featured>
           <Testimonials></Testimonials>
          
        </div>
    );
};

export default Home;