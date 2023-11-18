const HistoryCard = ({ paymentData }) => {
  const { date, transactionId, quantity, price } = paymentData;
  return (
    <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="800">
      <div className="flex flex-row justify-center items-center bg-base-100 p-5 gap-2 rounded-md shadow-xl">
        <h1>
          <span className="font-bold ">Date : </span>
          {date.length < 25 ? <>{date}</> : <>{date.slice(0, 25)}</>}
        </h1>
        <h1>
          {" "}
          <span className="font-bold  text-teal-500 ">T. ID : </span>
          {transactionId}
        </h1>
        <h1>
          <span className="font-bold ">Quantity : </span>
          {quantity}
        </h1>
        <h1>
          <span className="font-bold text-teal-500 ">Price : </span>${price}
        </h1>
      </div>
    </div>
  );
};

export default HistoryCard;
