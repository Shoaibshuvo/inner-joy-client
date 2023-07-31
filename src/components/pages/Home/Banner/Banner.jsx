import React from "react";
import video from "../../../../assets/video.mp4";
const Banner = () => {
  return (
    <>
      <div className="hero " >
        <video autoPlay muted loop className="hero-video w-full ">
          <source src={video} type="video/mp4" />
          {/* You can add multiple <source> elements for different video formats (e.g., WebM, Ogg) */}
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl mt-72 md:mt-0">
            <h2 className="text-4xl font-extrabold text-white" >Empower your mind, nurture your mental health</h2>
            <p className="text-bold text-white">Mental health support for your whole being. Effective and affordable.</p>
            <div className="flex gap-2 flex-col md:flex-row mt-2">
            <div className="bg-[#DFF7F4] text-[#175C62]  px-5 py-2  rounded-xl">
                <h2 className="text-xl font-semibold">Individual</h2>
                <p className="text-[#175C62]">Therapy for me</p>
            </div>
            <div className="bg-[#DEE7FF] text-[#175C62]  px-5 py-2  rounded-xl ">
                <h2 className="text-xl font-semibold">Couples</h2>
                <p className="text-[#175C62]">Therapy for us</p>
            </div>
            <div className="bg-[#8997f7] text-[#175C62]  px-5 py-2  rounded-xl">
                <h2 className="text-xl font-semibold">Teens</h2>
                <p className="text-[#175C62]">Ages 13-17</p>
            </div>
            <div className="bg-[#f1e6e6] text-[#175C62]  px-5 py-2  rounded-xl">
                <h2 className="text-xl font-semibold">Psychiatry</h2>
                <p className="text-[#175C62]">Medication management</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
