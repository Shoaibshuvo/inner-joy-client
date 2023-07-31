import React from 'react';
import cigona from '/cigona.png';
import humana from '/humana.png';
import oscar from '/oscar.png';
import aetna from '/aetna.png';
import { FaAngleRight } from 'react-icons/fa6';
const Insurance = () => {

    return (
        <div className='grid md:grid-cols-3 px-8 py-6 bg-slate-100'>
            <div >
                <p className='text-[#175C62] font-bold'>We accept insurance. Covered members pay an average copay of $30</p>
                <a href="#" className='flex items-center gap-1 text-[#1a976d] font-bold text-xl '>Check coverage <FaAngleRight className='pt-1'></FaAngleRight></a>
            </div>
            <div className='col-span-2 mt-10 md:mt-0'>
                <div className='grid grid-cols-2 md:grid-cols-4 items-center gap-4 '>
                <div className=''>
                <img src={cigona} alt="" />
                </div>
                <div>
                <img src={humana} alt="" />
                </div>
                <div>
                <img src={oscar} alt="" />
                </div>
                <div>
                <img src={aetna} alt="" />
                </div>
                </div>
            </div>
        </div>
    );
};

export default Insurance;