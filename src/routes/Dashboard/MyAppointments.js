import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageTitle from '../../components/PageTitle/PageTitle';
import auth from '../../firebase.init';
import AppointmentTable from './AppointmentTable';

const MyAppointments = () => {
    const [myAppointments, setMyAppointments] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            const getMyAppointments = async () => {
                const url = `http://localhost:5000/bookings?email=${user.email}`;
                const { data } = await axios.get(url);
                console.log(data);
                setMyAppointments(data);
            };
            getMyAppointments();
        }
    }, [user]);
    return (
        <div>
            <PageTitle title={'doctors portal - my appointments'} />
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Service</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myAppointments.map((myAppointment, index) => <AppointmentTable
                                    key={myAppointment._id}
                                    myAppointment={myAppointment}
                                    index={index}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAppointments;