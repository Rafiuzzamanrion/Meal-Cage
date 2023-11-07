import {useContext} from "react";

import {Navigate, useLocation} from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import {AuthContext} from "../Providers/AuthProvider";


const AdminRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin,isAdminLoading] = UseAdmin();
    const location = useLocation();
    if(loading || isAdminLoading){
        return <div>
            <span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if(user && isAdmin){
        return children;
    }
    else return <Navigate to={'/'} state={{from:location}} replace></Navigate>
       
};

export default AdminRoutes;