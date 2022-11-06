import React from "react";

const Service = (props) => {
    const { name,description, picture} = props.service;
    
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={picture}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name.slice(0,30)}</h2>
          <p>{description.slice(0,100)}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
