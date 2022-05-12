import React, { useState } from 'react';

const Modal = (props) => {
    const { treatment } = props;
    const { _id, name, slots } = treatment;
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleBookingSubmit = (event) => {
        event.preventDefault();

        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;

        console.log(slot, name, phone, email);
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
                        <input required type="text" name='name' id='name' placeholder="Full Name" className="input input-bordered w-full" />
                        <input required type="tel" name="phone" id="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input required type="email" name="email" id="email" placeholder="Email" className="input input-bordered w-full" />
                        <div className="modal-action">
                            <input type="submit" value="Submit" className='btn w-full text-white' htmlFor="booking-modal" disabled={formSubmitted} />
                            {/* <label htmlFor="booking-modal" className="btn w-full text-white" type="submit">SUBMIT</label> */}
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Modal;