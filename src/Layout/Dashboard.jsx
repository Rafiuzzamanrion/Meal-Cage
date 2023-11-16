import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUsers
} from "react-icons/fa";
import { GiHamburgerMenu,GiForkKnifeSpoon } from "react-icons/gi";
import { BsArrow90DegLeft } from "react-icons/bs";
import { AiFillShopping, AiFillContacts, } from "react-icons/ai";
import UseCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";
import {BiSolidBook} from "react-icons/bi";
import {HiTemplate} from "react-icons/hi";

const Dashboard = () => {
  const [cart] = UseCart();
  // ========= TODO =========
  // const isAdmin = true;
  const [isAdmin] = UseAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-2 hover:text-black lg:hidden mt-5"
          >
            <GiHamburgerMenu size={40} /> MENU
          </label>

          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-100 rounded-xl text-base-content shadow-xl ">
            {/* Sidebar content here */}

            {isAdmin ? (
                <div>
                <li>
                  <Link to={'/dashboard/adminHome'}>
                    <FaHome size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Admin Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashboard/addItem'}>
                    <GiForkKnifeSpoon size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Add an Item
                    </span>
                  </Link>
                </li>
             
                <li>
                  <Link to={'/dashboard/manageItems'}>
                  <HiTemplate size={26} />
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Manage Items
                    </span>
                  </Link>
                </li>
             
                <li>
                  <Link>
                    <BiSolidBook size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Manage Bookings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashboard/allUsers'}>
                    <FaUsers size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Manage Users
                    </span>
                  </Link>
                </li>
             
              </div>

              // ========= Admin end ===========

            ) : (

              // ========== user start ============

              <div>
                <li>
                  <Link to={'/dashboard/userHome'}>
                    <FaHome size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      User Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link className="flex flex-row" to={"/dashboard/myCart"}>
                    <FaShoppingCart size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      My Cart
                      <span className="badge text-teal-500 border-teal-500 ms-2">
                        +{cart?.length || 0}
                      </span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashboard/paymentHistory'}>
                    <FaWallet size={26} />
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Payment History
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to={'/dashboard/reservation'}>
                    <FaCalendarAlt size={26} />{" "}
                    <span className="text-teal-500 font-semibold">
                      {" "}
                      Reservations
                    </span>
                  </Link>
                </li>
              </div>
            )}

            <div className="divider"></div>
            <li>
              <span className="font-bold">
                BACK TO <BsArrow90DegLeft />
              </span>
              <Link to={"/"}>
                <FaHome size={26} />{" "}
                <span className="text-teal-500 font-semibold"> HOME</span>
              </Link>
            </li>
            <li>
              <Link to={"/menu"}>
                <GiHamburgerMenu size={26} />{" "}
                <span className="text-teal-500 font-semibold"> MENU</span>
              </Link>
            </li>
            <li>
              <Link to={"/order/salad"}>
                <AiFillShopping size={26} />{" "}
                <span className="text-teal-500 font-semibold"> ORDER FOOD</span>
              </Link>
            </li>
            <li>
              <Link to={"/contact"}>
                <AiFillContacts size={26} />{" "}
                <span className="text-teal-500 font-semibold"> CONTACT</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
