import React from "react";
import { FaPhone, FaRegMessage, FaVideo } from "react-icons/fa6";

const Services = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="text-center ">
          <h2 className="text-4xl font-bold">Services</h2>
          <p className="mt-4">
            We offer comprehensive online mental health treatment options to
            meet all your needs.
          </p>
        </div>

        <div className="flex items-center justify-center gap-4">
          <p className="flex items-center gap-2 text-xl text-[#175C62] ">
            <FaRegMessage></FaRegMessage>Messaging
          </p>

          <p className="flex items-center gap-2 text-xl text-[#175C62] ">
            <FaPhone></FaPhone>Phone
          </p>

          <p className="flex items-center gap-2 text-2xl text-[#175C62] ">
            <FaVideo></FaVideo>Video
          </p>
        </div>
      </div>

      {/* service card */}
      <div className="px-10 md:px-20 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
        <div className="card w-72 bg-[#DFF7F4] shadow-xl">
          <div className="card-body text-[#175C62] ">
            <h2 className="card-title">Individual</h2>
            <p>Therapy for me</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn bg-[#175C62] text-white btn-wide border-0 hover:bg-green-500">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-[#DEE7FF] shadow-xl">
          <div className="card-body text-[#175C62]">
            <h2 className="card-title">Couples</h2>
            <p>Therapy for us</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn bg-[#175C62] text-white btn-wide border-0 hover:bg-green-500">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-[#8997F7] shadow-xl">
          <div className="card-body text-[#175C62]">
            <h2 className="card-title">Teen</h2>
            <p>Therapy for teen</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn bg-[#175C62] text-white btn-wide border-0 hover:bg-green-500">Get Started</button>
            </div>
          </div>
        </div>
        <div className="card w-72 bg-[#F1E6E6] shadow-xl">
          <div className="card-body text-[#175C62]">
            <h2 className="card-title">Psychiatry</h2>
            <p>Medication management</p>
            <div className="card-actions justify-center mt-6">
              <button className="btn bg-[#175C62] text-white btn-wide border-0 hover:bg-green-500">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Services;
