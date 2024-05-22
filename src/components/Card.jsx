import React from "react";
import Img from "../assets/coming-soon.jpg"
const Card = ({floor}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img

            className="w-"
            src={Img}
            alt="image for floor plans"
          />
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title text-center">Shoes!</h2> */}
          <p className="text-center font-body font-bold font-lg">{floor}</p>
          
        </div>
      </div>
    </>
  );
};

export default Card;
