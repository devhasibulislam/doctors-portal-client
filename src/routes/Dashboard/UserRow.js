import React from 'react';

const UserRow = ({index, user}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td><button className='btn btn-primary'>Make Admin</button></td>
            <td><button className='btn btn-secondary'>Remove User</button></td>
        </tr>
    );
};

export default UserRow;