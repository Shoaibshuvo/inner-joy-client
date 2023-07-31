import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import doc from "/doc.jpg";
import writing from "/writing.jpg";
const Hworks = () => {
  return (
    <div className="my-10 ">
      <h1 className="text-4xl font-bold text-center py-6">
        How InnerJoy Works
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="flex flex-col items-center col-span-3">
            <img src={writing} alt="" />
            <div className="text-[#175C62] text-center">
              <h1 className="text-3xl font-bold ">Collect Information</h1>
              <p className="text-lg ">
                Answer a few questions about your preferences.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="hidden sm:block">
              <FaArrowRightLong className="text-6xl "></FaArrowRightLong>
            </div>
          </div>
          <div className="flex flex-col items-center col-span-3">
            <img src={doc} alt="" />
            <div className="text-[#175C62] text-center">
              <h1 className="text-3xl font-bold ">Start therapy</h1>
              <p className="text-lg ">
                Begin the journey towards a happier you
              </p>
            </div>
          </div>
        </div>
        <div className="text-center my-10">
        <button className="btn btn-wide bg-[#175C62] text-white  ">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default Hworks;
