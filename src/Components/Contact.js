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
          <h2 className="text-3xl mb-8">Fell Free Contact Us</h2>
          <p className="text-2xl">
           email: info@etshomerent
          </p>
          <p className="text-2xl">
          +13187060035 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
