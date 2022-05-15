import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner';
import Modal from './Modal';
import Services from './Services';
import 'react-day-picker/dist/style.css';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
    const [treatment, setTreatment] = useState({});

    // if (!selected) {
    //     setSelected(new Date());
    // }

    console.log(selected);

    return (
        <div>
            <PageTitle title={'doctors portal - appointment'} />
            {/* banner */}
            <Banner
                selected={selected}
                setSelected={setSelected}
            />
            {
                selected
                    ?
                    <div className='container mx-auto'>
                        {/* services */}
                        <Services
                            selected={selected}
                            setTreatment={setTreatment}
                        />
                        {/* modal */}
                        <Modal
                            treatment={treatment}
                            date={selected}
                        />
                    </div>
                    :
                    <div class="alert alert-warning shadow-lg my-12 justify-center container mx-auto">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            <span>Warning: Please choose a date from above calender!</span>
                        </div>
                    </div>
            }
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Appointment;