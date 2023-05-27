import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import AllServices from './AllServices/AllServices';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>

            <AllServices></AllServices>
            <MakeAppointment></MakeAppointment>
            <InfoCards></InfoCards>
            {/* <Services></Services> */}


            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;