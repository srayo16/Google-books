import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import AllHistoryTable from './AllHistoryTable';

const Allhistory = () => {
    const [allhistory, setAllhistory] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch("https://damp-brushlands-74302.herokuapp.com/alldata", {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setAllhistory(data);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='text-neutral text-3xl  lg:text-4xl text-center font-bold my-5'>All History</h1>
            <div className="overflow-x-auto">
                <table className="table w-full table-normal">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Searched Queries</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allhistory.map((history, index) => <AllHistoryTable history={history} key={history._id} index={index}></AllHistoryTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Allhistory;