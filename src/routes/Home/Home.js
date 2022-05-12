import React from 'react';
import Appointment from './Appointment';
import AppointmentDirect from './AppointmentDirect';
import Banner from './Banner';
import Contact from './Contact';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner />
            <div
                className='container mx-auto'
            >
                {/* appointment information */}
                <Appointment />

                {/* services */}
                <Services />

                {/* appointment direct */}
                <AppointmentDirect />

                {/* Testimonial */}
                <Testimonial />
                
                {/* contact */}
                <Contact />
            </div>
        </div>
    );
};

export default Home;