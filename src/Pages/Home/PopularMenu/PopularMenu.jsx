
import {Link} from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import UseMenu from "../../../Hooks/UseMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className="mt-16 mb-16 ">
            <SectionTitle 
            heading={'From our menu'}
            subHeading={'Popular items'}
            >

            </SectionTitle>

            <div className="grid md:grid-cols-2 gap-4 p-8 pt-16 rounded-t-xl">
                {popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
                
            </div>
           <div className="flex items-center justify-center  pb-8 rounded-b-xl ">
          <Link to={'/menu'}> <button className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-b-8 border-2 hover:text-black mt-2">View full menu</button></Link>
           </div>
        </section>
    );
};

export default PopularMenu;