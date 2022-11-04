import React from "react";
import contactImg from "../assets/contact.svg";
const Contact = () => {
  return (
    <div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 items-center text-center ">
        <figure>
          <img src={contactImg} alt="Album" />
        </figure>

        <div className="">
          <h2 className="card-title">New album is released!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            id, eveniet odit aperiam, provident molestias, dicta veritatis est
            voluptates ex tempore nostrum consequuntur enim maxime
            exercitationem nulla velit facere illum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
