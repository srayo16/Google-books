import React from 'react';

const AllHistoryTable = ({ history, index }) => {
    console.log(history)
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{history?.searched}</td>
                <td>{history?.email}</td>
            </tr>
        </>
    );
};

export default AllHistoryTable;