import React from "react";

const LanguageCard = ({ lang }) => {
  return (
    <div className="stack p-1">
      <div className="border-base-content card bg-base-100 w-28 border text-center">
        <img src={lang.image} alt="pic" className="" />
      </div>
      <div className="border-base-content card bg-base-100 w-36 border text-center">
        <div className="card-body">B</div>
      </div>
      <div className="border-base-content card bg-base-100 w-36 border text-center">
        <div className="card-body">C</div>
      </div>
    </div>
  );
};

export default LanguageCard;
