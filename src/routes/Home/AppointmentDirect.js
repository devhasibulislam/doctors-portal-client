import React from 'react';
import appointment from '../../assets/images/appointment.png';

const AppointmentDirect = () => {
    return (
        <div>
            <div
                className='grid lg:grid-cols-2 grid-cols-1'
                style={{ backgroundImage: `url(${appointment})` }}
            >
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AppointmentDirect;