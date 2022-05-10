import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner />
            {/* appointment */}
            <Appointment />
            {/* services */}
            <Services />
        </div>
    );
};

export default Home;