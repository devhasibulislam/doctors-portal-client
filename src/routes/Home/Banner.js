import React from 'react';
import chair from '../../assets/images/chair.png';
import chairBG from '../../assets/images/bg.png';

const Banner = () => {
    return (
        <div
            class="hero min-h-screen bg-base-100 bg-no-repeat bg-cover bg-bottom"
            style={{ backgroundImage: `url(${chairBG})` }}
        >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="rounded-lg shadow-2xl lg:w-1/2" alt='hero_image' />
                <div>
                    <h1 class="text-5xl font-bold  lg:w-1/2 md:w-1/2">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn border-0 font-bold text-white bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;