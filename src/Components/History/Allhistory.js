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
        fetch("http://localhost:5000/data", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
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
            <div class="overflow-x-auto">
                <table class="table w-full table-normal">

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