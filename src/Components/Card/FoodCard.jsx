import {useContext} from "react";
import {AuthContext} from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import {useLocation, useNavigate} from "react-router-dom";
import UseCart from "../../Hooks/UseCart";



const FoodCard = ({item}) => {
    const {name,image,recipe,price,_id,category} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    // ======== here comma (,) is used because refetch can not use alone without data(cart) ==========
    const [,refetch] = UseCart();
   

    const handleAddToCart = item =>{
      item
      if(user && user.email){
        const cartItem = {foodId:_id , name,image,price,email:user.email,category:category} 
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Successfully added to cart",
              showConfirmButton: false,
              timer: 1200,
            });
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please log in first to order !!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#54B4D3',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Log in now'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login',{state:{from:location}})
          }
        })
      }
    
    }
    return (
        <div className="ps-5 lg:ps-2"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="800">
           <div className="card w-96 h-[500px] bg-base-100 shadow-xl mt-6">
  <figure><img className=""  src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-teal-500">{name}</h2>
    <p>{recipe}</p>
    <p className="text-teal-500 font-semibold">${price}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleAddToCart(item)} className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-b-8 border-2 hover:text-black">Add to cart</button>
    </div>
  </div>
</div> 
        </div>
    );
};

export default FoodCard;