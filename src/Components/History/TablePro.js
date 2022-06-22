import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const TablePro = ({ history, index }) => {
    const { searched } = history;
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{user?.displayName}</td>
                <td>{searched}</td>
                <td>{user?.email}</td>
            </tr>
        </>
    );
};

export default TablePro;