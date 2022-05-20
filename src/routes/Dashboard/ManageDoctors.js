import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () => fetch('http://localhost:5000/doctor', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;