
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Contact from "../Pages/Contact/Contact";
import ManageBookings from "../Pages/Dashboard/ManageBookings/ManageBookings";







const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
       path:'/contact',
       element:<Contact></Contact>
      }

      ]
    },

    // ============= Dashboard layout ===============
    {
      path:'dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[

        // ======== user routes ===========
        {
        path:'userHome',
        element:<UserHome></UserHome>
        },
        {
          path:'myCart',
          element:<MyCart></MyCart>,
        
      },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'reservation',
          element:<Reservation></Reservation>
        },
        
        

        // ========= admin routes ==============
        {path:'adminHome',
      element:<AdminRoutes><AdminHome></AdminHome></AdminRoutes>
        },
        {
          path:'allUsers',
          element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
       
        {
          path:'addItem',
          element:<AdminRoutes><AddItem></AddItem></AdminRoutes>
        },
        {
          path:'manageItems',
          element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
        },
       {
        path:'manageBookings',
        element:<AdminRoutes><ManageBookings></ManageBookings></AdminRoutes>
       }
        

      ],
    },
  
  ]);

  export default router;