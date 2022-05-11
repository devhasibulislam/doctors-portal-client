import React from 'react';
import Appointment from './Appointment';
import AppointmentDirect from './AppointmentDirect';
import Banner from './Banner';
import Services from './Services';

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
            </div>
        </div>
    );
};

export default Home;