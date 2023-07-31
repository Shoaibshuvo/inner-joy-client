import React from "react";
import alz from "/alz.png";
import business from "/business.png";
import cnbc from "/cnbc.png";
import fox from "/fox.png";
import hafing from "/hafing.png";
import theNew from "/the-new-york-times.png";
import today from "/today.png";

const Known = () => {
  return (
    <div className="py-4 px-2 flex justify-center items-center gap-4">
      <div className="">
        <img src={alz} alt=""  className="w-full"/>
      </div>
      <div>
        <img src={fox} alt="" className="w-full"/>
      </div>
      <div>
      <img src={hafing} alt="" className="w-full" />
      </div>
      <div>
      <img src={today} alt="" className="w-full" />
      </div>
      <div>
      <img src={cnbc} alt="" className="w-full" />
      </div>
      <div>
      <img src={theNew} alt="" className="w-full" />
      </div>
      <div>
      <img src={business} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Known;
