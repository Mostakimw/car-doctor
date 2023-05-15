import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ServiceCard = ({ service }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions">
          <p className="text-xl text-orange-500">Price: ${price}</p>
          <Link to={`checkout/${_id}`} className="btn">
            {" "}
            <FaArrowRight></FaArrowRight>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
