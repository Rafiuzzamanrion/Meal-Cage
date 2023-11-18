import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { FaUserShield } from "react-icons/fa";

import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const token = localStorage.getItem("access-token");
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`https://meal-cage-server.vercel.app/users`, {
        headers: { authorization: `bearer ${token}` },
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
        fetch(`https://meal-cage-server.vercel.app/users/${user._id}`, {
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

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you want to make him Admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin !",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://meal-cage-server.vercel.app/users/admin/${user._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire("Updated!", `${user.name} is now an Admin`, "success");
            }
          });
      }
    });
  };

  const handleAdmin = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = "admin";
    const admin = { name, email, role };

    Swal.fire({
      title: "Do you want to make him Admin ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin !",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`https://meal-cage-server.vercel.app/new-admin`, admin)

          .then((data) => {
            if (data.data.insertedId) {
              refetch();
              form.reset();
              Swal.fire({
                title: "Added!",
                text: `${name} is now an Admin`,
                icon: "success",
              });
            } else {
              Swal.fire({
                position: "top",
                icon: "error",
                title: `${name} is already an Admin`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-full">
      <Helmet>
        <title>MealCage | Manage-Users</title>
      </Helmet>

      <div>
        <h1 className="uppercase text-3xl mt-7 text-center">
          {" "}
          total users : {users.length}
        </h1>
        <form
          onSubmit={handleAdmin}
          data-aos="flip-right"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
          <div className="flex justify-center">
            <div className="w-96 bg-green-100 rounded-xl shadow-xl p-8">
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="flex justify-center mt-4">
                <input
                  className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-b-8 border-2 hover:text-black"
                  type="submit"
                  value="Make Admin"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="p-5 rounded-xl shadow-xl ms-2 mt-8">
        <div
          className="overflow-x-auto"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="800"
        >
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
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-outline hover:bg-teal-400 hover:border-none text-teal-500 border-b-8 border-2 hover:text-black"
                      >
                        <FaUserShield size={35}></FaUserShield>
                      </button>
                    )}
                  </td>
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
