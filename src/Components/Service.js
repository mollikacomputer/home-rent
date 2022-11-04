import React from "react";

const Service = (props) => {
    const { name,description} = props.service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
