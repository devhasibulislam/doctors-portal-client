import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const Services = (props) => {
    const { selected, setTreatment } = props;
    const [services, setServices] = useState([]);
    useEffect(() => {
        const url = `services.json`;
        const getServices = async () => {
            const request = await fetch(url);
            const response = await request.json();
            setServices(response);
        };
        getServices();
    }, []);
    return (
        <div className='my-20'>
            <h3 className='text-primary text-2xl text-center'>Available Appointments on {format(selected, 'PP')}</h3>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:px-0 md:px-4 px-4 mt-10'>
                {
                    services.map(service => <div
                        className="card bg-base-100 shadow-xl"
                        key={service._id}
                    >
                        <div className="card-body">
                            <h2 className="card-title justify-center mb-4">{service.name}</h2>
                            <p className='text-center'>
                                {
                                    service.slots.length > 0 ? service.slots[Math.floor(Math.random() * (service.slots.length))] : 'No service available, sorry!'
                                }
                            </p>
                            <p className={`text-center ${service.slots.length === 0 ? 'text-red-500' : 'text-primary'}`}>{service.slots.length} {service.slots.length === 0 ? 'SPACE' : 'SPACES'} AVAILABLE</p>
                            <div className="card-actions justify-center">
                                <label
                                    htmlFor="booking-modal"
                                    className="
                                        btn border-0 
                                        text-white 
                                        bg-gradient-to-r 
                                        from-secondary 
                                        to-primary
                                        hover:bg-gradient-to-r
                                        hover:from-primary
                                        hover:to-secondary
                                        mt-4
                                        modal-button
                                    "
                                    disabled={service.slots.length === 0}
                                    onClick={() => setTreatment(service)}
                                >
                                    Book Appointment
                                </label>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;