import React from 'react';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Appointment = () => {
    const appointmentInformations = [
        {
            id: 1,
            title: "Opening Hours",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsam.",
            icon: clock,
            bgFrom: '#19D3AE',
            bgTo: '#0FCFEC'
        },
        {
            id: 2,
            title: "Contact us now",
            desc: "+000 123 456789",
            icon: marker,
            bgFrom: '#0C0404',
            bgTo: '#0FCFEC'
        },
        {
            id: 3,
            title: "Visit our location",
            desc: "Brooklyn, NY 10036, United States",
            icon: phone,
            bgFrom: '#19D3AE',
            bgTo: '#0FCFEC'
        }
    ];

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4'>
            {
                appointmentInformations.map(appointmentInformation => <div
                    key={appointmentInformation.id}
                    class={`card card-side 
                        ${appointmentInformation.id !== 2 ? `bg-gradient-to-r from-[${appointmentInformation.bgFrom}] to-[${appointmentInformation.bgTo}]` : 'bg-[#3A4256]'} 
                        shadow-xl p-4`}>
                    <figure><img src={appointmentInformation.icon} alt="appointment" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-white">{appointmentInformation.title}</h2>
                        <p className='text-white'>{appointmentInformation.desc}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Appointment;