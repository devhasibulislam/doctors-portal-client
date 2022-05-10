import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const servicesInformations = [
        {
            id: 1,
            title: "Fluoride Treatment",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas aut cumque, iure perferendis iste vel!",
            img: fluoride
        },
        {
            id: 2,
            title: "Cavity Filling",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, molestiae voluptate. Ipsam molestias voluptates magnam possimus, dolorem neque cupiditate tempora!",
            img: cavity
        },
        {
            id: 3,
            title: "Teeth Whitening",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere nisi porro provident delectus est reiciendis incidunt natus quisquam minima?",
            img: whitening
        }
    ];
    return (
        <div className='my-32'>
            <h4 className='uppercase text-center text-primary font-bold'>Our Services</h4>
            <h2 className='text-center text-5xl mt-4'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-4 mt-16'>
                {
                    servicesInformations.map(serviceInformation => <div
                        key={serviceInformation.id}
                        class="card glass pt-8">
                        <figure><img src={serviceInformation.img} alt="car!" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{serviceInformation.title}</h2>
                            <p>{serviceInformation.desc}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;