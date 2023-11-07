import {Link} from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,img,title,buttonName}) => {
    return (
        <div className="mt-16 ">
             { title && <Cover img={img}title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-5  p-12 mt-4  rounded-t-xl">
                {items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
                
            </div> 
            <div className="flex items-center justify-center pb-8 rounded-b-xl">
            <Link to={`/order/${title}`}><button className="flex items-center justify-center btn btn-outline btn-success border-b-8 mt-2">{buttonName}</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;