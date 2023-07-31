import React from 'react';
import Banner from '../Banner/Banner';
import Known from '../Known/Known';
import Insurance from '../Insurance/Insurance';
import Hworks from '../Hworks/Hworks';
import Services from '../Services/Services';
import Doctors from '../Doctors/Doctors';




const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Insurance></Insurance>
            <Hworks></Hworks>
            <Services></Services>
            <Doctors></Doctors>
            <Known></Known>
            
        </>
    );
};

export default Home;