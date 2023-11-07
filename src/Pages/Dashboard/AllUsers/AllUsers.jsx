import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import {FaUserShield} from "react-icons/fa";

import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const token = localStorage.getItem('access-token')
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users`,{
        headers:{authorization:`bearer ${token}`}
      });

      return res.data;
    },
  });

  const handleDelete = (user) => {
    Swal.fire({
      title: `Are you want to delete ${user.name} ?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                `${user.name} has been deleted successfully`,
                "success"
              );
            }
          });
      }
    });
  };
//   =========== handleDelete end ========

const handleMakeAdmin =(user)=>{

    Swal.fire({
        title: "Are you want to make him Admin ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#14A44D",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make Admin !",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount) {
                refetch();
                Swal.fire(
                  "Updated!",
                `${user.name} is now an Admin`,
                  "success"
                );
              }
            });
        }
      });

}

  return (
    <div className="w-full">
      <Helmet>
        <title>Meal | All Users</title>
      </Helmet>

      <div>
        <h1 className="uppercase text-3xl mt-7 text-center">
          {" "}
          total users : {users.length}
        </h1>
      </div>

      <div className="bg-base-100 p-5 rounded-xl shadow-xl ms-2 mt-8">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {users.map((user,index) => (
                <tr key={user._id}>
                  <th>{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'admin'? 'admin':<button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-circle btn-outline text-success  hover:bg-success"
                    >
                      <FaUserShield size={35}></FaUserShield>
                    </button> }</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user)}
                      className="btn btn-circle btn-outline text-error  hover:bg-error"
                    >
                      <RiDeleteBin6Line size={36} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;




