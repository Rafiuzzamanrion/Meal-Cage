import { RiDeleteBin6Line } from "react-icons/ri";
import UseMenu from "../../../Hooks/UseMenu";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const ManageCard = ({ item }) => {
  const { name, image, price, _id } = item;
  const [, refetch] = UseMenu();
  const [axiosSecure] = UseAxiosSecure();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Do you want to delete it ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${_id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire(
              "Deleted!",
              `${name} has been deleted successfully`,
              "success"
            );
          }
        });
      }
    });
  };

  //   const handleEdit = (_id) => {
  //     console.log(_id);
  // Swal.fire({
  //     title: "Do you want to Edit it ?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#14A44D",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, Edit it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios.delete(`https://meal-cage-server.vercel.app/menu/${_id}`, {
  //         method: "DELETE",
  //       })
  //         .then((data) => {
  //           if (data.data.deletedCount > 0) {
  //             refetch();
  //             Swal.fire(
  //               "Deleted!",
  //               `${name} has been Edited successfully`,
  //               "success"
  //             );
  //           }
  //         });
  //     }
  //   });
  //   };

  return (
    <div
      className="w-full"
      data-aos="fade-right"
      data-aos-easing="linear"
      data-aos-duration="800"
    >
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ borderRadius: "0 200px 200px 200px", padding: "15px" }}
            className="w-[120px] h-[120px] lg:ms-5 md:pr-6 md:ps-6 md:ms-4"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body flex flex-row justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p className=" font-bold  text-teal-500 mx-6">${price}</p>

          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline btn-circle text-error border-2 hover:border-none hover:text-black  hover:bg-error"
          >
            <RiDeleteBin6Line size={36} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageCard;
