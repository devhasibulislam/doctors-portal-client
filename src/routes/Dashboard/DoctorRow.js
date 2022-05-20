import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ index, doctor, refetch }) => {
    const { name, img, specialty, email } = doctor;

    const handleRemoveDoctor = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(request => request.json())
            .then(response => {
                console.log(response)
                if (response.deletedCount) {
                    toast.success(`deletion ${name} success`);
                    refetch();
                }
            })
    };
    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>
                {/* <img src={img} alt="avatar" className='w-8 h-8 rounded-full object-cover' /> */}
                <div class="avatar">
                    <div class="w-8 mask mask-hexagon">
                        <img src={img} alt='avatar' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button class="btn btn-active btn-primary text-white" onClick={() => handleRemoveDoctor(email)}>Remove</button>
            </td>
        </tr>
    );
};

export default DoctorRow;