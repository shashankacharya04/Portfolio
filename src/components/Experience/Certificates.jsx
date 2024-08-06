import React from "react";
import internship from "../../../public/certificates/internship.jpg";
import workshop from "../../../public/certificates/reactjs.jpg";
import prize from "../../../public/certificates/prize.jpg";
const Certificates = () => {
  return (
    <>
      <div className="m-8 gap-4  p-5 rounded-lg ">
        <div className="flex justify-center gap-4  p-3 rounded-md">
          <div className="card glass w-80">
            <figure>
              <img src={internship} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                WEB APPLICATION DEVELOPMENT - Internship (2024)
              </h2>
              <p>
                Completed 6 days internship programme on "Web Application
                development " Successfully at CODELAB SYSTEMS, Mangalore from
                25th to 31st May 2024.
              </p>
            </div>
          </div>

          <div className="card glass w-80 ">
            <figure>
              <img src={workshop} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                WEB APPLICATION DEVELOPMENT IN REACT JS (2024)
              </h2>
              <p>
                completed my 6 day workshop on "Web application development in
                React js " Organised by CODELAB SYSTEMS, Mangalore
              </p>
            </div>
          </div>
        </div>
        {/* //we dev comp */}
        <div className=" rounded-md">
          <div className="card  lg:card-side bg-base-100 shadow-xl h-96 mt-4 px-3 bg-transparent ">
            <figure>
              <img src={prize} alt="Album" className="h-full" />
            </figure>
            <div className="card-body bg-transparent">
              <h2 className="card-title">Web design Competition</h2>
              <h3>SDM (Autonomous) College Ujire</h3>
              <p>
                Secured First price in Web Design Competition held by IT-Club At
                SDM College Ujire
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificates;
