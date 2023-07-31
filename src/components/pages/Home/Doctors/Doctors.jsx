import React, { useEffect, useState } from "react";
import Doctor from "./Doctor";

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('/doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    
  return (
    <>
    <div className="text-center space-y-4">
      <h2 className="text-4xl font-bold">Doctors</h2>
      <p className="text-xl">We Have Best Doctors Book Them Now</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {
            doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor} ></Doctor>)
        }
    </div>
      
    </>
  );
};

export default Doctors;
