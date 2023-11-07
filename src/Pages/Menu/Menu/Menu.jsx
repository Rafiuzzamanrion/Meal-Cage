import {Helmet} from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";



const Menu = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'popular')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
             <Helmet>
        <title>Bistro-Boss | Menu</title>
            </Helmet>

            {/* page banner cover */}
           <Cover img={menuImg}title={'Our menu'}></Cover>

           {/* main cover  */}
           <SectionTitle 
           heading={"Today's Offers"} 
           subHeading={"Don't Miss"}></SectionTitle>

           {/* offered item */}
           <MenuCategory items={offered} title={'offered'} img={pizzaImg} buttonName={'order your favorite offered food'}></MenuCategory>

           {/* dessert item */}
           <MenuCategory title={"dessert"} img={dessertImg} items={desserts} buttonName={'Order your favorite dessert'}></MenuCategory>

           {/* pizza item */}
           <MenuCategory title={'pizza'} img={pizzaImg} items={pizzas} buttonName={'order your favorite pizza'}></MenuCategory>
           
           {/* salad item */}
           <MenuCategory title={'salad'} img={saladImg} items={salads} buttonName={'order your favorite salads'}></MenuCategory>

           {/* soup item */}
           <MenuCategory title={'soups'} img={soupImg} items={soups} buttonName={'order your favorite soups'}></MenuCategory>

           {/* drinks item */}
           <MenuCategory title={'drinks'} img={soupImg} items={drinks} buttonName={'order your favorite drinks'}></MenuCategory>
          
        </div>
    );
};

export default Menu;