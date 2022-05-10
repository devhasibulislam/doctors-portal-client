import React from 'react';
import chair from '../../assets/images/chair.png';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Home = () => {
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
        <div>
            {/* banner */}
            <div class="hero min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} class="rounded-lg shadow-2xl lg:w-1/2" alt='hero_image' />
                    <div>
                        <h1 class="text-5xl font-bold  w-1/2">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn border-0 font-bold text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
                    </div>
                </div>
            </div>
            {/* appointment informations */}
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
        </div>
    );
};

export default Home;