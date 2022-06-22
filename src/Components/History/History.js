import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';
import TablePro from './TablePro';

const History = () => {
    const [user, loading] = useAuthState(auth);
    const [histories, setHistories] = useState([]);

    useEffect(() => {
        fetch(`https://damp-brushlands-74302.herokuapp.com/data?email=${user?.email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => setHistories(data))
    }, [user?.email])

    if (loading) {
        return <Loading></Loading>
    }
    console.log(histories);
    return (
        <div className='container mx-auto h-screen'>
            <h1 className='text-neutral text-3xl  lg:text-4xl text-center font-bold my-5'>Here your history</h1>
            <h4 className='text-red-500 text-xl text-center font-bold my-5'>Your email: {user?.displayName}</h4>
            <div className="overflow-x-auto">
                <table className="table w-full table-normal">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Searched Queries</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            histories.map((history, index) => <TablePro history={history} index={index} key={history._id}></TablePro>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;