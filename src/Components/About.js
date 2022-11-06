import React from "react";
import AboutImg from '../assets/About-us.svg';
const About = () => {
  return (
    <div>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 items-center text-center mx-16">
        <figure>
          <img src={AboutImg} alt="Album" />
        </figure>

        <div className="">
          <h2 className="card-title">New Rising Provider</h2>
          <p>
          We are trested usa base any kinds of state moving, rental and property sale related company. We help for moving, house sale and rent related people. If you need any kinds of service then you can listed our company to get update news latter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
