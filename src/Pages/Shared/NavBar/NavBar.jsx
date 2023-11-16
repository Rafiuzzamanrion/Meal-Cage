import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import avatar from "../../../assets/avatar2.jpg";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../Hooks/UseCart";
import img from '/icon.jpg'
import UseAdmin from "../../../Hooks/UseAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  // ===== this is come from UseCart hook =========
  const [cart] = UseCart();
  const [isAdmin] = UseAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "You have successfully Logged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItem = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/menu"}>MENU</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>ORDER FOOD</Link>
      </li>
      <li>
        <Link to={"/contact"}>CONTACT US</Link>
      </li>
      {!user && (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
     <li>
        {
        isAdmin?  <Link to={"/dashboard/adminHome"}>DASHBOARD</Link>: (user && <Link to={"/dashboard/userHome"}>ORDER DETAILS</Link>)
        }
      </li>
      
     
      <li>
        <Link></Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 opacity-60  bg-black  w-full max-w-screen-xl rounded-xl text-white text-center">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-900 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost uppercase text-xl">
          <img className="w-10 h-10 rounded-full" src={img} alt="" /> Meal Cage
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        {user ? 
        
          <div className="navbar-end">
            <ul className="ms-5 mr-3">
            <li>
       {isAdmin?
         <Link  className="flex flex-row items-center" to={"/dashboard/adminHome"}>
         <FaShoppingCart size={25} /> 
          <div className="badge text-teal-500 ms-1">+{cart?.length || 0}</div>
        </Link>:<Link  className="flex flex-row items-center" to={"/dashboard/myCart"}>
         <FaShoppingCart size={25} /> 
          <div className="badge text-teal-500 border-teal-500 ms-1">+{cart?.length || 0}</div>
        </Link>
       }
      </li>
      
            </ul>
            
            <div className="avatar">
              <div className="w-10 mr-3 rounded-full ring ring-teal-500 ring-offset-base-100 ring-offset-2">
                <img src={avatar} />
              </div>
            </div>
           
            <button
              onClick={handleLogOut}
              className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 hover:text-black border-2"
            >
              Logout
            </button>
          
          </div>
         : 
          <div className="navbar-end">
            <Link to="/login">
              <button className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-2 hover:text-black">Login</button>
            </Link>
          </div>
          
        }
      </div>
    </div>
  );
};

export default NavBar;
