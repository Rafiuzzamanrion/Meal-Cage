import axios from "axios";
import Swal from "sweetalert2";

const Reservation = () => {


  const handleReserve = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const time = form.time.value;
    const name = form.name.value;
    const email = form.email.value;
    const data = { date: date, time: time, name: name, email: email };
    console.log(data);

    Swal.fire({
        title: "Do you want to Reserved ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "green",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Reserve it!"
      }).then((result) => {
        if (result.isConfirmed) {
    axios.post('http://localhost:5000/reservation',data)
    .then(res =>{
        if(res.data.insertedId){
            Swal.fire({
                title: "Reserved !",
                text: "You have successfully Reserved",
                icon: "success"
              });
        }
        form.reset()
    });}
  });
  };
  return (
    <div className="border shadow-xl p-10 mx-3">
      <h1 className="text-center text-4xl my-5 uppercase">Reserve Form</h1>
      <form onSubmit={handleReserve}>
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              required
              placeholder="Type here"
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input
              type="time"
              name="time"
              required
              placeholder="Type here"
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Type here"
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Type here"
              className="input input-accent input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            required
            className="textarea textarea-accent textarea-bordered h-24"
            placeholder="Type here"
          ></textarea>
        </div>
        <div className="flex justify-center items-center my-3">
          <input
            className="btn btn-outline text-teal-500 hover:text-black border-b-8 hover:bg-teal-500 hover:border-none"
            type="submit"
            value="reserve now"
          />
        </div>
      </form>
    </div>
  );
};

export default Reservation;
