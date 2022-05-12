import React, { useState } from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner';
import Modal from './Modal';
import Services from './Services';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    const [treatment, setTreatment] = useState({});

    return (
        <div>
            {/* banner */}
            <Banner
                selected={selected}
                setSelected={setSelected}
            />
            <div className='container mx-auto'>
                {/* services */}
                <Services
                    selected={selected}
                    setTreatment={setTreatment}
                />
                {/* modal */}
                <Modal
                    treatment={treatment}
                />
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Appointment;