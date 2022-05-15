import axios from 'axios';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = (props) => {
    const { treatment, date } = props;
    const { _id, name, slots } = treatment;
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [user] = useAuthState(auth);
    const formattedDate = format(date, "PP");

    const handleBookingSubmit = (event) => {
        event.preventDefault();

        const slot = event.target.slot.value;
        const pName = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;

        const booking = {
            treatmentID: _id,
            treatmentName: name,
            patientName: pName,
            patientEmail: email,
            patientPhone: phone,
            appointmentTime: slot,
            appointmentDate: formattedDate
        };

        const getBooking = async () => {
            const url = `http://localhost:5000/booking`;
            const { data } = await axios.post(url, booking);
            console.log(data);
            if (data.success) {
                toast(`booking added on ${formattedDate} at ${slot}`);
            } else {
                toast.error(`sorry, you've already booked it on ${data.result.appointmentDate} at ${data.result.appointmentTime}`);
            }
        };
        getBooking();

        console.log(booking);
        setFormSubmitted(true)
        event.target.reset();
    };
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 text-white" onClick={() => setFormSubmitted(false)}>✕</label>
                    <h3 className="font-bold text-lg text-primary">{name}</h3>
                    <form className='mt-8 grid grid-cols-1 gap-4' onSubmit={handleBookingSubmit}>
                        <input type="text" value={name} disabled className="input input-bordered w-full" />
                        <select
                            name="slot"
                            id="slot"
                            className='border-2 p-2 rounded-lg bg-base-100'
                            disabled={formSubmitted}
                        >
                            {
                                slots?.map(slot => <option key={_id} value={slot} className="bg-base-200">{slot}</option>)
                            }
                        </select>
                        <input required type="text" name='name' id='name' value={user?.displayName} disabled className="input input-bordered w-full" />
                        <input required type="tel" name="phone" id="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input required type="email" name="email" id="email" value={user?.email} disabled className="input input-bordered w-full" />
                        <div className="modal-action">
                            <input type="submit" value="Submit" className='btn w-full text-white' htmlFor="booking-modal" disabled={formSubmitted} />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Modal;