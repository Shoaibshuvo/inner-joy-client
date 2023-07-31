import React from "react";
import { FaCertificate, FaHospital } from "react-icons/fa6";
const Doctor = ({ doctor }) => {
  const { name, id, work, degree, photo } = doctor;
  // console.log(name, id, work, degree, photo);
  return (
    <>
      <div className="card card-compact w-80 lg:w-96 bg-base-100 shadow-xl mx-auto ">
        <figure>
          <img
            src={photo}
            alt="Doctor"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title pl-5">{name}</h2>
          <p className="flex gap-2 items-center"><FaCertificate className="text-5xl text-[#175C62]"></FaCertificate>{degree}</p>
          <p className="flex gap-2 items-center"><FaHospital className="text-2xl text-[#175C62]"></FaHospital>{work}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-[#175C62] text-white hover:bg-green-500 ">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
