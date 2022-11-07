import React from "react";
const PublicReaction = (props) => {
  const { name, description,location, picture } = props.reaction;
  return (
    <div >
      <div class="card bg-base-100 shadow-xl p-4">
        <div>
          <p className="text-left">
            {description}
          </p>
        </div>
        <div className="flex">
          <div class="avatar my-8">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={picture} alt="people3" />
            </div>
          </div>
          <div class="card-body text-left align-middle">
            <h2 class="card-title"> {name}</h2>
            <p> {location} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicReaction;
