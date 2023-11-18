import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseCart from "../../../Hooks/UseCart";
import axios from "axios";

const MyCartItem = ({ item }) => {
  const { name, image, price, _id } = item;
  const [, refetch] = UseCart();

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you want to delete it ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#14A44D",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your item has been deleted successfully",
                "success"
              );
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl"
    data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="800">
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
        <p className=" font-bold  text-success mx-6">${price}</p>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-outline text-error  hover:bg-error"
        >
          <RiDeleteBin6Line size={36} />
        </button>
      </div>
    </div>
  );
};

export default MyCartItem;
