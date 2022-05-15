import React from 'react';

const AppointmentTable = ({ myAppointment, index }) => {
    const { patientName, treatmentName, appointmentTime} = myAppointment;
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{appointmentTime}</td>
        </tr>
    );
};

export default AppointmentTable;